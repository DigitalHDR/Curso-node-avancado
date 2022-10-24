// modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

// modulos internos
const fs = require('fs')

operation()

function operation() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você desaja fazer?',
        choices: [
          'Criar Conta',
          'Consultar Saldo',
          'Depositar',
          'Sacar',
          'Sair',
        ],
      },
    ])
    .then(answer => {
      const action = answer['action']

      if (action === 'Criar Conta') {
        createAccount()
      } else if (action === 'Depositar') {
        deposit()
      } else if (action === 'Consultar Saldo') {
      } else if (action === 'Sacar') {
      } else if (action === 'Sair') {
        console.log(chalk.bgBlue.black('obrigado por usar o account'))
        process.exit()
      }
    })
    .catch(err => console.log(err))
}