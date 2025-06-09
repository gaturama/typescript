export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    getBalance = (): void => {
        console.log(this.balance)
    } 

    getStatus(): boolean {
      return this.status
    }

    deposit = (amount: number): void => {
      if (this.status && amount > 0) {
        this.balance += amount
        console.log(`Depósito de R$ ${amount} realizado com sucesso! Saldo atual: R$ ${this.balance}`)
      } else{
        console.log('Depósito inválido')
      }
    }

    withdraw = (amount: number): void => {
       if (this.status && this.balance >= amount) {
        this.balance -= amount
        console.log(`Saque de R$ ${amount} realizado com sucesso! Saldo atual: R$ ${this.balance}`)
       } else{
         console.log('Saque inválido')
       }
    }
}