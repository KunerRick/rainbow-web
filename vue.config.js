module.exports = {
    devServer: {
      disableHostCheck: true,
        proxy: {
          '/rb': {
            target: 'http://localhost:9090',
            changeOrigin: true,
            pathRewrite:{
                '^/rb':''
            }
          },
          '/ws': {
            target: 'http://localhost:6767',
            ws: true,
            changeOrigin: true,
            pathRewrite:{
                '^/ws':''
            }
          }
        }
    }
}