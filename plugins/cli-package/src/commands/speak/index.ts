import {Command} from '@oclif/core'

export default class Speak extends Command {
  async run(): Promise<void> {
    this.log('speak')
  }
}
