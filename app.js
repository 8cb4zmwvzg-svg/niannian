const paths={panel:'M4 4h16v16H4z M11 4v16',plus:'M12 5v14M5 12h14',search:'M20 20l-5-5 M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0 M10 6a4 4 0 0 1 4 4',save:'M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z M9 3v8h6V3 M8 17h8',book:'M12 5C8 2 3 3 2 5v13c4-2 7-1 10 1 3-2 6-3 10-1V5c-1-2-6-3-10 0z M12 5v14',pen:'m5 10 8-7 7 7-7 8-10 2 2-10z M5 18l6-6 M12 8l4 4',puzzle:'M8 4h3a3 3 0 1 1 6 0h3v6a3 3 0 1 1 0 6v4h-6a3 3 0 1 0-6 0H4v-6a3 3 0 1 1 0-6V4z',mat:'M3 11c-7 12 12 6 16 0 M5 8l3-3 6 6 M18 9c9 4 3 11-3 8 M3 4h.1M8 3h.1',bio:'m12 1 9 7-3 11-6 4-7-5L3 8z M12 1v22M3 8l15 11M21 8 5 18 M3 8l9 5 9-5 M8 4l10 15 M16 4 5 18',pharm:'M10 17 5 8C1 3-2 10 3 17c2 3 5 3 7 0L8 6c-1-5 5-5 5 0v11c0 5 7 5 7 0V6c0-5-5-4-5 0v10',share:'m14 3 8 7-8 7v-5c-6 0-8 3-11 7 0-8 4-12 11-12z',terminal:'M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M7 8l4 4-4 4M13 16h4',down:'M12 3v16m-6-6 6 6 6-6',download:'M12 3v14m-5-5 5 5 5-5M6 21h12',spinner:'M18 5a7 7 0 1 0 2 8'};
const icon=(name,cls='')=>`<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.panel}"/></svg>`;
const citations={1:'钙钛矿的软离子晶格、高缺陷密度与活性界面使其在光、热、湿度和偏压联合作用下易于发生离子迁移、相分离与组分分解，稳定性由此成为商业化的核心瓶颈。',2:'稳定性数据高度依赖测试条件（封装状态、光照、温度、湿度、偏压模式），不同研究之间只有遵循同一 ISOS 协议的数值才具有可比性，这也是本综述在通篇反复强调条件差异、避免将单一体系结果写成普遍结论的原因。'};
const cite=id=>`<span class="citation" data-reference="${id}">${citations[id]}<sup>${id}</sup></span>`;
function Sidebar(){return `<aside class="sidebar"><div class="brand"><div class="logo"><small>sol</small>Bh</div><strong>玻尔科学空间</strong>${icon('panel')}</div><nav>${[['plus','新对话'],['search','学术发现'],['save','知识库'],['book','文献阅读'],['pen','学术写作'],['puzzle','智能体·科学工具']].map(([i,t])=>`<div class="nav-row">${icon(i,i==='plus'?'new':'')}<span>${t}</span></div>`).join('')}<div class="subnav">${[['mat','MatMaster'],['bio','BioMaster'],['pharm','PharmMaster']].map(([i,t])=>`<div class="nav-row">${icon(i)}<span>${t}</span></div>`).join('')}</div></nav><div class="tabs"><span>问答</span><span class="active">任务</span></div><div class="workspace"><div>工作空间</div><div>暂无云端工作空间</div></div><div class="history"><div class="muted">对话</div><div class="history-row selected"><span>帮我整理近3年钙钛矿电…</span>${icon('spinner')}</div><div class="history-row">帮我写一份适老化设计论文…</div><div class="history-row">帮我整理近3年钙钛矿电池稳…</div></div><div class="account"><div class="avatar"></div><span>微信用户_…</span><span class="badge">Plus</span>${icon('download')}</div></aside>`}
function Article(){return `<article><h3 class="keywords">关键词</h3><p class="keyword-list">钙钛矿太阳能电池；稳定性；界面钝化；离子迁移；ISOS 协议；封装；叠层器件</p><hr><h3>1. 引言</h3><p>钙钛矿太阳能电池凭借可调带隙、低成本的溶液加工路线与快速攀升的能量转换效率（PCE），被认为是下一代光伏技术的重要候选。截至本综述检索窗口，单结器件的认证 PCE 已超过 26.7%，钙钛矿/硅叠层器件已突破 33%，接近并超越商业晶硅电池的实用水平。<br>然而，效率的快速提升并未同步转化为工程可用的长期寿命：${cite(1)}</p><p>理解稳定性问题需要同时回答三个问题：器件为什么会失稳（内在机制）、能够用什么手段抑制失稳（工程策略）、以及如何可信地测量并比较寿命（验证标准）。据此，本综述提出一个「失稳机制—抑制策略—加速老化验证」的三维分析框架：第一维界定失稳的根本机制（离子迁移、相分离、有机阳离子不可逆分解、碘/铅流失）；第二维覆盖针对性的抑制策略（界面钝化、组分与添加剂工程、器件结构与封装）；第三维以国际有机光伏稳定性峰会（International Summit on Organic Photovoltaic Stability, ISOS）的加速老化协议为可比基准。全文始终以两对对照为评价基线：未封装对封装，单结小面积器件对组件/叠层器件。</p><p>在时间范围上，本综述聚焦 2023 年 10 月至 2026 年 10 月间发表的一手研究与关键综述，少量引用更早的奠基性工作；证据以作者实际检索到的论文摘要为主，具体数值均标注来源文献，仅出现在摘要中的结果按摘要明确报道的范围引用，不作外推。需要说明的是，${citations[2]}</p><h3>2. 界面工程与钝化对稳定性的提升</h3><p>界面是钙钛矿器件中最脆弱、缺陷最密集的区域，也是近 3 年稳定性提升最集中的突破口。界面工程对稳定性的贡献呈现清晰的空间递进：自组装单分子层（self-assembled monolayer, SAM）的锚定稳定性是埋底界面稳定的前提，多功能分子的缺陷钝化进一步降低非辐射复合，而 2D/3D 或 1D/3D 异质结则将界面保护从二维接触延伸至体相晶界，三者共同构成「接触抵抗—晶界封装」的完整界面稳定链。</p></article>`}
function Composer(){return `<div class="composer-area"><div class="composer"><div class="placeholder">继续补充或修改要求</div><div class="composer-bottom"><div class="add">${icon('plus')}</div><div class="model"><div class="model-logo">${icon('pharm')}</div>SciMaster</div><div class="mode">标准</div><div class="send"><i></i></div></div></div><div class="disclaimer">内容由AI生成，请仔细甄别</div></div>`}
document.querySelector('#app').innerHTML=`<div class="canvas">${Sidebar()}<main><header><strong>帮我整理近3年钙钛矿电池稳定性的文献综述</strong><div class="tools">${icon('share')}${icon('terminal')}${icon('panel')}</div></header><div class="reading">${Article()}</div><div class="scroll-indicator"></div><button class="scroll-down" aria-label="滚动至正文底部">${icon('down')}</button>${Composer()}</main></div>`;
function resize(){const scale=innerWidth/2048;document.documentElement.style.setProperty('--scale',scale);document.documentElement.style.setProperty('--canvas-height',`${innerHeight/scale}px`)}resize();addEventListener('resize',resize);document.querySelector('.scroll-down').addEventListener('click',()=>document.querySelector('.reading').scrollTo({top:9999,behavior:'smooth'}));

// 新增内容为概括性总结，不是文献原文直接引述。
const continuation = `
<p>进一步讨论界面策略时，需要把初始效率改善与长期稳定性改善区分开来。较低的界面复合损失有助于器件性能提升，但单次效率测试并不能说明钝化层在持续光照、升温和电场作用下仍然有效。因此，评价界面处理方案时，应同时关注处理前后的电学表现、老化过程中的变化，以及失效后界面的化学与结构特征。</p>
<p>从器件整体出发，界面工程也需要与吸收层及电荷传输层共同考虑。某一局部界面的改善，未必能够消除其他位置的失效路径。本综述据此认为，更有说服力的验证方式是在相同器件结构和测试条件下设置对照，并追踪完整的性能衰减过程，以判断性能保持究竟来自界面保护，还是来自其他制备条件的变化。</p>
<h3>3. 组分调控与离子迁移的抑制</h3>
<p>除界面外，钙钛矿吸收层自身的组成与缺陷同样影响器件稳定性。离子迁移会改变器件内部的局部环境，并可能参与界面及电极的退化过程。组分调整、添加剂引入与低维结构设计，是围绕这一问题展开的不同材料策略，其效果需要结合具体配方、制备过程和工作条件理解。</p>
<p>在比较这些方案时，应避免把某一材料体系中的有效处理直接推广到所有器件。对稳定性的判断，需要兼顾材料变化与器件输出：既观察老化前后的结构或光学特征，也检查电压、电流和填充因子的变化。对于光照、温度与偏压共同作用下的失效，单一条件下的结果更适合作为机制线索，而不是完整的寿命证明。</p>
<h3>4. 器件封装与运行环境</h3>
<p>封装主要通过阻隔外界水分和氧气，减缓环境因素对器件的影响。封装材料还需要与器件各层保持化学兼容，并兼顾透光性、电绝缘性和热机械性能。封装过程本身引入的热量与应力也应纳入评估，因此，材料选择和加工方式需要与器件结构共同设计。</p>
<p>封装并不意味着所有退化路径都被消除。即使限制了外界水氧进入，光照、温度和电学工作条件仍可能影响器件内部的稳定性。本综述认为，从小面积器件走向组件时，应把吸收层、界面、电极和封装作为一个整体评估，检查局部材料改进能否在更接近实际运行的条件下继续发挥作用。</p>
<h3>5. 稳定性测试与结果的可比性</h3>
<p>稳定性结果应与测试条件一起阅读。报告中需要明确器件是否封装、所处气氛、温湿度、光照条件和电学工作状态，并说明性能测量方式。暗态储存、持续光照和实际运行考察的是不同情境，不能只根据测试持续时间对不同器件作简单排名。</p>
<p>基于 ISOS 程序的稳定性评价共识，为测试和报告提供了共同框架。综述整理宜优先比较条件接近、报告完整的结果；对条件不同的研究，则分别说明其适用范围。加速老化结果有助于发现失效路径，但将其换算为户外使用寿命，还需要额外的模型和实证支持。</p>
<h3>6. 总结与展望</h3>
<p>综合上述讨论，钙钛矿太阳能电池的稳定性提升需要材料、界面、器件结构与封装之间的协同。界面处理着重改善接触区域，组分与添加剂策略针对吸收层内部的问题，封装则提供环境防护。评价这些方法时，应回到具体失效机制，判断被改善的环节以及仍然存在的限制。</p>
<p>后续研究值得关注的重点，是把性能保持与失效原因建立更清晰的联系，并在一致、透明的测试条件下验证改进。本综述的总体判断是：可靠的稳定性证据，应同时回答“在什么条件下有效”“改善了哪一种失效”以及“能否在器件和组件层面重复验证”。在这一基础上，实验室中的材料进展才能逐步转化为可信的长期运行能力。</p>`;
document.querySelector('article').insertAdjacentHTML('beforeend', continuation);

// Keep wheel scrolling usable in the blank margins surrounding the article.
const readingRegion = document.querySelector('.reading');
document.querySelector('main').addEventListener('wheel', (event) => {
  if (event.ctrlKey || event.target.closest('.reading') || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
  const scale = Number(document.documentElement.style.getPropertyValue('--scale')) || 1;
  const unit = event.deltaMode === 1 ? 32 : event.deltaMode === 2 ? readingRegion.clientHeight : 1 / scale;
  const next = Math.max(0, Math.min(readingRegion.scrollHeight - readingRegion.clientHeight, readingRegion.scrollTop + event.deltaY * unit));
  if (next !== readingRegion.scrollTop) {
    event.preventDefault();
    readingRegion.scrollTop = next;
  }
}, { passive: false });

// Source metadata transcribed from the supplied hover design (Frame 10).
const sourcePreviewData = {
  title: '钙钛矿太阳能电池中的离子迁移',
  authors: '王继飞 等 ·《物理学报》· 2019 · DOI: 10.7498/aps.68.20190853',
  summary: '该综述系统分析了卤化物钙钛矿中的离子迁移机制及其对材料性能和器件稳定性的影响。研究指出，钙钛矿材料的软晶格结构与较低的缺陷形成能是离子迁移的重要内在原因，离子迁移会进一步影响器件性能与长期稳定性。文章还总结了通过组分调控、器件结构优化、添加剂及应变工程等方式抑制离子迁移的研究策略，为理解钙钛矿太阳能电池的性能衰减及探索稳定性提升路径提供参考。'
};
const sourceTrigger = document.querySelector('.citation[data-reference="1"]');
const sourcePreview = document.createElement('aside');
sourcePreview.className = 'source-preview';
sourcePreview.id = 'source-preview-1';
sourcePreview.setAttribute('aria-label', '文献来源预览');
sourcePreview.setAttribute('aria-hidden', 'true');
sourcePreview.innerHTML = '<h4></h4><p class="source-authors"></p><div class="source-summary-box" tabindex="0" role="region" aria-label="文献摘要"><p class="source-summary"></p></div><span class="source-original">查看原文</span>';
sourcePreview.querySelector('h4').textContent = sourcePreviewData.title;
sourcePreview.querySelector('.source-authors').textContent = sourcePreviewData.authors;
sourcePreview.querySelector('.source-summary').textContent = sourcePreviewData.summary;
document.body.append(sourcePreview);
sourceTrigger.tabIndex = 0;
sourceTrigger.setAttribute('aria-controls', sourcePreview.id);
sourceTrigger.setAttribute('aria-expanded', 'false');
let previewHideTimer;
function positionSourcePreview() {
  const scale = Math.min(innerWidth / 2048, (innerWidth - 24) / 620);
  sourcePreview.style.transform = `scale(${scale})`;
  const anchor = sourceTrigger.getBoundingClientRect();
  const article = document.querySelector('article').getBoundingClientRect();
  const width = sourcePreview.offsetWidth * scale;
  const height = sourcePreview.offsetHeight * scale;
  let left = article.left + 235 * scale;
  let top = anchor.bottom + 5 * scale;
  if (top + height > innerHeight - 12) top = anchor.top - height - 9 * scale;
  left = Math.max(12, Math.min(left, innerWidth - width - 12));
  top = Math.max(12, Math.min(top, innerHeight - height - 12));
  sourcePreview.style.left = `${left}px`;
  sourcePreview.style.top = `${top}px`;
}
function openSourcePreview() {
  if (document.querySelector('.canvas').classList.contains('source-open')) return;
  clearTimeout(previewHideTimer);
  positionSourcePreview();
  sourcePreview.classList.add('is-open');
  sourcePreview.setAttribute('aria-hidden', 'false');
  sourceTrigger.setAttribute('aria-expanded', 'true');
}
function closeSourcePreview() {
  clearTimeout(previewHideTimer);
  sourcePreview.classList.remove('is-open');
  sourcePreview.setAttribute('aria-hidden', 'true');
  sourceTrigger.setAttribute('aria-expanded', 'false');
}
function schedulePreviewClose() {
  clearTimeout(previewHideTimer);
  previewHideTimer = setTimeout(closeSourcePreview, 220);
}
sourceTrigger.addEventListener('mouseenter', openSourcePreview);
sourceTrigger.addEventListener('mouseleave', schedulePreviewClose);
sourceTrigger.addEventListener('focus', openSourcePreview);
sourceTrigger.addEventListener('blur', schedulePreviewClose);
sourcePreview.addEventListener('mouseenter', () => clearTimeout(previewHideTimer));
sourcePreview.addEventListener('mouseleave', schedulePreviewClose);
readingRegion.addEventListener('scroll', closeSourcePreview, { passive: true });
addEventListener('resize', closeSourcePreview);
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeSourcePreview(); });
sourcePreview.addEventListener('focusin', () => clearTimeout(previewHideTimer));
sourcePreview.addEventListener('focusout', event => {
  if (!sourcePreview.contains(event.relatedTarget)) schedulePreviewClose();
});

const sourcePanel = document.createElement('aside');
sourcePanel.className = 'source-panel';
sourcePanel.id = 'source-detail';
sourcePanel.setAttribute('aria-label', '文献原文');
sourcePanel.setAttribute('aria-hidden', 'true');
sourcePanel.inert = true;
sourcePanel.innerHTML = `
<div class="source-panel-toolbar"><div class="source-tab"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 2h9l5 5v14H4V4a2 2 0 0 1 2-2zm8 1v6h5M7 12v2h10v-2zm0 5v2h10v-2z"/></svg><span>钙钛矿太阳能电池中的离子迁移</span><button class="source-close" aria-label="关闭文献原文">×</button></div><span class="source-toolbar-plus" aria-hidden="true">＋</span><div class="source-window-icons">${icon('save')}${icon('share')}${icon('panel')}</div></div>
<div class="source-document" tabindex="0" aria-label="文献内容">
<div class="journal-banner"><div class="journal-name">物理学报<small>Acta Physica Sinica</small></div><div class="journal-actions" aria-hidden="true"><span class="journal-menu">☰</span><span class="journal-search"></span></div></div><div class="journal-strip"></div>
<div class="journal-main"><div class="journal-citation"><p><strong>引用本文:</strong> 王继飞, 林东旭, 袁永波. 有机金属卤化物钙钛矿中的离子迁移现象及其研究进展. 物理学报, 2019, 68(15): 158801.<br>DOI: <span class="teal">10.7498/aps.68.20190853</span> ▧</p><p>Wang Ji-Fei, Lin Dong-Xu, Yuan Yong-Bo. Recent progress of ion migration in organometal halide perovskite. <em>Acta Physica Sinica</em>, 2019, 68(15): 158801. DOI: <span class="teal">10.7498/aps.68.20190853</span> ▧</p></div>
<div class="journal-topic">专题：钙钛矿光电器件与物理</div>
<h2>钙钛矿太阳能电池中的离子迁移</h2><p class="journal-author">王继飞<sup>1,2</sup>,&nbsp; 林东旭<sup>1</sup>,&nbsp; 袁永波<sup>1</sup>, ▣, ✉</p><p class="journal-more">更多 +</p><p class="journal-details">物理学报, 2019, <span class="teal">68(15)</span>: 158801. DOI: <span class="teal">10.7498/aps.68.20190853</span><br>CSTR: <span class="teal">32037.14.aps.68.20190853</span></p>
<h2 class="english-title">Recent progress of ion migration in organometal halide perovskite</h2><p class="journal-author">Wang Ji-Fei<sup>1,2</sup>,&nbsp; Lin Dong-Xu<sup>1</sup>,&nbsp; Yuan Yong-Bo<sup>1</sup>, ▣, ✉</p><p class="journal-more">More +</p><p class="journal-details">Acta Phys. Sin., 2019, <span class="teal">68(15)</span>: 158801. DOI: <span class="teal">10.7498/aps.68.20190853</span><br>CSTR: <span class="teal">32037.14.aps.68.20190853</span></p></div>
<section class="journal-abstract"><h3 class="journal-abstract-heading">摘要<span aria-hidden="true">−</span></h3><p>近年来, 卤化物钙钛矿太阳能电池由于其诸多技术优势引起了普遍的关注, 其效率在几年内达到了认证的24.2%, 接近目前已经民用化的晶体硅太阳能电池. 卤化物钙钛矿在外加电场作用下除了具有电荷传输能力外, 还表现出离子迁移现象, 是一种兼具半导体和离子导体特性的材料. 离子迁移不仅直接改变了钙钛矿晶体的局部化学配比, 而且会对材料的电学性质乃至相应器件的工作机理产生极大影响. 本文总结了离子迁移的形成机制、基本特征及其对器件工作过程的影响(如可翻转的光伏现象、电流迟滞现象等), 介绍了一些关于抑制离子迁移的最新研究进展. 目前关于钙钛矿材料中的离子迁移现象的认识仍不全面, 深入理解卤化物钙钛矿材料中的离子迁移现象对推动钙钛矿太阳能电池的发展和应用十分重要.</p><p class="journal-keywords"><strong>关键词:</strong> <u>钙钛矿</u> / <u>太阳能电池</u> / <u>离子迁移</u> / <u>电流迟滞</u> / <u>稳定性</u></p></section></div>`;
document.querySelector('.canvas').append(sourcePanel);
const originalText = sourcePreview.querySelector('.source-original');
const originalButton = document.createElement('button');
originalButton.className = originalText.className;
originalButton.textContent = originalText.textContent;
originalButton.type = 'button';
originalButton.setAttribute('aria-controls', sourcePanel.id);
originalText.replaceWith(originalButton);
let savedReadingScroll = 0;
function openSourcePanel() {
  closeSourcePreview();
  const canvas = document.querySelector('.canvas');
  if (!canvas.classList.contains('source-open')) {
    savedReadingScroll = readingRegion.scrollTop;
    canvas.classList.add('source-open');
    sourcePanel.querySelector('.source-document').scrollTop = 0;
  }
  sourcePanel.inert = false;
  sourcePanel.setAttribute('aria-hidden', 'false');
  sourcePanel.querySelector('.source-close').focus({preventScroll:true});
}
function closeSourcePanel() {
  document.querySelector('.canvas').classList.remove('source-open');
  sourcePanel.setAttribute('aria-hidden', 'true');
  sourcePanel.inert = true;
  sourceTrigger.focus({preventScroll:true});
  closeSourcePreview();
  readingRegion.scrollTop = savedReadingScroll;
}
sourceTrigger.addEventListener('click', () => {
  if (!getSelection().toString()) openSourcePanel();
});
sourceTrigger.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openSourcePanel(); }
});
originalButton.addEventListener('click', openSourcePanel);
sourcePanel.querySelector('.source-close').addEventListener('click', closeSourcePanel);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && document.querySelector('.canvas').classList.contains('source-open')) closeSourcePanel();
});

// The top-right panel control only closes the source pane; it never opens it.
const panelCloseIcon = sourcePanel.querySelector('.source-window-icons > .icon:last-child');
const panelCloseButton = document.createElement('button');
panelCloseButton.type = 'button';
panelCloseButton.className = 'source-panel-close-icon';
panelCloseButton.setAttribute('aria-label', '收起来源侧边栏');
panelCloseIcon.replaceWith(panelCloseButton);
panelCloseButton.append(panelCloseIcon);
panelCloseButton.addEventListener('click', closeSourcePanel);

// Lower source-page content transcribed from the supplied scrolling reference.
sourcePanel.querySelector('.source-document').insertAdjacentHTML('beforeend', `
<section class="source-english-abstract"><h3>Abstract<span>−</span></h3><div class="source-english-copy"><p>In recent years, metal halide perovskite solar cells have attracted widespread attention due to their unique technological superiority. Remarkable progress of device performance has been achieved in last few years. The certified efficiency has reached 24.2%, which is close to the efficiency of the commercial crystalline silicon solar cells. Halide perovskite is a kind of semiconductor and ionic conductor material, which not only has the ability to transfer charges, but also exhibits the phenomenon of ion migration under an external electric field. Ion migration can directly change the local chemical ratio of perovskite crystals, and can also greatly affect the electrical properties of materials and the working mechanisms of corresponding devices. In this review, the formation mechanism, basic characteristics and effects of ion migration on the working mechanism of the device (such as giant switchable photovoltaic phenomenon, current hysteresis, etc.) are summarized, and then some recent advances in the suppression of ion migration are introduced. Since there exist still many doubts about ion migration in perovskite materials, it is very important to understand the phenomenon of ion migration in perovskite materials in order to promote the development and application of perovskite solar cells.</p><div class="source-keyword-line"><strong>Keywords:</strong> <u>perovskite</u> / &nbsp;<u>solar cells</u> / &nbsp;<u>ion migration</u> / &nbsp;<u>hysteresis</u> / &nbsp;<u>stability</u></div><strong class="source-pacs-title">PACS:</strong><div class="source-pacs"><div><span>72.40.+w</span> &nbsp;(Photoconduction and photovoltaic effects)</div><div><span>73.50.Pz</span> &nbsp;(Photoconduction and photovoltaic effects)</div><div><span>88.40.H-</span> &nbsp;(Solar cells (photovoltaics))</div><div><span>85.60.-q</span> &nbsp;(Optoelectronic devices)</div></div></div></section>
<section class="source-toc"><h3>文章全文 <span class="translation-label">Full English Text (iFLYTEK Translation)</span><span class="section-symbol">−</span></h3><ol><li>引　言</li><li>卤化物钙钛矿中的离子迁移</li><li>离子迁移的影响</li><li>离子迁移的测试方法</li><li>离子迁移的抑制</li><li>总结与展望</li></ol></section>
<section class="source-collapsed"><h3>参考文献<span>＋</span></h3></section><section class="source-collapsed"><h3>施引文献</h3></section>
<div class="source-issue">第68卷，第15期 - 2019年08月05日</div>
<div class="source-metrics"><p><strong>文章访问数:</strong> <span>37038</span></p><p><strong>PDF下载量:</strong> <span>3387</span></p></div>
<div class="source-dates"><p><strong>收稿日期:</strong> <span>2019-06-01</span></p><p><strong>修回日期:</strong> <span>2019-06-28</span></p><p><strong>上网日期:</strong> <span>2019-08-01</span></p><p><strong>刊出日期:</strong> <span>2019-08-05</span></p></div>
<footer class="source-footer"><div class="source-footer-grid"><section><h4>▎作者中心</h4><div class="source-footer-links"><div>投稿须知</div><div>稿件处理流程</div><div>投稿查稿</div><div>常见问题</div><div>版权协议</div><div>特别约稿和绿色通道</div><div>相关资料下载</div><div></div><div class="wide">论文关联数据汇交说明</div></div></section><div><section><h4>▎审稿中心</h4><div class="source-footer-links"><div>审稿政策</div><div>编委登录</div><div>审稿常见问题</div><div>主编登录</div><div>专家登录</div><div>编辑登录</div></div></section><section><h4>▎关于期刊</h4><div class="source-footer-links"><div>当期目录</div><div>专题</div><div>过刊浏览</div><div>期刊简介</div><div>亮点文章</div><div>学术诚信声明</div></div></section></div><section><h4>▎关于我们</h4><div class="source-footer-links single"><div>编委会</div><div>青年编委会</div><div>编辑部</div><div>联系方式</div></div></section></div></footer>`);

// Local preview: citation highlighting affects prose only, never the reference badge.
const highlightControl = document.createElement('button');
highlightControl.type = 'button';
highlightControl.className = 'citation-highlight-toggle';
highlightControl.setAttribute('role', 'switch');
highlightControl.setAttribute('aria-checked', 'true');
highlightControl.setAttribute('aria-label', '高亮引用');
highlightControl.innerHTML = '<span>高亮引用</span><span class="highlight-switch-track" aria-hidden="true"><span></span></span>';
document.querySelector('main header .tools').prepend(highlightControl);
highlightControl.addEventListener('click', () => {
  const enabled = highlightControl.getAttribute('aria-checked') !== 'true';
  highlightControl.setAttribute('aria-checked', String(enabled));
  document.querySelector('.canvas').classList.toggle('citation-highlight-off', !enabled);
});
