class Person{
    private name:string;
    protected age: number;
    protected constructor(theName:string theAge: number){
        this.name= theName;
        this.age= theAge;
    }
    introduceSelf(){
        console.log("Hola, soy " + this.name + "!");
    }
}

class Friend extends Person{
    yearsKnown: number;
    constructor(name: string, age:number, yearsKnown: number){
        super(name, age);
        this.yearsKnown=yearsKnown;
    }

    timeKnown(){
        console.log("Hemos sido amigos por " + this.yearsKnown + " years.")
    }
    friendSince(){
        let fisrtAge= this.age - this.yearsKnown;
        console.log(`Hemos sido amigos desde que tenia ${fisrtAge} años.`)
    }
}

let friendA = new Friend("Fher",26, 4);
friendA.introduceSelf();
friendA.timeKnown();
friendA.friendSince();