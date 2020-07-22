module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    },
    {
      test: /\.pug$/,
      oneOf: [
        // this applies to pug imports inside JavaScript
        {
          exclude: /\.pug$/,
          use: ['raw-loader', 'pug-plain-loader']
        },
        // this applies to <template lang="pug"> in Vue components
        {
          use: ['pug-plain-loader']
        }
      ]
    }]
  }
};
