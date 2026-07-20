# 王超凡 · 个人主页

这是一个部署在 Netlify 的静态个人网站。手机和电脑都可以访问。

## 最常用：在 GitHub 更新网站

1. 打开仓库中的 [`content.js`](./content.js)。
2. 点击右上角铅笔图标（Edit）。
3. 修改想要更新的文字、数据、经历、项目或联系方式。
4. 点击 **Commit changes** 保存。
5. 等待约 1–2 分钟，Netlify 会自动发布新版本。

所有日常文字都在 `content.js` 中；无需改动 `index.html` 或 `styles.css`。

## 更换简历与微信二维码

- 新简历：在 GitHub 上传新的 PDF，并将其命名为 `resume.pdf`（选择覆盖原文件）。
- 微信二维码：上传图片到仓库根目录，例如 `wechat-qr.png`；然后在 `content.js` 的 `contact` 区域，将 `image: "portrait.jpg"` 改成 `image: "wechat-qr.png"`。
- 手机号：在 `content.js` 的 `contact` 区域，把 `phone: "待补充手机号"` 改成你的真实号码。

> 手机号、二维码等信息会公开显示在网站上，请只填写愿意公开的信息。

## 文件说明

- `content.js`：唯一需要日常编辑的内容文件。
- `index.html`：页面结构。
- `styles.css`：视觉样式和手机适配。
- `resume.pdf`：访客下载的简历。

## Netlify 发布

Netlify 已配置为从 `main` 分支发布：推送或在 GitHub 提交到 `main` 后会自动更新正式网站。其他分支和 Pull Request 会生成预览链接，供发布前检查。
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
