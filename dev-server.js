/**
 * MUYUN Portfolio - 优化版本地开发服务器
 * 特性:
 *  - gzip + brotli 压缩 (JS/CSS/HTML/JSON/字体/SVG)
 *  - 全部文件内存缓存 (第二次请求零磁盘IO)
 *  - 静态资源 Cache-Control immutable (版本号更新后自动刷新)
 *  - HTML 文件 no-cache (每次检查)
 *  - 双栈 IPv4 + IPv6 监听 (解决 localhost 优先 IPv6 的问题)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = __dirname;
const PORT = 3000;

// MIME 类型映射
const MIME = {
  '.html': 'text/html;charset=utf-8',
  '.css': 'text/css;charset=utf-8',
  '.js': 'application/javascript;charset=utf-8',
  '.mjs': 'application/javascript;charset=utf-8',
  '.json': 'application/json;charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain;charset=utf-8',
};

// 内存缓存: Map<filepath, Buffer>
const fileCache = new Map();

// 判断是否可压缩
function isCompressible(contentType) {
  return (
    contentType.startsWith('text/') ||
    contentType.includes('javascript') ||
    contentType.includes('json') ||
    contentType.startsWith('font') ||
    contentType.includes('svg')
  );
}

// Content-Encoding 协商
function negotiateEncoding(acceptHeader) {
  if (!acceptHeader) return null;
  if (acceptHeader.includes('br')) return 'br';
  if (acceptHeader.includes('gzip')) return 'gzip';
  return null;
}

// 安全路径：防止路径穿越
function safePath(urlPath) {
  let clean = decodeURIComponent(urlPath.split('?')[0]);
  if (clean === '/') clean = '/index.html';
  const fp = path.join(ROOT, clean);
  if (!fp.startsWith(ROOT)) return null;
  return fp;
}

// 读取文件（带内存缓存）
function readFileCached(fp, callback) {
  if (fileCache.has(fp)) {
    callback(null, fileCache.get(fp), true);
    return;
  }
  fs.readFile(fp, (err, data) => {
    if (err) return callback(err);
    fileCache.set(fp, data);
    callback(null, data, false);
  });
}

// gzip 压缩
function doGzip(buf, cb) {
  zlib.gzip(buf, { level: 6 }, cb);
}

// brotli 压缩
function doBrotli(buf, cb) {
  zlib.brotliCompress(buf, {
    params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 5 },
  }, cb);
}

// 创建服务器
const server = http.createServer((req, res) => {
  const fp = safePath(req.url);
  if (!fp) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  const ext = path.extname(fp).toLowerCase();
  const ct = MIME[ext] || 'application/octet-stream';

  readFileCached(fp, (err, data, fromCache) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found: ' + req.url);
        return;
      }
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Server Error');
      return;
    }

    const enc = negotiateEncoding(req.headers['accept-encoding']);
    const compressible = isCompressible(ct);

    // Cache-Control: 开发模式全部 no-cache，修改后立即生效
    const cc = 'no-cache, no-store, must-revalidate, private';

    const baseHeaders = {
      'Content-Type': ct,
      'Cache-Control': cc,
      'X-Cache': fromCache ? 'HIT' : 'MISS',
      'X-Content-Type-Options': 'nosniff',
    };

    const sendRaw = () => {
      res.writeHead(200, baseHeaders);
      res.end(data);
    };

    const sendCompressed = (buf, encoding) => {
      baseHeaders['Content-Encoding'] = encoding;
      baseHeaders['Vary'] = 'Accept-Encoding';
      res.writeHead(200, baseHeaders);
      res.end(buf);
    };

    if (compressible && enc === 'gzip') {
      doGzip(data, (e, gz) => {
        if (e) return sendRaw();
        sendCompressed(gz, 'gzip');
      });
    } else if (compressible && enc === 'br') {
      doBrotli(data, (e, br) => {
        if (e) return sendRaw();
        sendCompressed(br, 'br');
      });
    } else {
      sendRaw();
    }
  });
});

// 启动：绑定双栈
server.listen({ port: PORT, host: '::', ipv6Only: false }, () => {
  console.log('========================================');
  console.log('  MUYUN Portfolio - Dev Server');
  console.log('========================================');
  console.log(`  URL:   http://localhost:${PORT}/`);
  console.log(`  Root:  ${ROOT}`);
  console.log(`  Zip:   gzip + brotli (text/js/json/font/svg)`);
  console.log(`  Cache: Memory + Cache-Control immutable`);
  console.log(`  Stack: IPv4 + IPv6 dual-stack`);
  console.log('========================================');
  console.log('  Press Ctrl+C to stop');
  console.log('========================================');
});
