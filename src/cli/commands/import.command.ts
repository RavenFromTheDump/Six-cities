import { Command } from "./command.interface";

export class ImportCommand implements Command {
	public getName(): string {
		return '--import'
	}

	public async execute(..._parameters: string[]): Promise<void> {

	}
}
