import commander from 'commander';
import { ConsoleRenderer } from './renderer';
import { Screen } from './screen';

commander
  .arguments('<num>')
  .action(num => {
    new Screen(new ConsoleRenderer()).display(num);
  })
  .parse(process.argv);
