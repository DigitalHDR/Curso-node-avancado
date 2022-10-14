const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question('qual a sua linguagem prefirida? ', language => {
    if(language === 'html') {
        console.log('isso nem é linguagem')
    } else {
        console.log(`A minha linguagem preferida é: ${language}`)
    }
    readline.close()
})
