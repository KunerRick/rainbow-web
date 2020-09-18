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
          },
          '/group1': {
            target: 'http://192.168.1.118',
            ws: true,
            changeOrigin: true,
            pathRewrite:{
                '^/group1':'/group1'
            }
          }
        }
    }
}