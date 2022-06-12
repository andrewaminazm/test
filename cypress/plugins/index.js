/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  
}
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on, config) => {
  on('task', {downloadFile})
}

const fs = require('fs');
  const autoRecord = require('cypress-autorecord/plugin');
  
  module.exports = (on, config) => {
    autoRecord(on, config, fs);
  };
  
  const mysql = require('mysql')
  // the connection strings for different databases could
  // come from a config file, or from environment variables
  const connections = {
    stagingA: {
      host: 'remotemysql.com',
      user: 'oYoBcS6OUX',
      password: 'AGlT2OwtTy',
      database: 'oYoBcS6OUX',
    }
  }
  
  // querying the database from Node
  function queryDB(connectionInfo, query) {
    const connection = mysql.createConnection(connectionInfo)
  
    connection.connect()
  
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          return reject(error)
        }
  
        connection.end()
  
        return resolve(results)
      })
    })
  }
  module.exports = (on, config) => {
    on('task', {
      // destructure the argument into the individual fields
      queryDatabase({ dbName, query }) {
        const connectionInfo = connections[dbName]
  
        if (!connectionInfo) {
          throw new Error(`Do not have DB connection under name ${dbName}`)
        }
  
        return queryDB(connectionInfo, query)
      },
    })
  }

require('@applitools/eyes-cypress')(module);
