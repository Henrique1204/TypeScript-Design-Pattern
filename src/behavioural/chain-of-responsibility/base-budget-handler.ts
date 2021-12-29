import CustomerBudget from './customer-budget';

abstract class BaseBudgetHandler {
  protected nextHandler: BaseBudgetHandler | null = null;

  public setNextHandler(handler: BaseBudgetHandler): BaseBudgetHandler {
    this.nextHandler = handler;

    return handler;
  }

  public hanlde(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) return this.nextHandler.hanlde(budget);

    return budget;
  }
}

export default BaseBudgetHandler;
