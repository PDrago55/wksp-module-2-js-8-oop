class Dog {
    constructor() {
        this.hunger = 0;
    }
    
    remaining = () => {
        this.food = 100
        console.log(this.food.amount)
    }
}

let fido = new Dog();
fido.remaining();