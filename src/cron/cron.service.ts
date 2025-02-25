import { IntervalHost } from '../scheduler/decorators/interval-host.decorator';

@IntervalHost
export class CronService {
  everySecond() {
    console.log('This will be logged every second 🐈 ');
  }
}
