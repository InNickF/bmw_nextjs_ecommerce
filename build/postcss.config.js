const atImport = require('postcss-import')
const clean = require('postcss-clean')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [postcssPresetEnv(), atImport(), clean()]
}
