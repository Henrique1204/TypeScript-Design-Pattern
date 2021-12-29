import BaseBudgetHandler from './base-budget-handler';
import CustomerBudget from './customer-budget';

class ManagerBudgetHandler extends BaseBudgetHandler {
  public hanlde(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 5000) {
      console.log('O gerente tratou o orçamento');

      budget.approved = true;

      return budget;
    }

    return super.hanlde(budget);
  }
}

export default ManagerBudgetHandler;
