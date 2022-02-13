interface Person {
    name: string;
    age: number;

    greet(phrase: string): void
}

let user1: Person 

user1 = {
    name: "Caleb",
    age: 27,
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`)
    }
}

user1.greet("hello there, I am")


console.log("yooooooooooooo")