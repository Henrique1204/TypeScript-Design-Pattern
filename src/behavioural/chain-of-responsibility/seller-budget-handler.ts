import BaseBudgetHandler from './base-budget-handler';
import CustomerBudget from './customer-budget';

class SellerBudgetHandler extends BaseBudgetHandler {
  public hanlde(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log('O vendendor tratou o orçamento');

      budget.approved = true;

      return budget;
    }

    return super.hanlde(budget);
  }
}

export default SellerBudgetHandler;
