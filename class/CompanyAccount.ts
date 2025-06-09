import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (this.getStatus()) {
      this.addToBalance(amount);
      console.log(`Empréstimo de R$ ${amount} realizado com sucesso!`)
    } else {
      console.log("Não foi possível fazer o empréstimo. Conta inativa")
    }
  }

  private addToBalance = (amount: number): void => {
    (this as any).balance += amount;
  }
}
