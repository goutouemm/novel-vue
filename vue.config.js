const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack")

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
        args[0].title = '浩浩云'
        return args
    })},
  devServer: {
    port: 8080, // 端口
    proxy: {
      '/api': {  //   若请求的前缀不是这个'/api'，那请求就不会走代理服务器
        target: 'http://localhost:10087',  //这里写路径 
        pathRewrite: { '^/api': '' }, //将所有含/api路径的，去掉/api转发给服务器
        ws: true,  //用于支持websocket
        changeOrigin: true   //用于控制请求头中的host值
      },
    }
  },
  	// 配置插件参数
	configureWebpack: {
		plugins: [
			// 配置 jQuery 插件的参数
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
				Popper: ['popper.js', 'default']
			})
		]
	},
})
