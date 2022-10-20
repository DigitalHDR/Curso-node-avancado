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
      }
    })
    .catch(err => console.log(err))
}

// create an account
function createAccount() {
  console.log(chalk.bgGreen.black('parabéns por escolher o nosso produto!'))
  console.log(chalk.green('defina as opções da sua conta a seguir'))

  buildAccount()
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'digite um nome para sua conta',
      },
    ])
    .then(answer => {
      const accountName = answer['accountName']

      console.info(accountName)

      if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts')
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black('esta conta já existe, escolha outra nome!')
        )
        buildAccount()
        return
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
          console.log(err)
        }
      )

      console.log(chalk.green('parabéns, sua conta foi criadaa!'))
      operation()
    })
    .catch(err => {
      console.log(err)
    })
}
