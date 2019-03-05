const path = require('path')
const {
  addBabelPlugin,
  addDecoratorsLegacy,
  addWebpackAlias,
  useEslintRc
} = require('customize-cra')

const resolve = function (dir) {
  return path.resolve(__dirname, 'src', dir)
}

/**
 * `react-app-rewire-hot-loader` https://www.npmjs.com/package/react-app-rewire-hot-loader
 */
const rewireHotLoader = (config, env) => {
  if (env === 'production') {
    return config
  }
  // Find a rule which contains eslint-loader
  const condition = u => typeof u === 'object' && u.loader && u.loader.includes('eslint-loader')
  const rule = config.module.rules.find(rule => rule.use && rule.use.some(condition))
  if (rule) {
    const use = rule.use.find(condition)
    if (use) {
      // Inject the option for eslint-loader
      use.options.emitWarning = true
    }
  }
  // If in development, add 'react-hot-loader/babel' to babel plugins.
  return addBabelPlugin('react-hot-loader/babel')(config)
}

/**
 * 修改默认配置
 */
module.exports = function (config, env) {
  // 开发模式使用react-hot-loader
  rewireHotLoader(config, env)

  // 使用自定义.eslintrc
  useEslintRc('./.eslintrc')(config)

  // 装饰器，主要用于mobx
  addDecoratorsLegacy()(config)

  // 别名
  addWebpackAlias({
    '@src': resolve(''),
    '@api': resolve('api'),
    '@store': resolve('store'),
    '@routes': resolve('routes'),
    '@pages': resolve('pages'),
    '@layouts': resolve('layouts'),
    '@components': resolve('components'),
    '@styles': resolve('assets/styles'),
    '@images': resolve('assets/images')
  })(config)

  // 返回config
  return config
}

