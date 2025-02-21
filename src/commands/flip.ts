import chalk from 'chalk';

const headsOrTails = Math.random() > 0.5 ? 'heads' : 'tails';
const headsOrTailsOrEdge = Math.random() > 0.2 ? headsOrTails : 'edge';

export default function flip() {
	console.log(chalk.green('Flipping...'));
	const result = headsOrTailsOrEdge;

	switch (result) {
		case 'heads':
			console.log(chalk.green('Heads!'));
			break;
		case 'tails':
			console.log(chalk.green('Tails!'));
			break;
		case 'edge':
			console.log(
				chalk.green('The coin spins... and somehow lands upright. A miracle!')
			);
			break;
	}
}
