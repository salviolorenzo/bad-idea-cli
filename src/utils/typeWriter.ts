export function typeWriter(
	text: string,
	speed = 50,
	newLine = true
): Promise<void> {
	return new Promise((resolve) => {
		let i = 0;
		const timer = setInterval(() => {
			if (i < text.length) {
				process.stdout.write(text.charAt(i));
				i++;
			} else {
				clearInterval(timer);
				if (newLine) {
					process.stdout.write('\n');
				}
				resolve();
			}
		}, speed);
	});
}
