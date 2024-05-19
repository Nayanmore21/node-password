import chalk from 'chalk'
import { program } from 'commander'
const log=console.log
import createPassword from './utils/createPassword.js'

program.version('1.0.0').description('Simple Password Generator')

program
.option('-l,--length <number>','length of password','8')
.option('-s,--save','save passwords to passwords.txt')
.option('-nn,--no-numbers','remove numbers')
.option('-ns,--no-symbols','remove symbols')
.parse()

const {length,save,numbers,symbols}=program.opts()


//get generated password
const generatedPassword=createPassword(length,numbers,symbols)

//output generated
log(chalk.blue('Generated password:') + chalk.yellow(chalk.bold(generatedPassword)))