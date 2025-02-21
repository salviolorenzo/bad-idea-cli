#!/usr/bin/env node

import chalk from 'chalk';
import hack from './commands/hack';
import selfDestruct from './commands/selfDestruct';
import flip from './commands/flip';
import rickroll from './commands/rickroll';
import fortune from './commands/fortune';
import { typeWriter } from './utils/typeWriter';
import matrix from './commands/matrix';
import help from './commands/help';

process.removeAllListeners('warning');

const [cmd, ...args] = process.argv.slice(2);

switch (cmd) {
	case '--help':
	case '-h':
		help();
		break;

	case 'version':
	case '-v':
		console.log(chalk.green('Version 1.0.0'));
		break;

	case 'hack':
		hack();
		break;

	case 'self-destruct':
		selfDestruct();
		break;

	case 'flip':
		flip();
		break;

	case 'roulette':
		console.log(chalk.green('Spinning...'));
		break;

	case 'fortune':
		fortune();
		break;

	case 'rickroll':
		rickroll();
		break;

	case 'sudo':
		typeWriter(chalk.bold.green("Nice try, but you're not root."));
		break;

	case 'matrix':
		matrix();
		break;

	case 'uninstall':
		console.log(chalk.green('Uninstalling...'));
		break;

	default:
		console.log(chalk.red('The ' + cmd + ' command is not defined...yet!'));
		console.log(
			chalk.green(
				'Try ' + chalk.bold('bad-idea --help') + ' for more information.'
			)
		);
}
