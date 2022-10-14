const fs = require('fs')

fs.readFile('arquivo.txt', 'utf-8', (err,data) => {
    if(err) {
        console.log(err)
    }

    console.log(data)
})

//! le um arquivo no sistema, o arquivo tem que existir
//! se não da erro
//? retorna lucas
