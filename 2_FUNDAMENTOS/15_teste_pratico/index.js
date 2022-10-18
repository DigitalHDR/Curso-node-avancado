import inquirer from 'inquirer';
import chalk from 'chalk';

try {
    inquirer.prompt(
        [
            {
                name: "nome",
                message: "Digite seu nome: "
            }, {
                name: "idade",
                message: "Digite a sua idade: "
            }
        ]
    ).then((respostas) => {
        console.log(
            chalk.bgYellow.black(`Seu nome é ${respostas.nome} e sua idade é ${respostas.idade}`)
        )
    })
} catch (e) {
    console.log(e)
}