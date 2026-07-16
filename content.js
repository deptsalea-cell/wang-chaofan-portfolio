// 网站内容集中维护于此。更新文字时可直接修改 index.html；本文件预留给后续接入 CMS/JSON。
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>window.scrollTo({top:document.querySelector(link.getAttribute('href')).offsetTop-70,behavior:'smooth'})));
