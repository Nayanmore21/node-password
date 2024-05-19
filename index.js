import { program } from 'commander'


program.version('1.0.0').description('Simple Password Generator')

program.option('-l,--length','length of password').parse()