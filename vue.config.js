module.exports = {
  devServer: {
    host: 'https://juanbucio303.github.io/vue/',
    https: true,
    compress: true,
    disableHostCheck: true,
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/vue/' //nombre de tu proyecto GitHub
      : '/'
  }
