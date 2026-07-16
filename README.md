# 王超凡 · 个人主页

这是一个纯静态网站，可直接部署到 GitHub Pages、Cloudflare Pages 或 Vercel。

## 本地预览

在此目录启动任意静态服务器即可，例如：

```bash
npx serve .
```

## 更新内容

主要文字目前集中在 `index.html` 的各个 section 中；联系区域的图片目前使用简历中的证件照，收到微信二维码后将 `portrait.jpg` 替换即可，简历替换 `resume.pdf`。后续可把内容迁移到 `content.js` 或 CMS，无需改动页面结构。

## 部署

将整个文件夹推送到 GitHub，在 Vercel/Cloudflare Pages 中导入仓库，Framework 选择 **Other / Static**，构建命令留空，输出目录填 `/`。部署后会获得公开网址。
