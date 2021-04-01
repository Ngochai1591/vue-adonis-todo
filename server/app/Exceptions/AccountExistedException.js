'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AccountExistedException extends LogicalException {
  /**
   * Handle this exception by itself
   */

  handle (error, {response}) {
    console.log(error.status)
    console.log(error.message)

    return response.status(error.status).json({
      error: error.message
    })
  }
}

module.exports = AccountExistedException

