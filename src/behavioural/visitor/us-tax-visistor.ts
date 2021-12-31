import TaxVisitorProtocol from './tax-visitor-protocol';
import Food from './food';
import AlcoholicDrink from './alcoholic-drink';
import Cigarette from './cigarette';

class UsTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * (0.05 * 5);
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * (1.5 * 5);
  }

  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * (0.5 * 5);
  }
}

export default UsTaxVisitor;
