# 🐜 A Next.js template with Ant Design

This project was bootstrapped with [Create Next App](https://github.com/zeit/next.js) and comes with [Ant Design's](https://github.com/ant-design/ant-design) UI Library.

## ✨ Features

- 🌈 Easy to override Ant Design's default styles.
- 🛡 Includes TypeScript support for predictable static types.
- ⚙️ Automatic rebuild and restart when changes are made to Ant Design overrides.

## 🎨 Changing Ant Design's styles

The default Ant Design theme can be modified using the Less file at `./src/styles/antOverrides.less`. You can change this file path in the `next.config.js` file. An example `antOverrides.less` file is shown below.

```less
@import '~antd/dist/antd.less';

@primary-color: #1890ff;               // Primary color for all components
@link-color: #1890ff;                  // Link color
@success-color: #52c41a;               // Success state color
@warning-color: #faad14;               // Warning state color
@error-color: #f5222d;                 // Error state color
@font-size-base: 14px;                 // Main text font size
@text-color: rgba(0, 0, 0, 0.65);      // Main text color
```

The full list of Less variables can be found [here](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less).

#### 🌚 Dark Theme
To use the dark theme, change `@import '~antd/dist/antd.less';` to `@import "~antd/dist/antd.dark.less";`.

## 🛠 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
