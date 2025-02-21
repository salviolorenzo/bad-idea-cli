import { ChalkInstance } from 'chalk';

export function blinkingCursor(
	duration = 5000,
	chalk: ChalkInstance
): Promise<void> {
	return new Promise((resolve) => {
		let visible = true;
		const cursor = '▋';

		const interval = setInterval(() => {
			process.stdout.write('\r');
			process.stdout.write(visible ? chalk(cursor) : ' ');
			visible = !visible;
		}, 500);

		setTimeout(() => {
			clearInterval(interval);
			process.stdout.write('\r '); // Clear the cursor
			resolve();
		}, duration);
	});
}
