class Person{
    name:string;
    constructor(theName:string){
        this.name= theName;
    }
    introduceSelf(){
        console.log("Hola, soy " + this.name + "!");
    }
}

class Friend extends Person{
    yearsKnown: number;
    constructor(name: string, yearsKnown: number){
        super(name);
        this.yearsKnown=yearsKnown;
    }

    timeKnown(){
        console.log("Hemos sido amigos por " + this.yearsKnown + " years.")
    }
}

let friendA = new Friend("Fher", 4);
friendA.introduceSelf();
friendA.timeKnown();