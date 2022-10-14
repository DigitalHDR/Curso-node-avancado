const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)
// $ node index --nome=lucas
//! { _: [], nome: 'lucas' }

const nome = args['nome']
const profissao = args['desenvolvedor']

console.log(nome)
// $ node index --nome=lucas
// { _: [], nome: 'lucas' }
//! lucas