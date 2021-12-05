import { MealCompositeProtocol } from '../interfaces/MealCompositeProtocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  public getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  public add(...meals: MealCompositeProtocol[]): void {
    meals.forEach((meal) => this._children.push(meal));
  }
}
