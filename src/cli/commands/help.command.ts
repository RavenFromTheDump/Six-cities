import { Command } from "./command.interface.js";

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
        A program for preparing data for the REST API server.
        Example:
            cli.js --<command> [--arguments]
        Commands:
            --version:                   # shows version number
            --help:                      # shows help page
            --import <path>:             # imports data from TSV
            --generate <n> <path> <url>  # generates any amount of test data
    `);
  }
}
