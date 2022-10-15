const inquirer = require('inquirer')

inquirer
  .prompt([
    {
      name: 'p1',
      message: 'qual a primerira nota?',
    },
    {
      name: 'p2',
      message: 'qual a segunda nota?',
    },
  ])
  .then(answer => {
    console.log(answer)
    const media = parseInt(answer.ps1) + parseInt(answer.p2) / 2
    console.log(`a media é ${media}`)
  })
  .catch(err => console.log(err))
