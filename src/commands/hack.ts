import chalk from 'chalk';
import animatedDots from '../utils/animatedDots';

export default function hack() {
	animatedDots(
		'Initializing hack.exe',
		chalk.green,
		"You've been granted admin access to the Pentagon!"
	);
}
