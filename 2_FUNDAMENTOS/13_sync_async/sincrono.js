const fs = require('fs')

console.log('inicio')

fs.writeFileSync('arquivo.txt', 'oi')

console.log('fim')
// $ node index
// inicio
// fim


//? fs.writeFile para fs.writeFileSync muda nesse parte
//? comparação dos dois arquivos dessa pasta dessa aula