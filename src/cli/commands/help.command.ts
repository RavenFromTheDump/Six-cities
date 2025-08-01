import { Command } from "./command.interface.js";
import chalk from "chalk";

export class HelpCommand implements Command {
	public getName(): string {
		return '--help';
	}

	public async execute(..._parameters: string[]): Promise<void> {
		console.info(`
        ${chalk.underline('A program for preparing data for the REST API server.')}

        ${chalk.italic('Example:')}
          ${chalk.greenBright('cli.js --<command> [--arguments]')}

        ${chalk.italic('Commands:')}
          ${chalk.greenBright('--version:')}                   ${chalk.grey('# shows version number')}
          ${chalk.greenBright('--help:')}                      ${chalk.grey('# shows help page')}
          ${chalk.greenBright('--import <path>: ')}            ${chalk.grey('# imports data from TSV')}
          ${chalk.greenBright('--generate <n> <path> <url>: ')}${chalk.grey('# generates any amount of test data')}
    `);
	}
}
