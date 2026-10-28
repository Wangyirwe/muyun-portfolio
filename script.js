/* ========================================
   MUYUN Portfolio — Scripts
   ======================================== */

/* ---------- 滚动态修复：Edge 等系统浏览器滚轮锁死 ---------- */
document.documentElement.classList.add('fonts-ready');
document.body.classList.remove('loader-active');

// 强制解锁滚动（内联样式兜底）
(function(){
  var de = document.documentElement, b = document.body;
  de.style.overflowY = 'auto';
  b.style.overflowY = 'auto';
  de.style.position = '';
  b.style.position = '';
  de.style.inset = '';
  b.style.inset = '';
})();

// 统一的弹窗滚动锁定/解锁：隐藏滚动条但补偿 padding-right 防止页面右移
function lockBodyScroll() {
  var de = document.documentElement, b = document.body;
  // 计算当前滚动条宽度
  var sbw = window.innerWidth - de.clientWidth;
  b.style.paddingRight = sbw + 'px';
  de.style.overflowY = 'hidden';
}
function unlockBodyScroll(savedScroll) {
  var de = document.documentElement, b = document.body;
  b.style.paddingRight = '';
  de.style.overflowY = 'auto';
  if(typeof savedScroll === 'number'){
    requestAnimationFrame(function(){
      de.scrollTop = savedScroll;
      b.scrollTop = savedScroll;
      window.dispatchEvent(new Event('scroll'));
    });
  }
}

/* ---------- Mock Data ---------- */
const WORKS = [
  {
    id: 2,
    num: "02",
    title: "妈湾鲲鹏 · 玩具盒包装",
    tag: "Packaging",
    year: "2025",
    size: "tall",
    colSpan: 6,
    label: "Image · 02",
    image: "assets/packaging-01.jpg",
    images: ["assets/packaging-01.jpg", "assets/packaging-02-new.jpg"],
    keywords: ["玩具盒", "卡盒", "IP形象", "刀模"],
    detail: "妈湾鲲鹏主题玩具盒包装组，盒型采用自锁底插口盒结构（80×80×80mm）。整体白绿配色，主视觉为鲲鹏 IP 卡通形象，搭配 HIGH CITY 彩色叠字与骑马、棒球等运动姿态插画，趣味十足。包含 3D 效果图与刀模线展开图两套物料。"
  },
  {
    id: 3,
    num: "03",
    title: "卷轴中的山与海 · 国朝插画",
    tag: "Illustration",
    year: "2025",
    size: "square",
    colSpan: 4,
    label: "Image · 03",
    image: "assets/illustration-1.jpg",
    keywords: ["国朝", "古风", "山水"],
    detail: "以卷轴形式演绎山海意境，青绿设色结合现代构图，将传统绘画的留白与当代视觉语言融合，适用于品牌合作及文创周边。"
  },
  {
    id: 8,
    num: "08",
    title: "冬季雪 · 冰淇淋杯矢量插画",
    tag: "Vector Illustration",
    year: "2023",
    size: "square",
    colSpan: 8,
    label: "Image · 08",
    image: "assets/illustration-3.jpg",
    images: ["assets/illustration-3.jpg", "assets/illustration-2-new-02.jpg", "assets/illustration-2-new-03.jpg"],
    keywords: ["矢量", "插画", "季节"],
    detail: "以冬季雪景为主题的矢量插画，用于冰淇淋品牌冬季限定杯套。扁平化几何风格适配多种尺寸与印刷工艺。"
  },
  {
    id: 4,
    num: "04",
    title: "Pinkdawn · 礼盒包装",
    tag: "Packaging",
    year: "2025",
    size: "",
    colSpan: 8,
    label: "Image · 04",
    image: "assets/packaging-03-new.jpg",
    images: ["assets/packaging-03-new.jpg", "assets/packaging-04.jpg"],
    keywords: ["礼盒", "飞机盒", "食品包装", "刀模"],
    detail: "Pinkdawn 品牌飞机盒礼盒包装。整体玫瑰红与米白配色，外部烫印品牌名与菱形格纹，盒盖内侧米色印字「equal parts soft and bold.」。礼盒内含独立小袋与卡片。包含 3D 效果图与完整刀模线展开图。"
  },
  {
    id: 5,
    num: "05",
    title: "大坛小萝 · 食品包装插画",
    tag: "Illustration",
    year: "2024",
    size: "wide",
    colSpan: 12,
    label: "Image · 05",
    image: "assets/illustration-2.jpg",
    keywords: ["商业插画", "食品", "IP"],
    detail: "为食品品牌定制的系列插画，构建'大坛小萝'IP 形象体系，从包装到周边形成统一视觉语言，助力品牌年轻化转型。"
  },
  {
    id: 6,
    num: "06",
    title: "海报作品",
    tag: "Branding",
    year: "2024",
    size: "",
    colSpan: 4,
    label: "Image · 06",
    image: "assets/graphic-01.jpg",
    images: ["assets/graphic-01.jpg", "assets/graphic-02.jpg", "assets/graphic-03.jpg", "assets/graphic-04.jpg", "assets/graphic-05.jpg", "assets/graphic-06.jpg", "assets/graphic-07.jpg"],
    keywords: ["海报", "平面设计", "餐饮", "公益", "卡通", "极简"],
    detail: "多品类海报作品集，涵盖餐饮促销（KFC×百事 元气套餐、汉堡工作餐）、教育培训（高中暑期托管班）、公益宣传（深圳血液中心无偿献血）、电商女装（VERSATILE 西装促销）、活动推广（春日露营季）、饮品视觉（奶茶春日限定）等不同主题与风格，从卡通插画到极简矢量均有尝试。"
  },
  {
    id: 7,
    num: "07",
    title: "Safranwunder · 藏红花试管包装",
    tag: "Packaging",
    year: "2024",
    size: "",
    colSpan: 6,
    label: "Image · 07",
    image: "assets/packaging-05-new.jpg",
    images: ["assets/packaging-05-new.jpg", "assets/packaging-06.jpg"],
    keywords: ["藏红花", "试管", "卡盒", "黑金", "刀模"],
    detail: "Safranwunder GOLDEN LINE 藏红花试管包装。盒型为细长卡盒（102×40×23mm），黑底烫金品牌名与 mandala 花纹，内含 60×22mm 透明试管瓶装藏红花（0.5g）。包含 3D 效果图（带/不带试管两种状态）、烫金刀模线图与瓶子示意图。"
  },
  {
    id: 9,
    num: "09",
    title: "电商系列",
    tag: "Editorial",
    year: "2023",
    size: "",
    colSpan: 8,
    label: "Image · 09",
    image: "assets/graphic-editorial-02.jpg",
    images: ["assets/graphic-editorial-02.jpg", "assets/graphic-editorial-01.jpg", "assets/graphic-editorial-03.jpg", "assets/graphic-editorial-04.jpg", "assets/graphic-editorial-07.jpg"],
    keywords: ["电商视觉", "海报", "详情页", "文创", "网页"],
    detail: "电商视觉作品集，涵盖：香水品牌促销海报（开春限定、满减优惠）、新疆养生茶详情页（冬瓜荷叶茶 66 元促销）、茶叶品牌成套网页设计（PC+移动端）、水墨国画书签标签（梅兰竹菊）、旅游主题入场券设计（深圳 2026）。涉及美妆、食品茶饮、文创周边、旅游票务等多个品类。"
  },
  {
    id: 10,
    num: "10",
    title: "荒途 · 矢量插画",
    tag: "Illustration",
    year: "2023",
    size: "square",
    colSpan: 4,
    label: "Image · 10",
    image: "assets/illustration-4.jpg",
    keywords: ["荒漠", "矢量", "扁平化"],
    detail: "暖棕调勾勒出一片安静的荒漠原野，蜿蜒小径穿梭在沙砾之间，巨柱仙人掌静立旷野，远山在日光下层层晕开。以扁平化矢量语言，简化地貌与植被轮廓，褪去喧嚣，留存荒原独有的辽阔温柔，捕捉大漠晴日里从容舒缓的氛围感。"
  },
  {
    id: 11,
    num: "11",
    title: "街角少女 · 波普封面插画",
    tag: "Illustration",
    year: "2022",
    size: "square",
    colSpan: 4,
    label: "Image · 11",
    image: "assets/illustration-5.jpg",
    keywords: ["波普", "少女", "杂志封面", "扁平"],
    detail: "橙发女孩穿着经典牛仔外套，明亮色块与几何图形铺满画面，搭配 JAPAN PHOTO、STREET 等杂志字体， halftone 网点点缀其中。以波普艺术风格重新演绎日系街头杂志封面，扁平化线条与高饱和撞色传递轻松明快的情绪。"
  },
  {
    id: 12,
    num: "12",
    title: "冰湖日出 · 雪境风景插画",
    tag: "Illustration",
    year: "2022",
    size: "square",
    colSpan: 4,
    label: "Image · 12",
    image: "assets/illustration-6.jpg",
    keywords: ["风景", "雪山", "湖光", "扁平"],
    detail: "日出时分的雪山湖泊，前景深蓝湖面漂浮着碎冰，中景针叶林被朝阳染成温暖的橙红色，背景连绵雪山在晨光中层次分明。冷暖色调交汇，以扁平块面结合柔和过渡，呈现雪原清晨独有的静谧与辽阔。"
  },
  {
    id: 14,
    num: "14",
    title: "珠江映塔 · 广州城市场景插画",
    tag: "Illustration",
    year: "2021",
    size: "square",
    colSpan: 4,
    label: "Image · 14",
    image: "assets/illustration-8.jpg",
    images: ["assets/illustration-8.jpg"],
    keywords: ["城市", "广州", "矢量", "地标"],
    detail: "广州珠江新城地标群像：前景江面上漂浮着船只，中景保留一排岭南骑楼古建筑，背景广州塔（小蛮腰）与摩天大楼、体育场汇聚成现代天际线，新旧建筑隔江对望。以扁平化矢量语言绘制，淡蓝渐变天空映衬整个城市的清晨质感。"
  },
  {
    id: 13,
    num: "13",
    title: "浪尖飞跃 · 少年冲浪插画",
    tag: "Illustration",
    year: "2021",
    size: "wide",
    colSpan: 8,
    label: "Image · 13",
    image: "assets/illustration-7.jpg",
    keywords: ["动漫", "冲浪", "少年", "运动"],
    detail: "日系动漫风格的冲浪场景：前景棕发少年白衬衫蓝裤，踩着涂鸦冲浪板在浪尖跃起，银带随动作飞扬；背景银发少年踩着黄色冲浪板紧随其后。明亮蓝天、翻滚浪花、远处棕榈小岛，整体画面动感十足，充满夏日冲浪的活力与自由感。"
  },
  {
    id: 15,
    num: "15",
    title: "Dikhra · 戒子包装设计",
    tag: "Packaging",
    year: "2025",
    size: "",
    colSpan: 6,
    label: "Image · 15",
    image: "assets/packaging-dikhra-01.jpg",
    images: ["assets/packaging-dikhra-01.jpg", "assets/packaging-dikhra-02.jpg", "assets/packaging-dikhra-03.jpg", "assets/packaging-dikhra-04.jpg", "assets/packaging-dikhra-05.jpg"],
    keywords: ["戒子包装", "精装盒", "书型盒", "刀模", "3D效果图"],
    detail: "Dikhra 戒子品牌精装书型盒包装设计。盒型为翻盖书型天地盖（100×100×50mm，厚纸 2mm），外部米白色哑光烫印品牌玫瑰 Logo，盒盖内侧米色烫金印字「REMEMBER HIM」及古兰经文引用。内衬白色天鹅绒戒枕，下方配有插卡式内托纸盘。包含 3D 效果图（戒枕带/不带戒子两种场景）与完整刀模线展开图。"
  },
  {
    id: 16,
    num: "16",
    title: "食光小栈 · 坚果零食礼盒",
    tag: "Packaging",
    year: "2025",
    size: "",
    colSpan: 4,
    label: "Image · 16",
    image: "assets/packaging-07-01.jpg",
    images: ["assets/packaging-07-01.jpg", "assets/packaging-07-03.jpg", "assets/packaging-07-02.jpg"],
    keywords: ["坚果", "礼盒", "抽屉盒", "食品包装", "刀模"],
    detail: "食光小栈品牌坚果零食抽屉礼盒。盒身为深棕色烫印品牌名「食光小栈」，顶盖满铺坚果（碧根果、杏仁等）写实插画，米黄色内盒带拉片提手。包含 3D 效果图（抽屉拉开/合上两种状态）与刀模线展开图。"
  },
  {
    id: 17,
    num: "17",
    title: "索菲鱼猫粮VI品牌包装设计",
    tag: "Packaging",
    year: "2025",
    size: "",
    colSpan: 8,
    label: "Image · 17",
    image: "assets/packaging-cat-01.jpg",
    images: ["assets/packaging-cat-01.jpg", "assets/packaging-cat-02.jpg", "assets/packaging-cat-03.jpg", "assets/packaging-cat-04.jpg"],
    keywords: ["猫粮", "品牌VI", "IP形象", "食品包装", "刀模"],
    detail: "索菲鱼（Sophie Fish · 喵喵の小店）猫粮品牌 VI 与全系包装设计。主视觉为戴眼镜的橘猫吉祥物，统一应用于：青蓝色冻干主粮自立袋（98%高含肉量）、薄荷绿双色猫条零食、黄色金枪鱼罐头、绿色手提袋、纸碗桶等品类。包含 Logo 演化稿、完整刀模线展开图与 3D 效果图，形成从品牌标识到终端包装的完整视觉体系。"
  },
  {
        id: 18,
        num: "18",
        title: "花园园林 · 景观规划彩平风格图纸",
        tag: "Editorial",
        year: "2025",
        size: "tall",
        colSpan: 4,
        label: "Image · 18",
        image: "assets/graphic-garden.jpg",
        images: ["assets/graphic-garden.jpg"],
        keywords: ["景观设计", "园林", "规划图"],
        detail: "花园园林景观规划图纸，PS板绘完成，呈现花园空间布局、植物配置与动线设计。"
      }
];

/* ---------- 渲染作品集 ---------- */
let currentFilter = 'illustration';

// tag 到 filter key 的映射
const TAG_FILTER_MAP = {
  Packaging: 'packaging',
  Illustration: 'illustration',
  'Vector Illustration': 'illustration',
  Branding: 'graphic',
  Editorial: 'graphic'
};

function renderWorks() {
  const grid = document.getElementById('worksGrid');
  if (!grid) return;
  grid.classList.toggle('filter-graphic', currentFilter === 'graphic');
  grid.classList.toggle('filter-illustration', currentFilter === 'illustration');
  // body 上加 filter 类 — 方便全局样式切换
  document.body.classList.toggle('filter-illustration', currentFilter === 'illustration');
  document.body.classList.toggle('filter-packaging', currentFilter === 'packaging');
  document.body.classList.toggle('filter-graphic', currentFilter === 'graphic');

  let list = WORKS.filter(w => TAG_FILTER_MAP[w.tag] === currentFilter);
  const isStatic = currentFilter === 'packaging' || currentFilter === 'illustration';

  grid.innerHTML = list.map((w, i) => {
    // 平面 tab 的 .gmrk 移到 .work-card 层级（不是 .work-placeholder 里）
    // 因为 .work-placeholder 需要 overflow:hidden 来裁 transform scale 的图片
    const mk = currentFilter === 'graphic' ? '<span class="gmrk cm-tl"></span><span class="gmrk cm-tr"></span><span class="gmrk cm-bl"></span><span class="gmrk cm-br"></span><span class="gmrk tm"></span><span class="gmrk bm"></span><span class="gmrk lm"></span><span class="gmrk rm"></span>' : '';
    const hasDark = w.id === 1 || w.id === 2 || w.id === 4 || w.id === 7;
    const phClass = !isStatic ? (
      (w.id === 1 ? ' has-signal-canvas' : '') +
      (w.id === 7 ? ' has-boot-screen' : '') +
      (w.id === 4 ? ' has-flow-dots' : '')
    ) : '';
    return `
    <article class="work-card ${w.size} col-span-${w.colSpan} reveal${currentFilter === 'graphic' ? (hasDark ? ' card-dark' : '') : ''}" data-work="${w.id}" tabindex="0" role="button" data-title="${w.title}" data-tag="${w.tag}" data-year="${w.year}" data-num="${String(i+1).padStart(2,'0')}" data-detail="${w.detail || ''}" data-image="${w.image || ''}" data-keywords="${(w.keywords || []).join(',')}">
      <div class="work-placeholder${phClass}" data-label="${w.label}">
${!isStatic && w.id === 7 ? '<div class="boot-screen"><pre class="boot-text"></pre><span class="boot-cursor"></span></div>' : ''}
${!isStatic && currentFilter === 'illustration' && (w.id === 3 || w.id === 5 || w.id === 8) ? '<canvas class="grainient-canvas"></canvas>' : ''}
${currentFilter === 'illustration' && w.id === 3 ? '<div class="illust-card-img illust-card-bg"></div>' : ''}
${currentFilter === 'illustration' && w.id === 5 ? '<div class="illust-card-img illust-card-bg illust-card-2"></div>' : ''}
${currentFilter === 'illustration' && w.id === 8 ? '<div class="illust-card-img illust-card-bg illust-card-3"></div>' : ''}
${currentFilter === 'illustration' && w.id === 10 ? '<div class="illust-card-img illust-card-bg illust-card-4"></div>' : ''}
${currentFilter === 'illustration' && w.id === 11 ? '<div class="illust-card-img illust-card-bg illust-card-5"></div>' : ''}
${currentFilter === 'illustration' && w.id === 12 ? '<div class="illust-card-img illust-card-bg illust-card-6"></div>' : ''}
${currentFilter === 'illustration' && w.id === 13 ? '<div class="illust-card-img illust-card-bg illust-card-7"></div>' : ''}
${w.image ? (currentFilter === 'graphic' 
  ? `<div class="illust-card-img"><div class="illust-card-inner" style="background-image:url('${w.image}')"></div></div>`
  : `<div class="illust-card-img" style="background-image:url('${w.image}')"></div>`) : ''}
  ${currentFilter === 'graphic' ? mk : ''}
      </div>
      <div class="work-card-info">
<span class="work-card-num">${String(i+1).padStart(2,'0')}</span>
<div class="work-card-text">
  <h3 class="work-card-title">${w.title}</h3>
  <span class="work-card-tag">${w.tag} · ${w.year}</span>
</div>
      </div>
    </article>
    `}).join('');

  // 各 tab 风格说明文案（中文 + 英文）
  const styleNoteMap = {
    illustration: {
      cn: '<p class="illust-style-cn">擅长商业插画创作，涵盖<b>简约卡通插画</b>、<b>矢量钢笔画</b>以及<b>新国潮风格</b>创作，能够根据项目需求调整画面调性，适配包装、海报、文创等多场景应用</p><p class="illust-style-en">Skilled in commercial illustration: minimalist cartoon styles, vector line-art, and contemporary Chinese-guochao aesthetics — adapting mood and tone to fit packaging, posters, stationery and other contexts.</p>'
    },
    packaging: {
      cn: '<p class="illust-style-cn">深耕纸品包装，覆盖<b>精装盒</b>、<b>卡盒</b>、<b>纸箱</b>、<b>纸托</b>、<b>手提袋</b>、<b>纸碗</b>、<b>折页</b>、<b>书籍</b>等等；兼顾视觉设计、刀模线绘制、效果图渲染与产前工艺文件落地</p><p class="illust-style-en">Focused on paper packaging: rigid gift boxes, card boxes, corrugated boxes, paper trays, handle bags, paper bowls, brochures, books and more — from visual design and dieline drafting, to 3D rendering and prepress production files.</p>'
    },
    graphic: {
      cn: '<p class="illust-style-cn">承接多类平面视觉项目，包含<b>海报</b>、<b>电商成套视觉</b>、<b>彩平图纸</b>、<b>展板设计</b>、<b>产品精修</b>，兼顾画面质感与输出规范</p><p class="illust-style-en">Taking on a wide range of print & visual projects: posters, complete e-commerce visuals, architectural color plans, exhibition boards, product retouching — balancing image quality with production specifications.</p>'
    }
  };
  const noteHtml = styleNoteMap[currentFilter] || styleNoteMap.illustration;
  const styleNote = `<div class="illust-style-note reveal" data-delay="40">${noteHtml.cn}${noteHtml.en}<div class="illust-style-rules"><i></i></div></div>`;
  const noteWrap = document.getElementById('worksStyleNote');
  if (noteWrap) noteWrap.innerHTML = styleNote;

  // 平面 tab：无声书（id=9）右边加空线框 + ×
  if (currentFilter === 'graphic') {
    const emptyFrame = '<div class="empty-frame reveal" data-delay="80" style="grid-column: span 4"><span class="gmrk cm-tl"></span><span class="gmrk cm-tr"></span><span class="gmrk cm-bl"></span><span class="gmrk cm-br"></span><span class="gmrk tm"></span><span class="gmrk bm"></span><span class="gmrk lm"></span><span class="gmrk rm"></span></div>';
    const marker = 'data-work="9"';
    const idx = grid.innerHTML.indexOf(marker);
    if (idx !== -1) {
      const end = grid.innerHTML.indexOf('</article>', idx) + '</article>'.length;
      grid.innerHTML = grid.innerHTML.slice(0, end) + '\n    ' + emptyFrame + grid.innerHTML.slice(end);
    }
  }

  // 每次切换都清理 Grainient（canvas 被 innerHTML 替换了）
  if (_grainientCleanup) { _grainientCleanup(); _grainientCleanup = null; }

  // 按作品 id 绑定动画（不按位置，过滤换序也不会错位）
  if (!isStatic) {
    initFirstCardSignalLoss();
    initThirdCardBoot();
    initFourthCardFlow();
  }
  if (!isStatic && currentFilter === 'illustration') initCard5Grainient();
  initCardParallax();
  _lastFilter = currentFilter;

  // 平面 tab —— empty-frame 边框对齐 silent-book 的 work-placeholder 边框（不含标题文字）
  if (currentFilter === 'graphic') {
    requestAnimationFrame(() => {
      const silentPh = grid.querySelector('.work-card[data-work="9"] .work-placeholder');
      const empty = grid.querySelector('.empty-frame');
      if (silentPh && empty) {
empty.style.height = silentPh.offsetHeight + 'px';
      }
    });
  }
}

/* ---------- 卡片内部内容 hover 放大 + 鼠标方向偏移 ---------- */
let _parallaxCleanups = [];
function initCardParallax() {
  // 清理上一次的事件监听
  _parallaxCleanups.forEach(fn => fn());
  _parallaxCleanups = [];

  document.querySelectorAll('.work-placeholder').forEach(ph => {
    const onMove = (e) => {
      const rect = ph.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);   // -1 ~ 1
      const dy = (e.clientY - cy) / (rect.height / 2);   // -1 ~ 1
      const MAX = 14;  // 最大偏移 px
      ph.style.setProperty('--ph-tx', (dx * MAX).toFixed(2) + 'px');
      ph.style.setProperty('--ph-ty', (dy * MAX).toFixed(2) + 'px');
    };
    const onLeave = () => {
      ph.style.setProperty('--ph-tx', '0px');
      ph.style.setProperty('--ph-ty', '0px');
    };
    ph.addEventListener('mousemove', onMove);
    ph.addEventListener('mouseleave', onLeave);
    _parallaxCleanups.push(() => {
      ph.removeEventListener('mousemove', onMove);
      ph.removeEventListener('mouseleave', onLeave);
    });
  });
}

/* ---------- About 照片 hover 鼠标跟随偏移 ---------- */
function initAboutPhotoParallax() {
  const photo = document.querySelector('.about-photo');
  if (!photo) return;
  let pending = false;
  let last = { tx: 0, ty: 0 };

  const apply = () => {
    photo.style.setProperty('--ph-tx', last.tx.toFixed(1) + 'px');
    photo.style.setProperty('--ph-ty', last.ty.toFixed(1) + 'px');
    pending = false;
  };

  photo.addEventListener('mousemove', (e) => {
    const r = photo.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;  // -1..1
    const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
    last.tx = nx * (r.width * 0.08);  // ±8% 容器宽度
    last.ty = ny * (r.height * 0.08); // ±8% 容器高度
    if (!pending) { pending = true; requestAnimationFrame(apply); }
  });
  photo.addEventListener('mouseleave', () => {
    photo.style.transition = '--ph-tx .6s ease, --ph-ty .6s ease';
    last.tx = 0; last.ty = 0;
    apply();
    setTimeout(() => {
      photo.style.transition = '';
      photo.style.removeProperty('--ph-tx');
      photo.style.removeProperty('--ph-ty');
    }, 620);
  });
}

/* ---------- Footer Dither 像素波动态背景 ---------- */
let _footerDitherCleanup = null;
function initFooterDither() {
  const el = document.querySelector('.footer-dither');
  if (!el || !window.Dither) return;
  _footerDitherCleanup = window.Dither.init(el, {
    waveColor: '#e8e8ea',
    backgroundColor: '#242428',
    ditherMode: 'bayer',
    colorNum: 4,
    pixelSize: 2,
    waveSpeed: 0.05,
    waveFrequency: 3,
    waveAmplitude: 0.3,
    mouseEffect: 'erase',
    mouseRadius: 0.3,
    intro: false
  });
}

/* ---------- 第一个作品卡片 —— 老电视无信号效果 ----------
   默认（非悬停）显示雪花噪点 + 偶尔闪现的 VHS 彩条 + 水平撕裂 + 扫描线；
   鼠标悬停时画布淡出，露出正常卡片内容。
*/
let _signalLossCtx = null;
let _signalLossInterval = null;
let _signalLossRunning = true;
let _signalLossRO = null;

function initFirstCardSignalLoss() {
  // 清理上一次的画布和定时器（过滤重渲染时复用）
  if (_signalLossInterval) { clearInterval(_signalLossInterval); _signalLossInterval = null; }
  if (_signalLossRO) { _signalLossRO.disconnect(); _signalLossRO = null; }
  const oldCanvas = document.querySelector('.work-placeholder.has-signal-canvas .signal-canvas');
  if (oldCanvas) oldCanvas.remove();

  const placeholder = document.querySelector('.work-placeholder.has-signal-canvas');
  if (!placeholder) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'signal-canvas';
  placeholder.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  _signalLossCtx = ctx;

  let W = 0, H = 0;
  function resize() {
    const rect = placeholder.getBoundingClientRect();
    // 内部分辨率降一半，CSS 放大，提升性能
    W = canvas.width = Math.max(1, Math.floor(rect.width / 2));
    H = canvas.height = Math.max(1, Math.floor(rect.height / 2));
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
  }
  resize();
  _signalLossRO = new ResizeObserver(resize);
  _signalLossRO.observe(placeholder);

  // VHS 经典彩条色（无信号时偶尔闪现）
  const bars = [
    '235,235,235',  // 白
    '235,235,40',   // 黄
    '40,235,235',   // 青
    '40,235,40',    // 绿
    '235,40,235',   // 品红
    '235,40,40',    // 红
    '40,40,235',    // 蓝
    '30,30,30'      // 黑
  ];

  _signalLossRunning = true;

  function drawFrame() {
    if (!_signalLossRunning || !ctx) return;

    // 黑底
    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, W, H);

    // 1) 雪花噪点（主体，无信号的雪花屏）—— 逐像素灰度
    const imgData = ctx.createImageData(W, H);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.floor(Math.random() * 255);
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);

    // 2) 偶尔闪现的 VHS 彩条（横向条纹）
    if (Math.random() < 0.35) {
      const barH = Math.random() * H * 0.35 + H * 0.1;
      const barY = Math.random() * (H - barH);
      const barCount = 6 + Math.floor(Math.random() * 4);
      const barW = W / barCount;
      for (let i = 0; i < barCount; i++) {
const c = bars[Math.floor(Math.random() * bars.length)];
ctx.fillStyle = `rgba(${c},0.45)`;
ctx.fillRect(i * barW, barY, barW + 1, barH);
      }
    }

    // 3) 水平撕裂带（画面错位，sync loss）
    if (Math.random() < 0.45) {
      const tearY = Math.random() * H;
      const tearH = 2 + Math.random() * 10;
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fillRect(0, tearY, W, tearH);
      // 撕裂带偶尔带彩条
      if (Math.random() < 0.4) {
const c = bars[Math.floor(Math.random() * bars.length)];
ctx.fillStyle = `rgba(${c},0.5)`;
ctx.fillRect(0, tearY, W, tearH);
      }
    }

    // 4) 全屏色彩闪烁（信号冲击）
    if (Math.random() < 0.06) {
      const c = bars[Math.floor(Math.random() * bars.length)];
      ctx.fillStyle = `rgba(${c},0.08)`;
      ctx.fillRect(0, 0, W, H);
    }

    // 5) 扫描线
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    for (let y = 0; y < H; y += 3) {
      ctx.fillRect(0, y, W, 1);
    }
  }

  // ~12fps 跳变 —— 雪花闪烁感
  _signalLossInterval = setInterval(drawFrame, 80);

  // 悬停暂停，移开恢复
  placeholder.addEventListener('mouseenter', () => { _signalLossRunning = false; });
  placeholder.addEventListener('mouseleave', () => { _signalLossRunning = true; });

  // 视口外暂停 —— 避免 pin/解除 pin 时动画持续消耗性能导致回弹
  const io = new IntersectionObserver(([e]) => {
    _signalLossRunning = e.isIntersecting;
  }, { threshold: 0 });
  io.observe(placeholder);
}

/* ---------- 第三个作品卡片 —— 终端开机逐行打字动画 ----------
   黑底绿字 CRT 终端风格，逐行输出开机代码，完成后清空重来，循环播放。
*/
let _bootTimer = null;
let _bootLines = [
  'MUYUN OS v2.6.1  (c) 2026 MUYUN Studio',
  '',
  'Booting MUYUN Design Kernel...',
  '  [ OK ] Loading font module...',
  '  [ OK ] Initializing color palette...',
  '  [ OK ] Mounting /assets/fonts...',
  '  [ OK ] Starting noise generator...',
  '',
  'Memory check: 16384K OK',
  'Detecting display: CRT Phosphor Green',
  '',
  '> Initializing portfolio engine',
  '> Loading works database [9 items]',
  '> Rendering layout grid... done',
  '> Applying CRT scanline filter... done',
  '',
  'Welcome to MUYUN Portfolio System',
  'Type "help" for available commands.',
  '',
  'muyun@portfolio:~$ ',
];

function initThirdCardBoot() {
  if (_bootTimer) { clearTimeout(_bootTimer); _bootTimer = null; }

  const placeholder = document.querySelector('.work-placeholder.has-boot-screen');
  if (!placeholder) return;

  const textEl = placeholder.querySelector('.boot-text');
  if (!textEl) return;

  let lineIdx = 0;
  let charIdx = 0;
  let currentText = '';

  function typeChar() {
    if (lineIdx >= _bootLines.length) {
      // 打完一轮，暂停 1.5s 后清空重来
      _bootTimer = setTimeout(() => {
currentText = '';
textEl.textContent = '';
lineIdx = 0;
charIdx = 0;
typeChar();
      }, 1500);
      return;
    }

    const line = _bootLines[lineIdx];
    if (charIdx < line.length) {
      currentText += line[charIdx];
      textEl.textContent = currentText;
      charIdx++;
      // 随机打字速度，模拟真人输入
      const delay = 8 + Math.random() * 22;
      _bootTimer = setTimeout(typeChar, delay);
    } else {
      // 一行打完，换行
      currentText += '\n';
      textEl.textContent = currentText;
      lineIdx++;
      charIdx = 0;
      // 行间停顿
      const pause = line.trim() === '' ? 120 : (120 + Math.random() * 180);
      _bootTimer = setTimeout(typeChar, pause);
    }
  }

  typeChar();

  // 视口外暂停打字 —— 避免 pin/解除 pin 时 setTimeout 持续触发导致回弹
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) {
      if (_bootTimer) { clearTimeout(_bootTimer); _bootTimer = null; }
    } else if (!_bootTimer) {
      typeChar();
    }
  }, { threshold: 0 });
  io.observe(placeholder);
}

/* ---------- 第四个作品卡片 —— 点阵律动流动线条 ----------
   黑底，密集网格点，由多层正弦波构成对角方向的流场，
   点的大小/亮度/颜色随流场值变化，整体呈现不断律动的流动光带。
   颜色：白 → 奶油 → 米 → 淡蓝渐变。
*/
let _flowRAF = null;
function initFourthCardFlow() {
  if (_flowRAF) { cancelAnimationFrame(_flowRAF); _flowRAF = null; }
  const oldCanvas = document.querySelector('.work-placeholder.has-flow-dots .flow-canvas');
  if (oldCanvas) oldCanvas.remove();

  const placeholder = document.querySelector('.work-placeholder.has-flow-dots');
  if (!placeholder) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'flow-canvas';
  placeholder.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let W = 0, H = 0;
  // 内部分辨率降一半，CSS 放大，大幅减少绘制点数
  const SCALE = 0.5;
  const resize = () => {
    W = canvas.width = Math.floor(placeholder.clientWidth * SCALE);
    H = canvas.height = Math.floor(placeholder.clientHeight * SCALE);
  };
  resize();

  let time = 0;
  let running = true;

  const draw = () => {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);

    const spacing = 3;    // 点阵间距（内部坐标）
    const cols = Math.ceil(W / spacing) + 1;
    const rows = Math.ceil(H / spacing) + 1;

    for (let r = 0; r < rows; r++) {
      const ny = r / rows;
      for (let c = 0; c < cols; c++) {
const nx = c / cols;

// 多层正弦波叠加 → 对角方向流动的流场值
const wave =
    Math.sin(nx * 5.0 + ny * 3.5 - time * 0.7) * 0.45
  + Math.sin(nx * 2.8 - ny * 4.2 + time * 0.55) * 0.30
  + Math.sin((nx + ny) * 7.0 - time * 1.1) * 0.15
  + Math.sin((nx - ny) * 3.0 + time * 0.4) * 0.10;

const val = (wave + 1) * 0.5; // 0~1
if (val < 0.10) continue;     // 暗点直接跳过

const size = val * 3.0;       // 点尺寸放大，填满栏位

// 颜色渐变：高值白 → 奶油 → 米 → 淡蓝
let rC, gC, bC;
if (val > 0.72) {
  rC = 255; gC = 255; bC = 255;
} else if (val > 0.52) {
  rC = 250; gC = 240; bC = 218;
} else if (val > 0.34) {
  rC = 224; gC = 205; bC = 175;
} else {
  rC = 155; gC = 182; bC = 205;
}

ctx.fillStyle = `rgba(${rC},${gC},${bC},${0.2 + val * 0.8})`;
// fillRect 比 arc 快一个数量级
ctx.fillRect(c * spacing, r * spacing, size, size);
      }
    }

    time += 0.012;
    _flowRAF = requestAnimationFrame(draw);
  };

  draw();

  placeholder.addEventListener('mouseenter', () => { running = false; });
  placeholder.addEventListener('mouseleave', () => {
    if (!running) { running = true; draw(); }
  });

  // 视口外暂停 —— 避免 pin/解除 pin 时动画持续消耗性能导致回弹
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      if (!running) { running = true; draw(); }
    } else {
      running = false;
    }
  }, { threshold: 0 });
  io.observe(placeholder);
}

/* ---------- 作品过滤按钮 ---------- */
function initFilters() {
  const tabs = document.getElementById('filterTabs');
  if (!tabs) return;

  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-tab');
    if (!btn) return;

    const filter = btn.dataset.filter;
    if (filter === currentFilter) return;

    currentFilter = filter;

      tabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      // 猫交互开关：仅插画页可点可悬停
      const catEl = document.getElementById('xiaoheiCat');
      if (catEl) {
if (filter === 'illustration') {
  catEl.style.pointerEvents = 'auto';
} else {
  catEl.style.pointerEvents = 'none';
  catEl.removeAttribute('title');
}
      }

      renderWorks();
  initHalftoneDots(); initPixelDots();
     // 重新绑定 reveal observer —— innerHTML 替换了 DOM，旧 observer 已失效
     requestAnimationFrame(() => {
       initReveal();
       if (window.__restack) window.__restack();
     });
  });
}

/* ---------- 导航栏滚动效果 ---------- */
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const update = () => {
    if (document.body.classList.contains('has-modal')) return;
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ---------- 滚动出现动画（手动 scroll 驱动，避开 IntersectionObserver + fixed/pin 的坑） ---------- */
let _revealEls = [];
let _revealScrollBound = false;
function initReveal() {
  document.querySelectorAll('section').forEach(sec => {
    sec.querySelectorAll('.section-head, .about-body > *, .about-skills, .contact-main, .works-grid, .works-more')
      .forEach(el => el.classList.add('reveal'));
  });
  _revealEls = [];
  document.querySelectorAll('.reveal').forEach(el => {
    const isCard = el.classList.contains('work-card');
    const isCat  = el.classList.contains('xiaohei-cat');
    if (isCard || isCat) {
      el.classList.remove('in');
      if (isCard) {
const parent = el.closest('.works-grid');
if (parent) {
  const index = Array.from(parent.children).indexOf(el);
  el.dataset.delay = (index % 3) * 80;
}
      }
    }
    if (!isCard && !isCat && el.classList.contains('in')) return;
    _revealEls.push({ el, done: el.classList.contains('in') });
  });
  if (!_revealScrollBound) {
    _revealScrollBound = true;
    window.addEventListener('scroll', tickReveal, { passive: true });
    window.addEventListener('resize', tickReveal);
  }
  tickReveal();
}

function tickReveal() {
  const vh = window.innerHeight;
  for (const item of _revealEls) {
    if (item.done) continue;
    if (!item.el.isConnected) { item.done = true; continue; }
    const r = item.el.getBoundingClientRect();
    if (r.top < vh * 0.88 && r.bottom > 0) {
      item.done = true;
      const delay = parseInt(item.el.dataset.delay) || 0;
      setTimeout(() => item.el.classList.add('in'), delay);
    }
  }
}

/* ---------- 移动端菜单 ---------- */
function initMobileMenu() {
  const btn = document.getElementById('menuBtn');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ---------- 导航平滑滚动（自写 RAF，连点跳最新目标）---------- */
(function() {
  let rafId = null;
  let fromY = 0, toY = 0, startT = 0;
  let landTarget = null; // 落地后用于无缝隙精校的目标 section
  let landedY = 0;// 落地时的 scrollY，用于判断用户是否手动滚动过
  const DUR = 420;
  // 落点精校：把目标 section 顶边吸附到导航栏底边。
  // 导航栏 scrolled 切换有 0.4s 的 padding 过渡、堆叠 pin 的 spacer 也会随
  // 缓存刷新变化，动画刚结束时量的都是过渡中间态，所以精校必须延后到稳定后执行
  function correctLanding() {
    if (!landTarget) return;
    // 用户已经手动滚动过就不再接管，避免抢滚动
    if (Math.abs(window.scrollY - landedY) > 2) return;
    // 目标被钉住时 rect 是屏幕位置，不可用
    if (landTarget.style.position === 'fixed') return;
    const navB = document.querySelector('.nav').getBoundingClientRect().bottom;
    const secTop = landTarget.getBoundingClientRect().top;
    const delta = secTop - navB;
    if (Math.abs(delta) > 0.5) window.scrollTo(0, window.scrollY + delta);
  }
  function settle() {
    landedY = window.scrollY;
    // 只做一次 landing 校正：smooth scroll 刚结束时立即校正，避免多次 scrollTo 干扰用户后续滚动
    setTimeout(() => {
      if (Math.abs(window.scrollY - landedY) > 2) return; // 用户已手动滚过则放弃
      correctLanding();
    }, 80);
  }
  function step(now) {
    const t = Math.min(1, (now - startT) / DUR);
    const ease = 1 - Math.pow(1 - t, 3);
    window.scrollTo(0, fromY + (toY - fromY) * ease);
    if (t < 1) rafId = requestAnimationFrame(step);
    else { rafId = null; settle(); }
  }
  document.querySelectorAll('.nav-link[href^="#"], .nav-brand[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      // 取消旧动画，立即从当前位置开始新的
      if (rafId) cancelAnimationFrame(rafId);
      fromY = window.scrollY;
      landTarget = target;
      // 点击时重新测量堆叠缓存：图片/字体加载会改变 section 高度，旧缓存会让落点漂移
      // （restack 内部瞬时释放全部 pin 再复原，同步完成，无视觉闪烁）
      if (window.__restack) window.__restack();
      // 用缓存的真实文档流偏移（被钉住的 section 的 rect 是屏幕位置，不可用）
      let flowTop;
      if (typeof target._top === 'number' && isFinite(target._top) && target._top > 0) {
flowTop = target._top;
      } else {
flowTop = target.getBoundingClientRect().top + window.scrollY;
      }
      // 导航栏 scrolled / 非 scrolled 两种状态高度不同（padding 24↔16、边框变化），
      // 点击时量的高度 ≠ 目的地实际高度（约差 15px），必须按"落点的滚动状态"取导航高度
      const nav = document.querySelector('.nav');
      const wasScrolled = nav.classList.contains('scrolled');
      const willBeScrolled = (flowTop - nav.offsetHeight) > 60; // 与 initNavScroll 阈值一致
      let navH;
      if (willBeScrolled !== wasScrolled) {
// 临时切到目标状态量一次高度，量完立刻还原（关掉过渡避免闪烁）
const prevT = nav.style.transition;
nav.style.transition = 'none';
nav.classList.toggle('scrolled', willBeScrolled);
navH = nav.getBoundingClientRect().height;
nav.classList.toggle('scrolled', wasScrolled);
nav.style.transition = prevT;
      } else {
navH = nav.getBoundingClientRect().height;
      }
      // 落点：页面顶边与导航栏底边完全贴合，不留缝隙
      toY = Math.max(0, flowTop - navH);
      // [DEBUG-NAVFIX] 临时埋点：点击时刻的全部关键值
      (window.__navDebug = window.__navDebug || []).push({
t: 'click', href: id, flowTop: Math.round(flowTop * 100) / 100,
navH: Math.round(navH * 100) / 100, toY: Math.round(toY * 100) / 100,
wasScrolled, willBeScrolled, fromY: Math.round(fromY * 100) / 100,
navMatches: document.querySelectorAll('.nav').length
      });
      startT = performance.now();
      rafId = requestAnimationFrame(step);
    }, { passive: false });
  });
})();

/* ---------- 罗小黑眼睛跟随鼠标 ---------- */
/* ---------- 邮件弹窗 ---------- */
function initMailModal() {
  const btn = document.querySelector('.contact-send-btn');
  const modal = document.getElementById('mailModal');
  if (!btn || !modal) return;
  const closeBtn = modal.querySelector('.mail-modal-close');
  const copyBtn = document.getElementById('copyMailBtn');
  const copyTip = document.getElementById('copyTip');
  let savedScroll = 0;

  const open = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    savedScroll = window.scrollY || window.pageYOffset;
    lockBodyScroll();
    document.body.classList.add('has-modal');
  };
  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('has-modal');
    unlockBodyScroll(savedScroll);
    if (copyTip) copyTip.textContent = '';
  };

  btn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  // 点击遮罩关闭
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  // ESC 关闭
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });

  // 复制邮箱
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
await navigator.clipboard.writeText('2296688205@qq.com');
copyTip.textContent = '✓ 邮箱地址已复制到剪贴板';
      } catch {
// fallback：老式方法
const ta = document.createElement('textarea');
ta.value = '2296688205@qq.com';
ta.style.position = 'fixed';
ta.style.opacity = '0';
document.body.appendChild(ta);
ta.select();
document.execCommand('copy');
document.body.removeChild(ta);
copyTip.textContent = '✓ 邮箱地址已复制到剪贴板';
      }
    });
  }
}

/* ---------- 技能弹窗 ---------- */
function initSkillModal() {
  const modal = document.getElementById('skillModal');
  if (!modal) return;
  const closeBtn = modal.querySelector('.skill-modal-close');
  const titleEl = modal.querySelector('#skillModalTitle');
  const levelEl = modal.querySelector('#skillModalLevel');
  const descEl = modal.querySelector('#skillModalDesc');
  const iconEl = modal.querySelector('#skillModalIcon');
  let savedScroll = 0;

  const open = (tag) => {
    const name = tag.dataset.skill || '';
    const level = tag.dataset.level || '';
    const desc = tag.dataset.desc || '';
    const img = tag.querySelector('.tool-icon');

    titleEl.textContent = name;
    levelEl.textContent = level;
    descEl.textContent = desc;
    iconEl.style.backgroundImage = img ? `url(${img.src})` : 'none';

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    savedScroll = window.scrollY || window.pageYOffset;
    lockBodyScroll();
    document.body.classList.add('has-modal');
  };

  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('has-modal');
    unlockBodyScroll(savedScroll);
  };

  document.querySelectorAll('.tool-tag').forEach(tag => {
    tag.addEventListener('click', () => open(tag));
  });
  closeBtn && closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
}

/* ---------- 技能行手风琴 ---------- */
function initSkillAccordion() {
  const wraps = document.querySelectorAll('.skill-row-wrap');
  if (!wraps.length) return;

  wraps.forEach(wrap => {
    const row = wrap.querySelector('.skill-row');
    const detail = wrap.querySelector('.skill-detail');
    if (!row || !detail) return;

    const openWrap = () => {
      detail.style.maxHeight = (detail.scrollHeight + 160) + 'px';
      wrap.classList.add('open');
      row.classList.add('open');
      row.setAttribute('aria-expanded', 'true');
      // 展开后自动滚动，让 detail 完整可见（所有屏幕）
      setTimeout(() => {
const rect = wrap.getBoundingClientRect();
if (rect.bottom > window.innerHeight - 60) {
  window.scrollBy({ top: rect.bottom - window.innerHeight + 80, behavior: 'smooth' });
}
      }, 400);
    };
    const closeWrap = () => {
      detail.style.maxHeight = '0px';
      wrap.classList.remove('open');
      row.classList.remove('open');
      row.setAttribute('aria-expanded', 'false');
    };

    const toggle = () => {
      const isOpen = wrap.classList.contains('open');
      if (!isOpen) {
// 手风琴：关其他
wraps.forEach(w => { if (w !== wrap) { const d = w.querySelector('.skill-detail'); const r = w.querySelector('.skill-row'); if (d && r) { d.style.maxHeight = '0px'; w.classList.remove('open'); r.classList.remove('open'); r.setAttribute('aria-expanded', 'false'); } } });
openWrap();
      } else {
closeWrap();
      }
    };

    row.addEventListener('click', toggle);
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });

    // 右侧跳转按钮
    const jumpBtn = wrap.querySelector('.skill-jump-btn');
    if (jumpBtn) {
      jumpBtn.addEventListener('click', (e) => {
e.stopPropagation();
const targetFilter = jumpBtn.dataset.jump;
// 触发对应 filter-tab 的点击
const tab = document.querySelector(`.filter-tab[data-filter="${targetFilter}"]`);
if (tab) tab.click();
// 滚动到 works 区
const worksSec = document.querySelector('section.works');
if (worksSec) {
  const y = worksSec.getBoundingClientRect().top + window.scrollY - 40;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
      });
    }
  });
}

/* ---------- 作品弹窗 ---------- */
function initWorkModal() {
  const modal = document.getElementById('workModal');
  if (!modal) return;
  const media = document.getElementById('workModalMedia');
  const titleEl = document.getElementById('workModalTitle');
  const numEl = document.getElementById('workModalNum');
  const tagEl = document.getElementById('workModalTag');
  const kwEl = document.getElementById('workModalKeywords');
  const detailEl = document.getElementById('workModalDetail');
  const closeBtn = modal.querySelector('.work-modal-close');
  let savedScroll = 0;

  // 图片缩放/拖动状态
  let zoom = 1;
  let panX = 0, panY = 0;
  let isDragging = false;
  let dragStartX = 0, dragStartY = 0;
  let panStartX = 0, panStartY = 0;

  const resetTransform = () => {
    zoom = 1; panX = 0; panY = 0;
    media.style.backgroundSize = 'contain';
    media.style.backgroundPosition = 'center center';
    media.style.cursor = 'default';
    void media.offsetWidth; // 强制 reflow，确保样式立即落地
  };
  const applyTransform = () => {
    media.style.backgroundSize = `${zoom * 100}%`;
    media.style.backgroundPosition = `calc(50% + ${panX}px) calc(50% + ${panY}px)`;
  };

  // 滚轮缩放
  media.addEventListener('wheel', (e) => {
    if (!media.style.backgroundImage) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.12 : 0.15;
    const newZoom = Math.max(1, Math.min(6, zoom + delta));
    if (newZoom === zoom) return;

    // 以鼠标位置为缩放中心
    const rect = media.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    // 原来的 "mouse 相对中心" 的偏移，按缩放比例折算
    const ratio = newZoom / zoom;
    panX = mx - cx - (mx - cx - panX) * ratio;
    panY = my - cy - (my - cy - panY) * ratio;
    zoom = newZoom;
    applyTransform();
  }, { passive: false });

  // 拖动
  media.addEventListener('mousedown', (e) => {
    if (!media.style.backgroundImage) return;
    if (zoom <= 1) { resetTransform(); return; }
    e.preventDefault();
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    panStartX = panX;
    panStartY = panY;
    media.style.cursor = 'grabbing';
  });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    panX = panStartX + (e.clientX - dragStartX);
    panY = panStartY + (e.clientY - dragStartY);
    applyTransform();
  });
  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    media.style.cursor = zoom > 1 ? 'grab' : 'default';
  });

  const navPrev = modal.querySelector('.work-modal-prev');
  const navNext = modal.querySelector('.work-modal-next');
  const idxEl = modal.querySelector('.work-modal-idx');
  const totalEl = modal.querySelector('.work-modal-total');
  let modalImages = [];
  let modalIdx = 0;

  const showImage = (src) => {
    if (src) {
      media.style.backgroundImage = `url(${src})`;
      media.dataset.label = '';
      media.style.cursor = 'default';
    } else {
      media.style.backgroundImage = 'none';
    }
    resetTransform();
  };

  const updateNav = () => {
    const hasMany = modalImages.length > 1;
    navPrev.style.display = hasMany ? '' : 'none';
    navNext.style.display = hasMany ? '' : 'none';
    idxEl.textContent = String(modalIdx + 1);
    totalEl.textContent = String(modalImages.length || 1);
  };

  navPrev.addEventListener('click', () => {
    if (modalImages.length < 2) return;
    modalIdx = (modalIdx - 1 + modalImages.length) % modalImages.length;
    showImage(modalImages[modalIdx]);
    updateNav();
  });
  navNext.addEventListener('click', () => {
    if (modalImages.length < 2) return;
    modalIdx = (modalIdx + 1) % modalImages.length;
    showImage(modalImages[modalIdx]);
    updateNav();
  });

  const open = (card) => {
    const title = card.dataset.title || '';
    const num = card.dataset.num || '';
    const tag = card.dataset.tag || '';
    const year = card.dataset.year || '';
    const detail = card.dataset.detail || '';
    const kws = (card.dataset.keywords || '').split(',').filter(Boolean);

    // 查 WORKS 拿 images 数组
    const workId = card.dataset.work;
    const work = WORKS.find(w => String(w.id) === String(workId));
    modalImages = (work && Array.isArray(work.images) && work.images.length)
      ? work.images
      : ((card.dataset.image || '') ? [card.dataset.image] : []);
    modalIdx = 0;

    titleEl.textContent = title;
    numEl.textContent = num;
    tagEl.textContent = `${tag} · ${year}`;
    detailEl.textContent = detail;

    if (modalImages.length) {
      showImage(modalImages[0]);
      updateNav();
    } else {
      media.style.backgroundImage = 'none';
      media.dataset.label = card.querySelector('.work-placeholder')?.dataset.label || '';
      media.style.cursor = 'default';
      resetTransform();
    }
    updateNav();

    kwEl.innerHTML = kws.map(k => `<span class="work-modal-key">${k.trim()}</span>`).join('');

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    savedScroll = window.scrollY || window.pageYOffset;
    lockBodyScroll();
    document.body.classList.add('has-modal');
  };

  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('has-modal');
    unlockBodyScroll(savedScroll);
    resetTransform();
    modalIdx = 0;
  };

  const bindCards = () => {
    document.querySelectorAll('.work-card').forEach(card => {
      card.addEventListener('click', () => open(card));
      card.addEventListener('keydown', (e) => {
if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(card); }
      });
    });
  };

  bindCards();
  const origRender = renderWorks;
  renderWorks = function() { origRender(); bindCards(); };

  closeBtn && closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
}

function initXiaohei() {
  const cats = document.querySelectorAll('.xiaohei-cat');
  if (!cats.length) return;

  const mouse = { x: -9999, y: -9999 };
  let raf = null;
  let lastMove = 0;

  // 为每只猫准备它的瞳孔 base 和 tick
  // base 用眼眶（cat-eye）的圆心，这样 ox=0/oy=0 时眼珠居中看前方
  const states = [];
  cats.forEach((cat) => {
    const pl = cat.querySelector('.cat-pupil-l .cat-pupil-ball');
    const pr = cat.querySelector('.cat-pupil-r .cat-pupil-ball');
    const eyeL = cat.querySelector('.cat-eye-l');
    const eyeR = cat.querySelector('.cat-eye-r');
    if (!pl || !eyeL) return;
    states.push({
      cat,
      pl, pr,
      L: { x: +eyeL.getAttribute('cx'), y: +eyeL.getAttribute('cy') },
      R: { x: +eyeR.getAttribute('cx'), y: +eyeR.getAttribute('cy') },
    });
  });

  function tick() {
    raf = null;
    states.forEach(({ cat, pl, pr, L, R }) => {
      const rect = cat.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      let dx = (mouse.x - cx) / (rect.width / 2);
      let dy = (mouse.y - cy) / (rect.height / 2);
      const dist = Math.hypot(dx, dy);
      if (dist > 1) { dx /= dist; dy /= dist; }
      // 眼珠轨道：左右内切于眼眶（不出眼眶），向下可露出眼眶（往下看），向上小范围
      // 眼眶 r=24，眼珠 rx=4 ry=10
      // 左右轨道 rx=20（眼珠右边相切眼眶右边，不出眼眶）
      // 向下 ry=26（眼珠中心下移 26，露出 12px，约一半眼珠）
      // 向上 ry=9（眼珠不出眼眶）
      const angle = Math.atan2(dy, dx);
      const trackRx = 20;
      const trackRy = dy >= 0 ? 14 : 9;
      // 死区：鼠标在猫脸上时眼珠看向前方（居中），离开脸后逐渐跟随
      // 用像素距离判断（归一化 dist 受 rect 尺寸影响不准确）
      const px = mouse.x - cx;
      const py = mouse.y - cy;
      const pxDist = Math.hypot(px, py);
      const deadPx = rect.height * 0.25; // 脸区半径约 25% 猫高度
      let scale = pxDist < deadPx ? 0 : Math.min(1, (pxDist - deadPx) / (rect.height * 0.2));
      const ox = Math.cos(angle) * trackRx * scale;
      const oy = Math.sin(angle) * trackRy * scale;
      pl.setAttribute('cx', L.x + ox);
      pl.setAttribute('cy', L.y + oy);
      pr.setAttribute('cx', R.x + ox);
      pr.setAttribute('cy', R.y + oy);
    });
    if (performance.now() - lastMove < 300) raf = requestAnimationFrame(tick);
  }

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX; mouse.y = e.clientY;
    lastMove = performance.now();
    if (!raf) raf = requestAnimationFrame(tick);
  });

  // 每只猫绑定点击
  cats.forEach((cat) => {
    cat.style.pointerEvents = 'auto';
    cat.style.cursor = 'pointer';
    const earL = cat.querySelector('.cat-ear-l');
    const earR = cat.querySelector('.cat-ear-r');
    const mouths = cat.querySelectorAll('.cat-mouth');
    const originalL = mouths[0] ? mouths[0].getAttribute('d') : '';
    const originalR = mouths[1] ? mouths[1].getAttribute('d') : '';
    let cd = false;
    cat.addEventListener('click', () => {
      if (cd) return; cd = true; setTimeout(() => cd = false, 900);
      if (earL && earR) {
earL.style.animation = earR.style.animation = 'none';
earL.style.transformOrigin = '115px 76px';
earR.style.transformOrigin = '185px 76px';
earL.style.transition = earR.style.transition = 'transform .22s cubic-bezier(.34,1.56,.64,1)';
earL.style.transform = 'rotate(-12deg) scaleY(1.12)';
earR.style.transform = 'rotate(12deg) scaleY(1.12)';
setTimeout(() => { earL.style.transform = 'rotate(5deg) scaleY(1.03)'; earR.style.transform = 'rotate(-5deg) scaleY(1.03)'; }, 100);
setTimeout(() => { earL.style.transform = 'rotate(-1deg) scaleY(1)'; earR.style.transform = 'rotate(1deg) scaleY(1)'; }, 220);
setTimeout(() => {
  earL.style.transform = earR.style.transform = '';
  earL.style.transition = earR.style.transition = '';
  earL.style.animation = earR.style.animation = '';
  earL.style.transformOrigin = earR.style.transformOrigin = '';
}, 400);
      }
      if (mouths[0] && mouths[1]) {
mouths[0].setAttribute('d', 'M146 134 Q150 142 154 134');
mouths[1].setAttribute('d', '');
mouths[0].setAttribute('fill', '#ff6680');
setTimeout(() => {
  mouths[0].setAttribute('d', originalL);
  mouths[1].setAttribute('d', originalR);
  mouths[0].removeAttribute('fill');
}, 500);
      }
    });
  });
}

/* ---------- 初始化 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // 强制回到顶部（避免刷新后停留在上次滚动位置）
  window.scrollTo(0, 0);
  history.scrollRestoration = 'manual';

  // 强制覆盖 hero title 字号（绕开 CSS 媒体查询/优先级问题）
  (function fixHeroTitle(){
    var isMobile = window.innerWidth <= 768;
    var mainSize = isMobile ? 'clamp(56px, 16vw, 88px)' : '';
    var subSize  = isMobile ? 'clamp(14px, 4vw, 24px)'   : '';
    document.querySelectorAll('.hero-title .title-line').forEach(function(el){
      if (el.classList.contains('title-line-sub')) {
if (subSize) el.style.setProperty('font-size', subSize, 'important');
else el.style.removeProperty('font-size');
      } else {
if (mainSize) el.style.setProperty('font-size', mainSize, 'important');
else el.style.removeProperty('font-size');
      }
    });
    if (isMobile) {
      var lamp = document.querySelector('.desk-lamp');
      if (lamp) lamp.style.setProperty('display', 'none', 'important');
    }
  })();
  window.addEventListener('resize', function(){
    var isMobile = window.innerWidth <= 768;
    var mainSize = isMobile ? 'clamp(56px, 16vw, 88px)' : '';
    var subSize  = isMobile ? 'clamp(14px, 4vw, 24px)'   : '';
    document.querySelectorAll('.hero-title .title-line').forEach(function(el){
      if (el.classList.contains('title-line-sub')) {
if (subSize) el.style.setProperty('font-size', subSize, 'important');
else el.style.removeProperty('font-size');
      } else {
if (mainSize) el.style.setProperty('font-size', mainSize, 'important');
else el.style.removeProperty('font-size');
      }
    });
    var lamp = document.querySelector('.desk-lamp');
    if (lamp) {
      if (isMobile) lamp.style.setProperty('display', 'none', 'important');
      else lamp.style.removeProperty('display');
    }
  });

  initLoader();
  initLoaderGlitch();
  renderWorks();
  initHalftoneDots(); initPixelDots();
  initFilters();
  initNavScroll();
  initReveal();
  initMobileMenu();
  initCanvasNoise();
  initAboutDivider();
  initCardStack();
  initMailModal();
  initSkillModal();
  initSkillAccordion();
  initWorkModal();
  initAboutPhotoParallax();

  // 图片和字体加载完成后 section 高度会变化（初始 measure 时它们还没就绪，
  // 缓存偏移会比真实布局小 ~16px，导致堆叠 pin 的 spacer 撑错高度、页面漂移），
  // 资源就绪后必须重新测量，保证缓存与真实布局一致
  window.addEventListener('load', () => { if (window.__restack) window.__restack(); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { if (window.__restack) window.__restack(); });
  }
});

/* ---------- About 顶部黑色切割线 ---------- */
function initAboutDivider() {
  const about = document.querySelector('section.about');
  if (!about) return;
  const divider = document.createElement('div');
  divider.style.cssText = 'position:absolute;top:0;left:0;right:0;height:2px;background:#000;z-index:10;';
  about.style.position = 'relative';
  about.appendChild(divider);
}

/* ---------- 卡片堆叠滚动效果（pin + cover）----------
   思路：所有 section 默认 relative 在文档流中正常滚动，
   当某张 section 底部到达视口底部（用户已看完该 section 内容）时切换成 fixed
   并用一张占位 div 撑开文档流；下一张卡片从下方滑上来盖住它；
   下一张顶边到达 top:0 时该 section 释放 fixed 回到文档流，由下一张接管。
*/
function initCardStack() {
  // 只在 works / about / contact 三个内容页之间堆叠
  // 页眉 hero 和页脚 footer 保持平铺，不参与堆叠
  const sections = document.querySelectorAll('section.works, section.about, section.contact');
  if (!sections.length) return;

  const sectionsArr = Array.from(sections);
  const cards = sectionsArr;

  // 先清掉可能的残留 spacer（浏览器刷新/热更新时会留下旧 spacer）
  document.querySelectorAll('.stack-spacer').forEach(s => s.remove());

  // 为每个会被 pin 的 section 在它前面插一个占位 div
  sectionsArr.forEach((sec) => {
    const spacer = document.createElement('div');
    spacer.className = 'stack-spacer';
    sec.parentNode.insertBefore(spacer, sec);
    sec._spacer = spacer;
  });

  // 测量：所有样式重置 + spacer 收起后记录每张卡片在文档流中的位置和高度
  const measure = () => {
    sectionsArr.forEach((sec) => {
      sec.style.position = '';
      sec.style.top = '';
      sec.style.left = '';
      sec.style.width = '';
      sec.style.transform = '';
      sec.style.filter = '';
      sec.style.transition = '';
      if (sec._spacer) sec._spacer.style.height = '0';
    });
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      card._top = rect.top + window.scrollY;
      card._height = rect.height;
      // 预计算：当 pin 时 sec 的 fixed top 值（确定性，不依赖运行时测量）
      const pinStart = Math.max(card._top, card._top + card._height - window.innerHeight);
      card._pinTop = card._top - pinStart; // 这是个常数！
    });
  };

  // 缓存 About 背景值，避免每帧重绘（backdropFilter 非常贵）
  let _aboutBgKey = '';

  const update = () => {
    const vh = window.innerHeight;
    const scrollY = window.scrollY;

    // 倒序遍历：先 pin 后面的 section 再释放前面的，防止 spacer 高度差导致的文档流跳动
    // （如果 aboutHeight != worksHeight，先 pin About 固定它，再释放 Works）
    for (let i = sectionsArr.length - 1; i >= 0; i--) {
      const sec = sectionsArr[i];
      const next = cards[i + 1];
      if (!next) continue;

      const secTop = sec._top;
      const secHeight = sec._height;
      const secBottom = secTop + secHeight;
      const nextTop = next._top;

      const pinStart = Math.max(secTop, secBottom - vh);
      const pinEnd = nextTop;

      let spacerH = 0;

      if (scrollY < pinStart) {
sec.style.position = '';
sec.style.top = '';
sec.style.left = '';
sec.style.width = '';
sec.style.transform = '';
sec.style.filter = '';
sec.style.transition = '';
spacerH = 0;
      } else if (scrollY < pinEnd) {
const nextTopInView = nextTop - scrollY;
const progress = Math.max(0, Math.min(1, (vh - nextTopInView) / vh));
const brightness = 1 - progress * 0.25;
// pin 切换不再碰 reveal —— 让 observer 动画自然完成
sec.style.transition = 'none';
sec.style.position = 'fixed';
sec.style.top = sec._pinTop + 'px';
sec.style.left = '0';
sec.style.width = '100%';
sec.style.transform = '';
sec.style.filter = `brightness(${brightness})`;
spacerH = secHeight;
      } else {
sec.style.position = '';
sec.style.top = '';
sec.style.left = '';
sec.style.width = '';
sec.style.transform = '';
sec.style.filter = '';
sec.style.transition = '';
spacerH = 0;
      }

      if (sec._spacer) sec._spacer.style.height = spacerH + 'px';
    }

    // About 背景渐变：半透模糊 → 实色，随 Works 被盖住的进度平滑过渡
    const works = document.querySelector('section.works');
    const about = document.querySelector('section.about');
    if (works && about && works._top !== undefined && about._top !== undefined) {
      const wTop = works._top;
      const wBottom = wTop + works._height;
      const wPinStart = Math.max(wTop, wBottom - vh);
      const wPinEnd = about._top;

      let progress;
      if (scrollY <= wPinStart) {
progress = 0;
      } else if (scrollY >= wPinEnd) {
progress = 1;
      } else {
progress = (scrollY - wPinStart) / (wPinEnd - wPinStart);
      }

      const blurPx = Math.round(48 * (1 - progress) * 10) / 10;
      const bgAlpha = Math.round((0.55 + 0.45 * progress) * 1000) / 1000;
      const key = blurPx + '|' + bgAlpha;
      if (key !== _aboutBgKey) {
_aboutBgKey = key;
about.style.background = `rgba(236, 233, 227, ${bgAlpha})`;
about.style.backdropFilter = `blur(${blurPx}px)`;
about.style.webkitBackdropFilter = `blur(${blurPx}px)`;
      }
    }
  };

  measure();
  update();

  // 暴露给外部（如过滤切换后）重新测量
  window.__restack = () => { measure(); update(); };

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
update();
ticking = false;
      });
      ticking = true;
    }
  };
  let resizeTimer;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      measure();
      update();
    }, 200);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
}

/* ---------- 加载动画 —— 百分比计数 + 拉窗入场 ---------- */
function initLoader() {
  const loader = document.getElementById('loader');
  const countEl = document.getElementById('loaderCount');
  if (!loader || !countEl) return;

  // 加载期间锁定滚动，保证结束时一定在首屏顶部
  document.body.classList.add('loader-active');

  // 兜底：15秒后无论如何强制解除锁定（防止 file:// 下 fonts.ready 永不 resolve）
  setTimeout(() => {
    document.body.classList.remove('loader-active');
    document.documentElement.classList.add('fonts-ready');
    loader.classList.add('done');
    const fouc = document.querySelector('head style');
    if (fouc) fouc.textContent = '';
  }, 15000);

  // 等字体加载完，给 <html> 加 fonts-ready 让 loader 文字可见（内联样式里 visibility:hidden 靠这个解锁）
  const unlockFonts = () => { document.documentElement.classList.add('fonts-ready'); };
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(unlockFonts);
  } else {
    window.addEventListener('load', unlockFonts);
  }

  let progress = 1;
  const tick = () => {
    progress += Math.random() * 8 + 2;
    if (progress >= 100) progress = 100;
    countEl.textContent = Math.floor(progress) + '%';
    if (progress < 100) {
      setTimeout(tick, 40 + Math.random() * 60);
    } else {
      // 到 100% 后稍等一瞬，然后拉窗向上
      setTimeout(() => {
loader.classList.add('done');
// 强制回到顶部并解除锁定，保证用户第一眼看到首屏
window.scrollTo(0, 0);
document.body.classList.remove('loader-active');
// loader 结束后再初始化页脚抖动，避免 canvas 尺寸为 0 的白屏
initFooterDither();
// 清除 <head> 里的内联 FOUC 锁定样式（它用了 !important，class 覆盖不了）
const fouc = document.querySelector('head style');
if (fouc) fouc.textContent = '';
// 同时触发 Hero 入场动画
document.body.classList.add('hero-in');
      }, 200);
    }
  };
  setTimeout(tick, 100);
}

/* ---------- 加载页老电视失真前景（跳变彩块 + 撕裂带 + 雪花点）---------- */
function initLoaderGlitch() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  // 创建 canvas，插入到 loader 最前（z-index 由 CSS 控制在前景层）
  const canvas = document.createElement('canvas');
  canvas.className = 'loader-glitch';
  loader.insertBefore(canvas, loader.firstChild);
  const ctx = canvas.getContext('2d');

  let W = 0, H = 0;
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // VHS 调色板：进一步去饱和，"藏色"更模糊，只剩色相暗示
  const palette = [
    '180,140,142',  // 暗红 → 灰红
    '142,160,177',  // 暗蓝 → 灰蓝
    '180,175,142',  // 暗黄 → 灰黄
    '177,142,177',  // 暗品红 → 灰品
    '150,175,162',  // 暗绿 → 灰绿
    '180,165,142',  // 暗橙 → 灰橙
    '195,195,200'   // 浅灰白
  ];

  let stopped = false;

  function drawFrame() {
    if (stopped) return;
    ctx.clearRect(0, 0, W, H);

    // 1) 偶尔绘制水平撕裂带（sync loss 画面错位）
    if (Math.random() < 0.35) {
      const bandY = Math.random() * H;
      const bandH = 3 + Math.random() * 22;
      ctx.fillStyle = `rgba(${30 + Math.random() * 90},${30 + Math.random() * 90},${30 + Math.random() * 90},0.45)`;
      ctx.fillRect(0, bandY, W, bandH);
      // 撕裂带偶尔叠彩条
      if (Math.random() < 0.5) {
const c = palette[Math.floor(Math.random() * palette.length)];
ctx.fillStyle = `rgba(${c},0.55)`;
ctx.fillRect(0, bandY, W, bandH);
      }
    }

    // 2) 随机跳动的彩块（密集排布，40~80 个，有大有小混合）
    const blockCount = 40 + Math.floor(Math.random() * 40);
    for (let i = 0; i < blockCount; i++) {
      // 用分层概率制造大小差异：60% 极小、25% 中等、10% 较大、5% 大块
      const r = Math.random();
      let bw, bh;
      if (r < 0.60) {    // 极小颗粒
bw = 1 + Math.random() * 4;
bh = 1 + Math.random() * 4;
      } else if (r < 0.85) {     // 中等
bw = 5 + Math.random() * 10;
bh = 5 + Math.random() * 10;
      } else if (r < 0.95) {     // 较大
bw = 12 + Math.random() * 14;
bh = 10 + Math.random() * 12;
      } else {   // 大块（信号丢失，最大控制在 30px 内）
bw = 20 + Math.random() * 15;
bh = 16 + Math.random() * 14;
      }
      const bx = Math.random() * (W - bw);
      const by = Math.random() * (H - bh);
      const c = palette[Math.floor(Math.random() * palette.length)];
      ctx.fillStyle = `rgba(${c},${0.35 + Math.random() * 0.5})`;
      ctx.fillRect(bx, by, bw, bh);
    }

    // 3) 偶尔全屏色彩闪烁（强信号冲击）
    if (Math.random() < 0.05) {
      const c = palette[Math.floor(Math.random() * palette.length)];
      ctx.fillStyle = `rgba(${c},${0.06 + Math.random() * 0.12})`;
      ctx.fillRect(0, 0, W, H);
    }

    // 4) 细密雪花点（模拟信号杂讯）
    const snowDots = 60 + Math.floor(Math.random() * 80);
    for (let i = 0; i < snowDots; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const a = 0.2 + Math.random() * 0.5;
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }

  // ~5fps 跳变 —— 给人信号不稳的毛刺感（放慢避免太密集）
  const interval = setInterval(drawFrame, 200);

  // 监听 .done 类，加载结束停止刷新
  const stop = () => {
    stopped = true;
    clearInterval(interval);
    window.removeEventListener('resize', resize);
  };
  const obs = new MutationObserver(() => {
    if (loader.classList.contains('done')) stop();
  });
  obs.observe(loader, { attributes: true, attributeFilter: ['class'] });
}

/* ---------- Canvas 细颗粒噪点（逐像素生成，1px 级最细）---------- */
function initCanvasNoise() {
  const overlay = document.querySelector('.noise-overlay');
  if (!overlay) return;

  // 小尺寸画布 → 拉伸到全屏 = 单个颗粒极小
  const SIZE = 256;
  const canvas = document.createElement('canvas');
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext('2d');

  let frame = 0;

  function genNoise() {
    const imgData = ctx.createImageData(SIZE, SIZE);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      // 纯随机灰度 → 每像素独立颗粒
      const v = Math.random() * 255;
      data[i] = data[i + 1] = data[i + 2] = v;
      data[i + 3] = 255; // 不透明，靠 CSS opacity 控制总强度
    }
    ctx.putImageData(imgData, 0, 0);
    // 转成 data URL 设给 overlay
    overlay.style.backgroundImage = `url(${canvas.toDataURL()})`;
    frame++;
  }

  // 每 120ms 生成一帧 → 快速跳变的细碎颗粒
  genNoise();
  setInterval(genNoise, 120);
}

/* ====================================================
   插画 filter —— 多卡 WebGL Grainient（React Bits 移植）
   纯 vanilla JS + WebGL2，无依赖
   ==================================================== */
let _grainientCleanup = null;

function hexToRgb(h) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
  return m ? [parseInt(m[1],16)/255, parseInt(m[2],16)/255, parseInt(m[3],16)/255] : [1,1,1];
}

function setupGrainient(canvas, palette) {
  if (!canvas) { console.warn('[Grainient] canvas not found for', palette.name); return null; }
  const gl = canvas.getContext('webgl2', { premultipliedAlpha: false });
  if (!gl) {
    console.warn('[Grainient] WebGL2 not supported, using CSS fallback');
    canvas.style.background = palette.fallback || 'linear-gradient(120deg,#ff6b9d,#ff9a6b,#2a3a8f)';
    canvas.style.animation = 'grainient-fallback-flow 12s ease-in-out infinite';
    return null;
  }
  console.log('[Grainient] WebGL2 OK, palette:', palette.name || 'unknown');

  const vs = `#version 300 es
  in vec2 p;
  void main(){ gl_Position = vec4(p,0.,1.); }`;

  const fs = `#version 300 es
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;
  uniform float uTimeSpeed, uColorBalance, uWarpStrength, uWarpFrequency;
  uniform float uWarpSpeed, uWarpAmplitude, uBlendAngle, uBlendSoftness;
  uniform float uRotationAmount, uNoiseScale, uGrainAmount, uGrainScale;
  uniform float uGrainAnimated, uContrast, uGamma, uSaturation;
  uniform vec2 uCenterOffset;
  uniform float uZoom;
  uniform vec3 uColor1, uColor2, uColor3;
  out vec4 fragColor;
  #define S(a,b,t) smoothstep(a,b,t)
  mat2 Rot(float a){ float s=sin(a),c=cos(a); return mat2(c,-s,s,c); }
  vec2 hash(vec2 p){ p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37))); return fract(sin(p)*43758.5453); }
  float noise(vec2 p){ vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);
    float n=mix(mix(dot(-1.+2.*hash(i+vec2(0,0)),f-vec2(0,0)),dot(-1.+2.*hash(i+vec2(1,0)),f-vec2(1,0)),u.x),
mix(dot(-1.+2.*hash(i+vec2(0,1)),f-vec2(0,1)),dot(-1.+2.*hash(i+vec2(1,1)),f-vec2(1,1)),u.x),u.y);
    return .5+.5*n; }
  void main(){
    float t=iTime*uTimeSpeed;
    vec2 uv=gl_FragCoord.xy/iResolution.xy;
    float ratio=iResolution.x/iResolution.y;
    vec2 tuv=uv-.5+uCenterOffset;
    tuv/=max(uZoom,.001);
    float degree=noise(vec2(t*.1,tuv.x*tuv.y)*uNoiseScale);
    tuv.y*=1./ratio;
    tuv*=Rot(radians((degree-.5)*uRotationAmount+180.));
    tuv.y*=ratio;
    float freq=uWarpFrequency;
    float ws=max(uWarpStrength,.001);
    float amp=uWarpAmplitude/ws;
    float wt=t*uWarpSpeed;
    tuv.x+=sin(tuv.y*freq+wt)/amp;
    tuv.y+=sin(tuv.x*(freq*1.5)+wt)/(amp*.5);
    vec3 colLav=uColor1, colOrg=uColor2, colDark=uColor3;
    float b=uColorBalance, s=max(uBlendSoftness,.0);
    mat2 br=Rot(radians(uBlendAngle));
    float bx=(tuv*br).x;
    float e0=-.3-b-s, e1=.2-b+s, v0=.5-b+s, v1=-.3-b-s;
    vec3 l1=mix(colDark,colOrg,S(e0,e1,bx));
    vec3 l2=mix(colOrg,colLav,S(e0,e1,bx));
    vec3 col=mix(l1,l2,S(v0,v1,tuv.y));
    vec2 guv=uv*max(uGrainScale,.001);
    if(uGrainAnimated>.5) guv+=vec2(iTime*.05);
    float grain=fract(sin(dot(guv,vec2(12.9898,78.233)))*43758.5453);
    col+=(grain-.5)*uGrainAmount;
    col=(col-.5)*uContrast+.5;
    float lum=dot(col,vec3(.2126,.7152,.0722));
    col=mix(vec3(lum),col,uSaturation);
    col=pow(max(col,0.),vec3(1./max(uGamma,.001)));
    col=clamp(col,0.,1.);
    fragColor=vec4(col,1.);
  }`;

  function compile(type, src){
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) { console.warn('Grainient shader error:', gl.getShaderInfoLog(sh)); return null; }
    return sh;
  }
  const p = gl.createProgram();
  gl.attachShader(p, compile(gl.VERTEX_SHADER, vs));
  gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(p);
  gl.useProgram(p);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-3,-1, 3,-1, 0,2]), gl.STATIC_DRAW);
  const locP = gl.getAttribLocation(p, 'p');
  gl.enableVertexAttribArray(locP);
  gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

  const u = {
    iTime: gl.getUniformLocation(p,'iTime'),
    iResolution: gl.getUniformLocation(p,'iResolution'),
    uTimeSpeed: gl.getUniformLocation(p,'uTimeSpeed'),
    uColorBalance: gl.getUniformLocation(p,'uColorBalance'),
    uWarpStrength: gl.getUniformLocation(p,'uWarpStrength'),
    uWarpFrequency: gl.getUniformLocation(p,'uWarpFrequency'),
    uWarpSpeed: gl.getUniformLocation(p,'uWarpSpeed'),
    uWarpAmplitude: gl.getUniformLocation(p,'uWarpAmplitude'),
    uBlendAngle: gl.getUniformLocation(p,'uBlendAngle'),
    uBlendSoftness: gl.getUniformLocation(p,'uBlendSoftness'),
    uRotationAmount: gl.getUniformLocation(p,'uRotationAmount'),
    uNoiseScale: gl.getUniformLocation(p,'uNoiseScale'),
    uGrainAmount: gl.getUniformLocation(p,'uGrainAmount'),
    uGrainScale: gl.getUniformLocation(p,'uGrainScale'),
    uGrainAnimated: gl.getUniformLocation(p,'uGrainAnimated'),
    uContrast: gl.getUniformLocation(p,'uContrast'),
    uGamma: gl.getUniformLocation(p,'uGamma'),
    uSaturation: gl.getUniformLocation(p,'uSaturation'),
    uCenterOffset: gl.getUniformLocation(p,'uCenterOffset'),
    uZoom: gl.getUniformLocation(p,'uZoom'),
    uColor1: gl.getUniformLocation(p,'uColor1'),
    uColor2: gl.getUniformLocation(p,'uColor2'),
    uColor3: gl.getUniformLocation(p,'uColor3'),
  };

  // 调色板颜色
  const c = {
    c1: hexToRgb(palette.c1),
    c2: hexToRgb(palette.c2),
    c3: hexToRgb(palette.c3),
  };

  // 默认参数（来自 React Bits Grainient）
  const d = {
    uTimeSpeed: 0.20, uColorBalance: 0.0, uWarpStrength: 1.2,
    uWarpFrequency: 5.0, uWarpSpeed: 2.0, uWarpAmplitude: 50.0,
    uBlendAngle: 0.0, uBlendSoftness: 0.05, uRotationAmount: 500.0,
    uNoiseScale: 2.0, uGrainAmount: 0.15, uGrainScale: 2.0,
    uGrainAnimated: 0.0, uContrast: 1.5, uGamma: 1.0, uSaturation: 1.1,
    uCenterOffset: [0.0, 0.0], uZoom: 0.9,
  };
  // 应用调色板自带的参数覆盖
  Object.assign(d, palette.params || {});

  gl.uniform1f(u.uTimeSpeed, d.uTimeSpeed);
  gl.uniform1f(u.uColorBalance, d.uColorBalance);
  gl.uniform1f(u.uWarpStrength, d.uWarpStrength);
  gl.uniform1f(u.uWarpFrequency, d.uWarpFrequency);
  gl.uniform1f(u.uWarpSpeed, d.uWarpSpeed);
  gl.uniform1f(u.uWarpAmplitude, d.uWarpAmplitude);
  gl.uniform1f(u.uBlendAngle, d.uBlendAngle);
  gl.uniform1f(u.uBlendSoftness, d.uBlendSoftness);
  gl.uniform1f(u.uRotationAmount, d.uRotationAmount);
  gl.uniform1f(u.uNoiseScale, d.uNoiseScale);
  gl.uniform1f(u.uGrainAmount, d.uGrainAmount);
  gl.uniform1f(u.uGrainScale, d.uGrainScale);
  gl.uniform1f(u.uGrainAnimated, d.uGrainAnimated);
  gl.uniform1f(u.uContrast, d.uContrast);
  gl.uniform1f(u.uGamma, d.uGamma);
  gl.uniform1f(u.uSaturation, d.uSaturation);
  gl.uniform2f(u.uCenterOffset, d.uCenterOffset[0], d.uCenterOffset[1]);
  gl.uniform1f(u.uZoom, d.uZoom);
  gl.uniform3fv(u.uColor1, c.c1);
  gl.uniform3fv(u.uColor2, c.c2);
  gl.uniform3fv(u.uColor3, c.c3);

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.floor(r.width * dpr));
    const h = Math.max(1, Math.floor(r.height * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w; canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  let raf = 0, t0 = performance.now(), running = true;
  const loop = () => {
    if (!running) return;
    gl.uniform1f(u.iTime, (performance.now() - t0) * 0.001);
    gl.uniform2f(u.iResolution, canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    raf = requestAnimationFrame(loop);
  };

  let visible = true, pageVisible = !document.hidden;
  const tryStart = () => { if (visible && pageVisible && !raf) { raf = requestAnimationFrame(loop); } };
  const tryStop  = () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } };
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? tryStart() : tryStop(); }, { threshold: 0 });
  io.observe(canvas);
  const onVis = () => { pageVisible = !document.hidden; pageVisible ? tryStart() : tryStop(); };
  document.addEventListener('visibilitychange', onVis);
  tryStart();
}

/* ====================================================
   Silk —— vanilla WebGL2 移植（来自 React Bits Silk 组件）
   丝绸质感 + 三色渐变融合
   ==================================================== */
function setupSilk(canvas, palette) {
  console.log('[Silk] setupSilk called, canvas=', !!canvas, 'palette=', palette?.c1);
  if (!canvas) return null;
  const gl = canvas.getContext('webgl2', { premultipliedAlpha: false });
  console.log('[Silk] gl=', !!gl);
  if (!gl) {
    canvas.style.background = palette.fallback || 'linear-gradient(135deg,#f4c430,#e8953a,#0f2b4d)';
    canvas.style.animation = 'grainient-fallback-flow 12s ease-in-out infinite';
    return null;
  }

  const vs = `#version 300 es
  in vec2 aPos;
  in vec2 aUV;
  out vec2 vUv;
  void main() {
    vUv = aUV;
    gl_Position = vec4(aPos, 0., 1.);
  }`;

  // Silk 核心 shader — 波浪铺满全屏，三个颜色由 pattern 平滑驱动
  const fs = `#version 300 es
  precision highp float;
  in vec2 vUv;
  uniform float uTime;
  uniform float uSpeed;
  uniform float uScale;
  uniform float uRotation;
  uniform float uNoiseIntensity;
  uniform vec3  uColor1;
  uniform vec3  uColor2;
  uniform vec3  uColor3;
  out vec4 fragColor;

  const float e = 2.71828182845904523536;

  float noise(vec2 texCoord) {
    float G = e;
    vec2 r = (G * sin(G * texCoord));
    return fract(r.x * r.y * (1.0 + texCoord.x));
  }

  vec2 rotateUvs(vec2 uv, float angle) {
    float c = cos(angle);
    float s = sin(angle);
    mat2 rot = mat2(c, -s, s, c);
    return rot * uv;
  }

  void main() {
    float rnd = noise(gl_FragCoord.xy);
    vec2 uv = rotateUvs(vUv * uScale, uRotation);
    vec2 tex = uv * uScale;
    float tOffset = uSpeed * uTime;

    // Silk 的流动扭曲
    tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

    // Silk 的丝绸质感 pattern (范围 ≈ 0.2 ~ 1.0)
    float pattern = 0.6 +
      0.4 * sin(5.0 * (tex.x + tex.y +
cos(3.0 * tex.x + 5.0 * tex.y) +
0.02 * tOffset) +
sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

    // ===== 颜色：pattern 主导波浪 + 位置做色彩偏移 =====
    // 基础三色渐变：左上偏 c1，右下偏 c3，中间 c2
    float pos = vUv.x * 0.6 + vUv.y * 0.4;
    vec3 base = mix(uColor1, uColor2, smoothstep(0.0, 0.5, pos));
    base = mix(base, uColor3, smoothstep(0.5, 1.0, pos));

    // pattern 驱动颜色在三色之间波浪：每个波浪周期都有完整颜色循环
    // 用 pattern 值作为 color wheel 相位（加 pos 偏移让色彩流动）
    float phase = (pattern - 0.2) / 0.8 + pos * 0.3;  // 归一化 + 位置偏移
    phase = fract(phase);  // 循环 0~1

    vec3 col;
    if (phase < 0.333) {
      col = mix(uColor1, uColor2, phase / 0.333);
    } else if (phase < 0.666) {
      col = mix(uColor2, uColor3, (phase - 0.333) / 0.333);
    } else {
      col = mix(uColor3, uColor1, (phase - 0.666) / 0.334);
    }

    // 与基础色混合：pattern 主导 70%，位置渐变占 30%
    col = mix(base, col, 0.7);

    // 波浪明暗：保持 Silk 质感但不让任何区域过暗
    float bright = 0.6 + pattern * 0.5;  // 范围 0.7 ~ 1.15，不会太暗
    col *= bright;

    // 颗粒纹理
    float grain = rnd / 15.0 * uNoiseIntensity;
    col -= vec3(grain);

    // 亮部高光（丝绸光泽感）
    float spec = smoothstep(0.75, 0.95, pattern);
    col += vec3(spec) * 0.3;

    fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
  }`;

  function compile(type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.warn('[Silk] shader error:', gl.getShaderInfoLog(sh)); return null;
    }
    return sh;
  }

  const p = gl.createProgram();
  gl.attachShader(p, compile(gl.VERTEX_SHADER, vs));
  gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(p);
  gl.useProgram(p);

  // ========== 全屏 quad：两个三角形拼满 [-1,1]x[-1,1] ==========
  // 6 vertices, each: posX,posY, uvX,uvY  (stride = 16 bytes)
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    // Triangle 1 (bottom-right):
    -1,-1, 0,1,   // V0 左下
     1,-1, 1,1,   // V1 右下
     1, 1, 1,0,   // V2 右上
    // Triangle 2 (top-left):
    -1,-1, 0,1,   // V3 左下 (共享)
     1, 1, 1,0,   // V4 右上 (共享)
    -1, 1, 0,0    // V5 左上
  ]), gl.STATIC_DRAW);

  const locAPos = gl.getAttribLocation(p, 'aPos');
  const locAUV  = gl.getAttribLocation(p, 'aUV');
  gl.enableVertexAttribArray(locAPos);
  gl.vertexAttribPointer(locAPos, 2, gl.FLOAT, false, 16, 0);
  gl.enableVertexAttribArray(locAUV);
  gl.vertexAttribPointer(locAUV, 2, gl.FLOAT, false, 16, 8);

  const u = {
    uTime: gl.getUniformLocation(p, 'uTime'),
    uSpeed: gl.getUniformLocation(p, 'uSpeed'),
    uScale: gl.getUniformLocation(p, 'uScale'),
    uRotation: gl.getUniformLocation(p, 'uRotation'),
    uNoiseIntensity: gl.getUniformLocation(p, 'uNoiseIntensity'),
    uColor1: gl.getUniformLocation(p, 'uColor1'),
    uColor2: gl.getUniformLocation(p, 'uColor2'),
    uColor3: gl.getUniformLocation(p, 'uColor3'),
  };

  gl.uniform1f(u.uSpeed, palette.speed ?? 3.5);
  gl.uniform1f(u.uScale, palette.scale ?? 1.3);
  gl.uniform1f(u.uRotation, palette.rotation ?? 0.3);
  gl.uniform1f(u.uNoiseIntensity, palette.noiseIntensity ?? 1.8);
  gl.uniform3fv(u.uColor1, hexToRgb(palette.c1));
  gl.uniform3fv(u.uColor2, hexToRgb(palette.c2));
  gl.uniform3fv(u.uColor3, hexToRgb(palette.c3));

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.floor(r.width * dpr));
    const h = Math.max(1, Math.floor(r.height * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w; canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  let raf = 0, t0 = performance.now(), running = true;
  const loop = () => {
    if (!running) return;
    gl.uniform1f(u.uTime, (performance.now() - t0) * 0.001);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    raf = requestAnimationFrame(loop);
  };

  let visible = true, pageVisible = !document.hidden;
  const tryStart = () => { if (visible && pageVisible && !raf) { raf = requestAnimationFrame(loop); } };
  const tryStop  = () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } };
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? tryStart() : tryStop(); }, { threshold: 0 });
  io.observe(canvas);
  const onVis = () => { pageVisible = !document.hidden; pageVisible ? tryStart() : tryStop(); };
  document.addEventListener('visibilitychange', onVis);
  tryStart();

  return () => {
    running = false; tryStop();
    ro.disconnect(); io.disconnect();
    document.removeEventListener('visibilitychange', onVis);
  };
}

function initCard5Grainient() {
  if (_grainientCleanup) { _grainientCleanup(); _grainientCleanup = null; }
  const cleanups = [];

  // 卡3：Silk 丝绸效果 —— 全金黄色波浪循环
  const canvas3 = document.querySelector('.filter-illustration .work-card[data-work="3"] .grainient-canvas');
  const c3 = setupSilk(canvas3, {
    c1: '#f7d046',  // 亮金黄
    c2: '#c88a2a',  // 赭金
    c3: '#d4a017',  // 深金黄
    fallback: 'linear-gradient(135deg,#f7d046,#c88a2a,#d4a017)',
    speed: 2.8,       // 流动速度（丝绸缓慢飘动）
    scale: 1.2,       // pattern 大小
    rotation: 0.4,    // 旋转角度（弧度）
    noiseIntensity: 2.2  // 颗粒强度（丝绸纤维感）
  });
  if (c3) cleanups.push(c3);

  // 卡5：粉 → 橙 → 深蓝（亮色调）
  const canvas5 = document.querySelector('.filter-illustration .work-card[data-work="5"] .grainient-canvas');
  const c5 = setupGrainient(canvas5, {
    name: 'card5',
    c1: '#ff6b9d', c2: '#ff9a6b', c3: '#2a3a8f',
    fallback: 'linear-gradient(120deg,#ff6b9d,#ff9a6b,#2a3a8f,#6b8bff,#9b59d0,#ff6b9d)'
  });
  if (c5) cleanups.push(c5);

  // 卡8：深紫 + 灰紫 + 亮橙色（橙色融入整个流体渐变里）
  const canvas8 = document.querySelector('.filter-illustration .work-card[data-work="8"] .grainient-canvas');
  const c8 = setupGrainient(canvas8, {
    name: 'card8',
    c1: '#3d2a4e',  // 深紫
    c2: '#4a3a58',  // 灰紫
    c3: '#ff8c3a',  // 亮橙色
    fallback: 'linear-gradient(160deg,#3d2a4e,#4a3a58,#ff8c3a)',
    params: { uContrast: 1.3, uSaturation: 0.95, uZoom: 0.85, uTimeSpeed: 0.18, uWarpStrength: 1.4 }
  });
  if (c8) cleanups.push(c8);

  _grainientCleanup = () => cleanups.forEach(c => c());
}
// 切 filter 时清理 Grainient（renderWorks 会重建 canvas）
window.addEventListener('beforeunload', () => { if (_grainientCleanup) _grainientCleanup(); });
let _mouseCursorRAF = null;

function stopMouseCursorShow() {
  if (_mouseCursorRAF) { cancelAnimationFrame(_mouseCursorRAF); _mouseCursorRAF = null; }
}

function startMouseCursorShow(mouseEl, gridEl) {
  stopMouseCursorShow();
  const cursor  = mouseEl.querySelector('.fm-cursor');
  const spinner = mouseEl.querySelector('.fm-spinner');
  const dot     = mouseEl.querySelector('.fm-click-dot');

  // 初始位置：grid 本地坐标（absolute 定位，不需要加 g.left/g.top）
  const g0 = gridEl.getBoundingClientRect();
  let cx = g0.width  * (0.15 + Math.random()*0.5);
  let cy = g0.height * (0.10 + Math.random()*0.5);
  mouseEl.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
  let spinnerOn = false;

  // 连续漫游：始终缓慢游动，没有停顿和瞬间跳跃
  // target: 当前要去的点；速度固定慢；到点后自动微调方向继续
  let tx = cx, ty = cy;

  // resize 序列状态
  let resize = null;

  function pickSlowTarget() {
    const g = gridEl.getBoundingClientRect();
    const pad = 20;
    const maxX = g.width  - pad;
    const minX = pad;
    const maxY = g.height - pad;
    const minY = pad;
    // 只选附近的点 —— 像真实鼠标小范围飘，不跨越大半屏
    const range = Math.min(280, Math.min(g.width, g.height) * 0.35);
    let nx, ny, tries = 0;
    do {
      nx = Math.max(minX, Math.min(maxX, cx + (Math.random()*2-1) * range));
      ny = Math.max(minY, Math.min(maxY, cy + (Math.random()*2-1) * range));
      tries++;
    } while (Math.hypot(nx - cx, ny - cy) < 40 && tries < 8);
    tx = nx; ty = ny;
  }
  pickSlowTarget();

  // 偶尔要触发的"点击卡片"事件
  let pendingClick = false;

  // 检查光标当前是否停在某张卡片范围内（x,y 是 grid 本地坐标）
  function cardAt(x, y) {
    const g = gridEl.getBoundingClientRect();
    const cards = gridEl.querySelectorAll('.work-card');
    for (const card of cards) {
      const r = card.getBoundingClientRect();
      if (x + g.left >= r.left - 8 && x + g.left <= r.right + 8 &&
  y + g.top  >= r.top  - 8 && y + g.top  <= r.bottom + 8) return card;
    }
    return null;
  }

  function triggerClick() {
    dot.classList.add('active');
    cursor.classList.add('clicking');
    setTimeout(() => {
      cursor.classList.remove('clicking');
      setTimeout(() => { dot.classList.remove('active'); }, 150);
    }, 200);
  }

  function triggerRightClick() {
    if (spinnerOn) return;
    spinnerOn = true;
    spinner.classList.add('on');
    cursor.classList.add('dim');
    setTimeout(() => {
      spinnerOn = false;
      spinner.classList.remove('on');
      cursor.classList.remove('dim');
    }, 1400);
  }

  // ---------- resize 序列调度 ----------
  function scheduleResize() {
     if (!gridEl.classList.contains('filter-graphic')) return;
     const cards = gridEl.querySelectorAll('.work-card');
     if (!cards.length) { setTimeout(scheduleResize, 20000); return; }
     const card = cards[Math.floor(Math.random()*cards.length)];
     const tryInit = () => {
if (resize) { setTimeout(tryInit, 1500); return; }
const g = gridEl.getBoundingClientRect();
const cRect = card.getBoundingClientRect();
const brHandle = card.querySelector('.cm-br');
// 全部 grid 本地坐标
const hx = (brHandle
  ? brHandle.getBoundingClientRect().right
  : cRect.right) - g.left;
const hy = (brHandle
  ? brHandle.getBoundingClientRect().bottom
  : cRect.bottom) - g.top;
const dist = Math.hypot(hx - cx, hy - cy);
if (dist < 30) {
  card.style.transition = 'none';
  card.style.transform = '';
  card.style.transformOrigin = '0px 0px';
  // cardOX, cardOY = card 左上角本地坐标；ogX, ogY = cm-br 中心本地坐标
  const cardOX = cRect.left - g.left;
  const cardOY = cRect.top  - g.top;
  const brRect = brHandle.getBoundingClientRect();
  const ogX = brRect.left + brRect.width  / 2 - g.left;
  const ogY = brRect.top  + brRect.height / 2 - g.top;
  const tScale = 0.70 + Math.random()*0.14;
  resize = {
    card, cardOX, cardOY, ogX, ogY,
    phase: 'hover', framesLeft: 50,
    dragScale: 1, targetScale: tScale,
  };
} else if (dist < 220) {
  tx = hx; ty = hy;  // 把漫游目标改成 handle 位置，连续滑过去
  setTimeout(tryInit, 2500);
} else {
  tx = hx; ty = hy;  // 把漫游目标改成 handle 位置，连续滑过去
  setTimeout(tryInit, 3500);
}
      };
     setTimeout(tryInit, 1000);
     setTimeout(scheduleResize, 10000 + Math.random()*6000);
   }
  setTimeout(scheduleResize, 8000);

  let frame = 0;
  let rightClickFrame = 2400;  // ~40s 后第一次右键

  function tick() {
    frame++;

    if (resize) {
      // ========== resize 序列（最高优先级，阻止正常漫游） ==========
      resize.framesLeft--;

      if (resize.phase === 'hover') {
// 光标精确停在 handle 中心（origin）
cx += (resize.ogX - cx) * 0.25;
cy += (resize.ogY - cy) * 0.25;
mouseEl.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
if (resize.framesLeft <= 0) {
  cursor.classList.add('clicking');
  resize.phase = 'press';
  resize.framesLeft = 20;
}
      } else if (resize.phase === 'press') {
mouseEl.style.transform = `translate3d(${resize.ogX}px, ${resize.ogY}px, 0)`;
if (resize.framesLeft <= 0) {
  resize.phase = 'dragIn';
  resize.framesLeft = 160;
  resize.dragScale = 1;
}
      } else if (resize.phase === 'dragIn') {
const p = 1 - resize.framesLeft / 160;
const ease = p * p;
const newScale = 1 + (resize.targetScale - 1) * ease;
resize.dragScale = newScale;
resize.card.style.transform = `scale(${newScale})`;
// 正确公式：card左上角不动 + cm-br相对偏移量被scale
cx = resize.cardOX + (resize.ogX - resize.cardOX) * newScale;
cy = resize.cardOY + (resize.ogY - resize.cardOY) * newScale;
mouseEl.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
if (resize.framesLeft <= 0) {
  resize.phase = 'dragOut';
  resize.framesLeft = 180;
}
      } else if (resize.phase === 'dragOut') {
const p = 1 - resize.framesLeft / 180;
const ease = 1 - Math.pow(1 - p, 2);
const newScale = resize.dragScale + (1 - resize.dragScale) * ease;
resize.card.style.transform = `scale(${newScale})`;
cx = resize.cardOX + (resize.ogX - resize.cardOX) * newScale;
cy = resize.cardOY + (resize.ogY - resize.cardOY) * newScale;
mouseEl.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
if (resize.framesLeft <= 0) {
  resize.phase = 'release';
  resize.framesLeft = 15;
  cx = resize.ogX; cy = resize.ogY;
  resize.card.style.transform = 'scale(1)';
  mouseEl.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
}
      } else if (resize.phase === 'release') {
mouseEl.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
if (resize.framesLeft <= 0) {
  cursor.classList.remove('clicking');
  resize.card.style.transform = '';
  resize.card.style.transformOrigin = '';
  resize.card.style.transition = '';
  resize = null;
  // resize 结束后把漫游目标改成附近新点，无缝衔接继续飘
  pickSlowTarget();
}
      }

      // resize 分支内也加安全夹取
      const gg2 = gridEl.getBoundingClientRect();
      cx = Math.max(14, Math.min(gg2.width  - 14, cx));
      cy = Math.max(14, Math.min(gg2.height - 14, cy));

      _mouseCursorRAF = requestAnimationFrame(tick);
      return;
    }

    // ========== 正常漫游 ==========

    // ========== 连续缓慢漫游 ==========
    // 始终朝 (tx,ty) 慢慢飘，到点自动换附近新点 —— 没有停顿、没有瞬间跳跃

    const dx = tx - cx;
    const dy = ty - cy;
    const rem = Math.hypot(dx, dy);
    if (rem < 3) {
      // 到终点了，自动选下一个附近的点 —— 无缝连续
      if (pendingClick) {
const card = cardAt(cx, cy);
if (card && Math.random() < 0.3) triggerClick();
pendingClick = false;
      }
      pickSlowTarget();
    } else {
      // 固定慢速：像真实鼠标慢慢飘
      // 远距离稍微快点，近距离慢下来自然减速
      const speed = Math.min(1.2, Math.max(0.35, rem / 180));
      const nx = dx / rem;
      const ny = dy / rem;
      cx += nx * speed;
      cy += ny * speed;
      mouseEl.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      // 偶尔在漫游中点一下（比如路过卡片时）
      if (!pendingClick && frame % 720 === 0) {
const card = cardAt(cx, cy);
if (card && Math.random() < 0.4) { pendingClick = true; }
      }
    }

    // 安全夹取：确保光标永不越界
    const gg = gridEl.getBoundingClientRect();
    const PAD = 14;
    cx = Math.max(PAD, Math.min(gg.width  - PAD, cx));
    cy = Math.max(PAD, Math.min(gg.height - PAD, cy));

    // 右键刷新
    if (!spinnerOn && frame > rightClickFrame) {
      triggerRightClick();
      rightClickFrame = frame + 2400 + Math.random() * 600;
    }

    _mouseCursorRAF = requestAnimationFrame(tick);
  }

  _mouseCursorRAF = requestAnimationFrame(tick);
}






// ============ 平面分类第一个卡片：网点随机呼吸效果 ============
function initHalftoneDots() {
  const c = document.querySelector('.halftone-canvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  const W = 400, H = 400;
  const DPR = Math.min(2, window.devicePixelRatio || 1);
  c.width = W * DPR; c.height = H * DPR;
  ctx.scale(DPR, DPR);

  // ========== 随机散布：泊松圆盘采样，互不扎堆 ==========
  // 点随机撒满画面，但强制任意两点最小间距 → 稀疏均匀不扎堆；大小/颜色全随机
  const HUE_POOL = [345, 350, 220, 265, 200, 40];   // 浅粉/浅蓝/浅紫/奶油
  const MIN_DIST = 16; // 点间最小间距（> 直径，不重叠扎堆）
  const CELL = MIN_DIST / Math.SQRT2;
  const GRID = new Map();
  const key = (cx, cy) => cx + ',' + cy;
  function addP(d) { GRID.set(key(Math.floor(d.x / CELL), Math.floor(d.y / CELL)), d); }
  function clash(px, py) {
    const cx = Math.floor(px / CELL), cy = Math.floor(py / CELL);
    for (let gx = cx - 1; gx <= cx + 1; gx++)
      for (let gy = cy - 1; gy <= cy + 1; gy++) {
const o = GRID.get(key(gx, gy));
if (o) { const dx = o.x - px, dy = o.y - py; if (dx * dx + dy * dy < MIN_DIST * MIN_DIST) return true; }
      }
    return false;
  }
  const GAP = 18;
  const MAX_R = GAP * 0.58;
  const dots = [];
  const TARGET = 46;   // 目标点量（稀疏）
  let guard = 0;
  while (dots.length < TARGET && guard++ < 5000) {
    const d = { x: Math.random() * W, y: Math.random() * H,
hue: HUE_POOL[Math.floor(Math.random() * HUE_POOL.length)],
targetR: 0, life: 0, startT: 0 };
    if (clash(d.x, d.y)) continue;
    dots.push(d); addP(d);
  }
  function respawn(d) {
    // 重生到随机新位置，泊松约束保证新位置也不扎堆
    let oldKey = key(Math.floor(d.x / CELL), Math.floor(d.y / CELL));
    if (GRID.get(oldKey) === d) GRID.delete(oldKey);
    for (let tries = 0; tries < 24; tries++) {
      const nx = Math.random() * W, ny = Math.random() * H;
      if (!clash(nx, ny)) { d.x = nx; d.y = ny; addP(d); break; }
    }
    if (GRID.get(key(Math.floor(d.x / CELL), Math.floor(d.y / CELL))) !== d) addP(d); // 兜底放回
    d.targetR = MAX_R * (0.3 + Math.random() * 0.55);   // 更小，收窄范围
    d.light = 82 + Math.random() * 14; // 浅色：源色即显示色
    d.sat = 6 + Math.random() * 14;    // 微色相，柔和浅
    d.hue = HUE_POOL[Math.floor(Math.random() * HUE_POOL.length)];
    d.life = 2 + Math.random() * 3.2;  // 错峰
    d.startT = performance.now();
  }
  dots.forEach(respawn);

  let rafId = null;
  function tick() {
    const now = performance.now();
    ctx.clearRect(0, 0, W, H);
    // 整体半透，露出底渐变 → 玻璃感
    ctx.globalCompositeOperation = 'source-over';
    for (const d of dots) {
      let p = (now - d.startT) / (d.life * 1000);
      if (p >= 1) { respawn(d); p = 0; }
      let env;
      if (p < 0.45) env = Math.sin((p / 0.45) * Math.PI / 2);
      else { const q = (p - 0.45) / 0.55; env = Math.cos(q * Math.PI / 2); }
      const r = d.targetR * env;
      if (r < 0.6) continue; // 缩到消失（比之前稍大，保证玻璃质感）
      const alpha = Math.min(0.65, 0.22 + 0.43 * Math.pow(env, 1.4));
      // ========== 玻璃三层绘制 ==========
      // 1) 外阴影（让玻璃有悬浮感）
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = alpha * 0.35;
      ctx.fillStyle = 'hsl(' + d.hue + ',' + (d.sat + 6) + '%,' + Math.max(d.light - 12, 18) + '%)';
      ctx.beginPath();
      ctx.arc(d.x + r * 0.08, d.y + r * 0.14, r * 0.96, 0, Math.PI * 2);
      ctx.fill();
      // 2) 玻璃主体：径向渐变（中心亮、边缘深）= 厚度感
      const grd = ctx.createRadialGradient(
d.x - r * 0.28, d.y - r * 0.32, r * 0.05,
d.x, d.y, r
      );
      grd.addColorStop(0.00, 'hsl(' + d.hue + ',' + d.sat + '%,' + Math.min(d.light + 22, 98) + '%)');  // 中心亮
      grd.addColorStop(0.55, 'hsl(' + d.hue + ',' + d.sat + '%,' + (d.light - 2) + '%)');   // 中层
      grd.addColorStop(1.00, 'hsl(' + d.hue + ',' + (d.sat + 4) + '%,' + Math.max(d.light - 18, 20) + '%)'); // 边缘深
      ctx.globalAlpha = alpha;
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
      ctx.fill();
      // 3) 顶部高光（小圆 = 玻璃反光）
      if (r > 2.2) {
ctx.globalCompositeOperation = 'lighter';
ctx.globalAlpha = alpha * 0.55;
ctx.fillStyle = 'hsl(0,0%,' + Math.min(d.light + 40, 99) + '%)';
ctx.beginPath();
ctx.arc(d.x - r * 0.32, d.y - r * 0.36, r * 0.16, 0, Math.PI * 2);
ctx.fill();
      }
    }
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);
}

function initPixelDots() {
  const c = document.querySelector('.pixel-canvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  const W = 400, H = 300;
  const DPR = Math.min(2, window.devicePixelRatio || 1);
  c.width = W * DPR; c.height = H * DPR;
  ctx.scale(DPR, DPR);
  ctx.imageSmoothingEnabled = false;

  const GAP = 7;
  const MAX_R = GAP * 0.58;
  const dots = [];
  for (let gy = GAP / 2; gy < H; gy += GAP) {
    for (let gx = GAP / 2; gx < W; gx += GAP) {
      const cx = gx / W, cy = gy / H;
      let v = (1 - cx) * 0.55 + (1 - cy) * 0.45;
      // 中心亮方形反白区
      const dxc = Math.abs(cx - 0.5), dyc = Math.abs(cy - 0.5);
      if (dxc < 0.2 && dyc < 0.2) v = 0.0;
      // 中心十字反白
      if ((dxc < 0.04 || dyc < 0.04) && dxc < 0.25 && dyc < 0.25) v = 0.0;
      const r = MAX_R * Math.pow(1 - v, 0.9);
      if (r < 0.6) continue;
      dots.push({ x: gx, y: gy, baseR: r, phase: Math.random() * Math.PI * 2, speed: 0.6 + Math.random() * 1.2 });
    }
  }

  let rafId = null, start = performance.now();
  function tick() {
    const now = performance.now();
    const t = (now - start) / 1000;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0f0f0f';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5f5f5';
    for (const d of dots) {
      const breathe = 1 + Math.sin(t * d.speed + d.phase) * 0.08;
      const r = d.baseR * breathe;
      ctx.beginPath();
      ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);
}
