import chalk from 'chalk';
import { typeWriter } from '../utils/typeWriter';

export default function selfDestruct() {
	console.log(chalk.red('Initializing self-destruct sequence...'));
	setTimeout(() => {
		console.log(chalk.red('Self-destruct sequence initiated...'));
	}, 1000);

	setTimeout(() => {
		let time = 10;
		const interval = setInterval(async () => {
			if (time > 0) {
				console.log(chalk.red(`Self-destruct in ${time} seconds...`));
			}
			time--;
			if (time < -1) {
				clearInterval(interval);
				await typeWriter(chalk.bold.red('Just kidding. Or am I?'));
				setTimeout(() => {
					console.log(`
          BOOM! 💥
          `);
				}, 1000);
				setTimeout(async () => {
					await typeWriter(chalk.bold.red('Gotcha!'));
				}, 2000);
			}
		}, 1000);
	}, 1000);
}
