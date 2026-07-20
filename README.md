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
- 微信二维码：当前使用的是 `wechat-qr.jpg`。后续上传新图片后，在 `content.js` 的 `contact` 区域把 `image` 改为新文件名即可。
- 手机号：在 `content.js` 的 `contact` 区域修改 `phone` 的号码即可。

> 手机号、二维码等信息会公开显示在网站上，请只填写愿意公开的信息。

## 新增项目经历

在 `content.js` 中找到 `projects: [`，在数组中复制一条项目内容并修改文字。例如：

```js
{ tag: "PROJECT TYPE", title: "项目名称", copy: "项目背景、你的职责和成果简介。" },
```

放在最后一条项目的后面时，请先给前一条末尾补上英文逗号。提交后等待约 1–2 分钟，项目卡片会自动出现在网站中。

## 文件说明

- `content.js`：唯一需要日常编辑的内容文件。
- `index.html`：页面结构。
- `styles.css`：视觉样式和手机适配。
- `resume.pdf`：访客下载的简历。

## Netlify 发布

Netlify 已配置为从 `main` 分支发布：推送或在 GitHub 提交到 `main` 后会自动更新正式网站。其他分支和 Pull Request 会生成预览链接，供发布前检查。
