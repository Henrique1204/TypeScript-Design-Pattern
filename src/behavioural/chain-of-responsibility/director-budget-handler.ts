import BaseBudgetHandler from './base-budget-handler';
import CustomerBudget from './customer-budget';

class DirectorBudgetHandler extends BaseBudgetHandler {
  public hanlde(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 50000) {
      console.log('O diretor tratou o orçamento');

      budget.approved = true;

      return budget;
    }

    return super.hanlde(budget);
  }
}

export default DirectorBudgetHandler;
