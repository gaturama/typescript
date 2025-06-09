import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
    deposit = (amount: number): void => {
        if (this.getStatus() && amount > 0 ){
            const bonus = 10;
            (this as any).balance += amount + bonus
            console.log(`Depósito com bônus de R$ ${bonus} realizado com sucesso! Total depositado: R$ ${amount + bonus}. Saldo atual: R$ ${(this as any ).balance}`)
        } else{
            console.log('Depósito com bônus inválido.')
        }
    }
}