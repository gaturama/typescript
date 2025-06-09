import { BonusAccount } from "./class/BonusAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const separador = () => console.log('----------------------------------------------------------------------') //Para fazer separação entre as informações no terminal

const contaGabriel = new PeopleAccount(987654321, 'Gabriel', 1001)
contaGabriel.deposit(100)
contaGabriel.withdraw(20)
console.log(`Dono ${contaGabriel.getName()} | CPF: ${contaGabriel.getDocId()}`)
separador()

const empresaAthena = new CompanyAccount('Athena Motors', 987)
empresaAthena.deposit(500)
empresaAthena.getLoan(1000)
separador()

const gabrielBonus = new BonusAccount('Gabriel Plus', 2002)
contaGabriel.deposit(150)
contaGabriel.withdraw(70)
separador()