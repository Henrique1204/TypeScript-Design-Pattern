import Food from './food';
import Cigarette from './cigarette';
import AlcoholicDrink from './alcoholic-drink';

import BrazilTaxVisitor from './brazil-tax-visistor';
import UsTaxVisitor from './us-tax-visistor';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(15);

const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((sum, item) => sum + item.getPrice(), 0);

console.log('\n', total);

const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(new BrazilTaxVisitor()),
  0
);

console.log('\n', totalWithTaxesBrazil);

const totalWithTaxesUs = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(new UsTaxVisitor()),
  0
);

console.log('\n', totalWithTaxesUs);
