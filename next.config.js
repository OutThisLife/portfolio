module.exports = {
  webpack (c) {
    c.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.(css|scss)/,
        use: ['babel-loader', 'raw-loader']
      }
    )

    return c
  },

  exportPathMap () {
    return {
      '/': { page: '/' }
    }
  }
}