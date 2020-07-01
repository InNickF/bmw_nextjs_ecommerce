const webpack = require('webpack')
// const offline = require('next-offline')

const { IgnorePlugin } = webpack
const Dotenv = require('dotenv-webpack')

const nextConfig = {
  dontAutoRegisterSw: true,
  webpack: config => {
    const newConfig = Object.assign({}, config)
    newConfig.node = {
      fs: 'empty'
    }
    newConfig.plugins.push(new IgnorePlugin(/^\.\/locale$/, /moment$/))

    newConfig.plugins.push(new Dotenv())

    // Para importar css que los paquetes no lo importen por defecto
    newConfig.module.rules.push(
      {
        test: /\.(css)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.(ttf|eot|png|woff|svg)$/,
        loader: 'file-loader'
      }
    )
    return newConfig
  },
  pageExtensions: ['mdx', 'jsx', 'js']
}


module.exports = nextConfig
