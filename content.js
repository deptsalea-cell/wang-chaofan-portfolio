/*
 * 网站内容编辑区
 * 在 GitHub 网页中只需编辑本文件并点击 “Commit changes”，Netlify 会自动更新网站。
 * 新增经历、项目或数据时，复制同类的 { ... } 内容块即可。
 */
const portfolioContent = {
  profile: {
    name: "王超凡",
    availability: "OPEN TO OPPORTUNITIES · 深圳，中国",
    role: "门店运营 / 销售管理 / 团队带教",
    location: "SHENZHEN · CHINA",
    heroTitle: "让每一次现场，<br><em>成为增长的起点。</em>",
    heroCopy: "我是王超凡，一名将体验、数据与人连接起来的门店运营者。相信清晰的流程与真诚的服务，都能转化为可持续的增长。",
    aboutTitle: "工科逻辑，<br>一线温度。",
    aboutCopy: "软件工程本科毕业，曾在教育、新媒体和消费零售一线工作。我擅长把复杂问题拆解成清晰 SOP，用数据复盘，把每一次服务体验做成可复制的结果。"
  },
  stats: [
    { value: "95%", label: "售后问题解决率" },
    { value: "30%", label: "培训周期缩短" },
    { value: "20%", label: "门店 GMV 同比增长" }
  ],
  experience: [
    { period: "2025.10 — 2026.05", company: "小米之家", title: "门店店长", summary: "负责门店销售目标、日常营运、团队带教与客户服务闭环。整合线上社群与线下客流，推动线上成交额占比达 15%，月度 GMV 同比增长 20%。", highlights: ["主导全流程 SOP，培训周期缩短 30%，成交率提升约 15%", "建立客诉分级响应机制，售后问题解决率达 95%", "追踪进店量、连带率等核心数据，任职期间每日账目零差错"] },
    { period: "2023.07 — 2025.07", company: "滑县裳华高级中学", title: "教师兼新媒体运营", summary: "面向学生及家长进行系统化讲解、直播答疑和高频互动，建立高信任客情关系；统筹节日与大型仪式的线上线下一体化宣发及现场落地。", highlights: ["将复杂概念转化为通俗表达，沉淀公众表达与团队带教能力", "运用痛点场景化营销与竞品分析，提升精准转化", "负责物料、协作与现场秩序，多任务并行完成大型活动"] }
  ],
  projects: [
    { tag: "RETAIL OPS", title: "门店增长系统", copy: "从目标拆解、客流转化到售后复购，搭建可执行的门店运营闭环。" },
    { tag: "SOP / TRAINING", title: "标准化带教体系", copy: "以现场观察和数据复盘为基础，让新员工更快理解产品、服务与销售。" },
    { tag: "CONTENT / EVENT", title: "内容与活动运营", copy: "从直播答疑到节点活动，把内容表达转化为信任与行动。" }
  ],
  education: { school: "武汉晴川学院", detail: "软件工程 · 本科 · 2023.06", copy: "工科训练让我保持清晰的逻辑与快速学习能力，能够熟练使用运营后台、音视频工具与 AI 提效工具。" },
  contact: {
    copy: "如果你正在寻找一位能把现场、团队与结果连接起来的人，欢迎和我聊聊。",
    email: "707132865@qq.com",
    phone: "13285242426",
    image: "wechat-qr.jpg",
    imageAlt: "王超凡的微信二维码",
    imageNote: "微信二维码：扫码添加我为好友。",
    resume: "resume.pdf"
  }
};

const $ = (selector) => document.querySelector(selector);
const setText = (selector, value) => { const node = $(selector); if (node) node.textContent = value; };
const setHtml = (selector, value) => { const node = $(selector); if (node) node.innerHTML = value; };
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));

setText("[data-site-name]", portfolioContent.profile.name);
document.querySelectorAll("[data-site-name]").forEach((node) => { node.textContent = portfolioContent.profile.name; });
setText("[data-availability]", portfolioContent.profile.availability);
setText("[data-location]", portfolioContent.profile.location);
setText("[data-role]", portfolioContent.profile.role);
setHtml("[data-hero-title]", portfolioContent.profile.heroTitle);
setText("[data-hero-copy]", portfolioContent.profile.heroCopy);
setHtml("[data-about-title]", portfolioContent.profile.aboutTitle);
setText("[data-about-copy]", portfolioContent.profile.aboutCopy);
setText("[data-year]", new Date().getFullYear());

$("[data-stats]").innerHTML = portfolioContent.stats.map((item) => `<article><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></article>`).join("");
$("[data-experience]").innerHTML = portfolioContent.experience.map((item, index) => `<article class="timeline-item"><p class="period">${escapeHtml(item.period)}</p><div class="timeline-copy"><p class="number">0${index + 1}</p><h3>${escapeHtml(item.company)} <span>／</span> ${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p><ul>${item.highlights.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul></div></article>`).join("");
$("[data-projects]").innerHTML = portfolioContent.projects.map((item, index) => `<article class="project-card"><div class="card-top"><span>${escapeHtml(item.tag)}</span><span>0${index + 1}</span></div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.copy)}</p><span class="card-arrow">↗</span></article>`).join("");
$("[data-education]").innerHTML = `<h2>${escapeHtml(portfolioContent.education.school)}</h2><p class="education-detail">${escapeHtml(portfolioContent.education.detail)}</p><p>${escapeHtml(portfolioContent.education.copy)}</p>`;

setText("[data-contact-copy]", portfolioContent.contact.copy);
setText("[data-email]", portfolioContent.contact.email);
setText("[data-phone]", portfolioContent.contact.phone);
$("[data-email-link]").href = `mailto:${portfolioContent.contact.email}`;
$("[data-phone-link]").href = portfolioContent.contact.phone.includes("待补充") ? "#contact" : `tel:${portfolioContent.contact.phone.replace(/[^+\d]/g, "")}`;
$("[data-contact-image]").src = portfolioContent.contact.image;
$("[data-contact-image]").alt = portfolioContent.contact.imageAlt;
setText("[data-contact-image-note]", portfolioContent.contact.imageNote);
$("[data-resume-link]").href = portfolioContent.contact.resume;

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); }), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
