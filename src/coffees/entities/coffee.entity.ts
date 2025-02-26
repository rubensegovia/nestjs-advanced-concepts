import { WithUuid } from '../../common/mixins/with-uuid';

export class Coffee {
  constructor(public name: string) {}
}

const CoffeeWithUuid = WithUuid(Coffee);
const coffee = new CoffeeWithUuid('Flat White');
