import { MealBuilderProtocol } from '../interfaces/MealBuilderProtocol';
import { MealBox } from './MealBox';
import { Beans, Beverage, Dessert, Meat, Rice } from './Meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  public reset(): this {
    this._meal = new MealBox();

    return this;
  }

  public get meal(): MealBox {
    return this._meal;
  }

  public getPrice(): number {
    return this._meal.getPrice();
  }

  public makeMeal(): this {
    const rice = new Rice('Arroz', 20);
    const beans = new Beans('Feijão', 15);
    const meat = new Meat('Carne bovinas', 35);

    this._meal.add(rice, beans, meat);
    return this;
  }

  public makeBeverage(): this {
    const beverage = new Beverage('Coca', 8);

    this._meal.add(beverage);
    return this;
  }

  public makeDessert(): this {
    const dessert = new Dessert('Sorvete', 5);

    this._meal.add(dessert);
    return this;
  }
}
