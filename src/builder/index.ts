import { MainDishBuilder } from './classes/MainDishBuilder';
import { VeganDishBuilder } from './classes/VeganDishBuilder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert().makeBeverage();

console.log(mainDishBuilder.meal.getPrice());

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal().makeDessert().makeBeverage();

console.log(veganDishBuilder.meal.getPrice());
