/* eslint-disable no-console */

const chalk = require('chalk')
const ip = require('ip')

const divider = chalk.gray('\n-----------------------------------')

/**
 * Logger middleware
 */
const logger = {
  error: err => {
    console.error(chalk.red(err))
  },

  appStarted: (port, host) => {
    console.log(`Server started!`)
    console.log(`
            ${chalk.bold('Access URLs:')}${divider}
            Localhost: ${chalk.magenta(`http://${host}:${port}`)}
             LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}
            \n  ${divider}
          ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
     `)
  }
}

module.exports = logger
