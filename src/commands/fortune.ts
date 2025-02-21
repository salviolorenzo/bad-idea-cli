import chalk from 'chalk';
import { fortunes } from '../utils/constants';
import { typeWriter } from '../utils/typeWriter';

export default async function fortune() {
	const index = Math.floor(Math.random() * fortunes.length);

	console.log(chalk.cyanBright('\n✧･ﾟ: *✧･ﾟ:* 🔮 *:･ﾟ✧*:･ﾟ✧\n'));
	console.log(chalk.cyanBright('🌟 Your fortune reveals... 🌟\n'));

	setTimeout(async () => {
		await typeWriter(chalk.bold.blueBright(fortunes[index]));
	}, 1000);
}
