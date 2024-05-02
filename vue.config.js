// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// cli가 이 파일을 읽어서 build를 할 때 참고하게 됨
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-practice" : "/",
  outputDir: "docs",
};
