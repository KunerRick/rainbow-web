module.exports = {
    devServer: {
        proxy: {
          '/rb': {
            target: 'http://localhost:9090',
            ws: true,
            changeOrigin: true,
            pathRewrite:{
                '^/rb':''
            }
          }
        }
    }
}