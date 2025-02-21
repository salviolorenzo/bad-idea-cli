import chalk from 'chalk';

export default function help() {
	console.log(
		chalk.green(`
  ############################################################
  #                                                          #
  #                      Welcome to the                      #
  #                    Bad Idea CLI                          #
  #                                                          #
  ############################################################

  Available commands:
  - version, -v: Show version number
  - hack: Run hack sequence
  - self-destruct: Initiate self-destruct
  - flip: Flip something
  - roulette: Spin the wheel
  - fortune: Get your fortune
  - rickroll: You know what this does
  - sudo: Try to get root access
  - matrix: Enter the matrix
  - uninstall: Uninstall your OS
  - help: Show this help message
  `)
	);
}
