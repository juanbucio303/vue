module.exports = {
  devServer: {
    compress: true,
    disableHostCheck: true,
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/vue/' //nombre de tu proyecto GitHub
      : '/'
  }