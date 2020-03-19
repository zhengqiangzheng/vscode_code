1. 安装包: yarn add @zeit/next-css
2. 创建 next.config.js 配置文件 输入一下配置信息

```
const withCss = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = withCss({});

```

3. 重启服务就可以使用第三方 css
