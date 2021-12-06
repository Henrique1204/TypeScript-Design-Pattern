import { MainDishBuilder } from '../../creational/builder/classes/MainDishBuilder';
import { VeganDishBuilder } from '../../creational/builder/classes/VeganDishBuilder';

class BuilderFacede {
  // Essa é a fachada para a pasta src/creational/builder/index.ts
  constructor(
    private mainDishBuilder: MainDishBuilder = new MainDishBuilder(),
    private veganDishBuilder: VeganDishBuilder = new VeganDishBuilder()
  ) {}

  public makeMeal1(): void {
    this.mainDishBuilder.makeMeal().makeDessert().makeBeverage();
    console.log(this.mainDishBuilder.meal.getPrice());
  }

  public makeMeal2(): void {
    this.veganDishBuilder.makeMeal().makeDessert().makeBeverage();

    console.log(this.veganDishBuilder.meal.getPrice());
  }
}

export default BuilderFacede;
