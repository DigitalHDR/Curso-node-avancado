const fs = require('fs')

fs.unlink('arquivo.txt', function (err) {
    if(err) {
        console.log(err)
        return
    }

    console.log('arquivo removido')
})

//! o arquivo deve existir no caso na mesma
//! pasta que especifica o caminho para ser excluido 