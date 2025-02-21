import { ChalkInstance } from 'chalk';
import ora, { spinners } from 'ora';

export default function animatedDots(
	initText: string,
	chalk: ChalkInstance,
	successText: string
) {
	const spinner = ora({
		text: chalk(initText),
		spinner: {
			interval: 500,
			frames: spinners.dots.frames,
		},
	}).start();

	setTimeout(() => {
		spinner.succeed(chalk(successText));
	}, 5000);
	return true;
}
