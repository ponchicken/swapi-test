module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
  ? '/swapi-test/'
  : '/',
  css: {
    sourceMap: true
  },
  devServer: {
    port: 8009
  }
}