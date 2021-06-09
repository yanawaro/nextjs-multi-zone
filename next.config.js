const withPlugins = require('next-compose-plugins')
const withTM = require("next-transpile-modules")(["components"]);

module.exports = withPlugins([[withTM]], {
  i18n: {
    locales: ['th', 'en'],
    defaultLocale: 'th',
    localeDetection: false
  }
})
