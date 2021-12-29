import BaseBudgetHandler from './base-budget-handler';
import CustomerBudget from './customer-budget';

class CEOBudgetHandler extends BaseBudgetHandler {
  public hanlde(budget: CustomerBudget): CustomerBudget {
    console.log('O CEO trata qualquer orçamento');

    budget.approved = true;

    return budget;
  }
}

export default CEOBudgetHandler;
