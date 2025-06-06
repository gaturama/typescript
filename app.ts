class User{
    name: string = 'Gabriel'
    age: number = 21

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user = new User('Gabriel', 21)
user.showName()

const otherUser = new User('João', 20)
otherUser.showName()