import chalk from 'chalk';
import { typeWriter } from '../utils/typeWriter';
import { blinkingCursor } from '../utils/blinkingCursor';

export default function matrix() {
	// Clear the console first
	console.clear();

	const characters = '0123456789';
	const columns = process.stdout.columns || 80;

	const interval = setInterval(() => {
		let line = '';
		for (let i = 0; i < columns; i++) {
			const random = Math.floor(Math.random() * characters.length);
			line += chalk.green(characters[random]) + ' ';
		}
		console.log(line);
	}, 50);

	// Stop after 10 seconds
	setTimeout(() => {
		clearInterval(interval);
	}, 10000);

	setTimeout(async () => {
		await blinkingCursor(5000, chalk.green); // Blink for 2 seconds
		await typeWriter(chalk.bold.green('Wake up, Neo...'));
		await blinkingCursor(3000, chalk.green); // Blink for 2 seconds
		await typeWriter(chalk.bold.green('Follow the white rabbit...'));
	}, 11000);
}
