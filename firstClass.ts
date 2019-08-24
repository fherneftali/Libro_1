class Person{
    name:string;
    constructor(theName:string){
        this.name= theName;
    }
    introduceSelf(){
        console.log("Hola, soy " + this.name + "!");
    }
}

let personA = new Person("Fher");
personA.introduceSelf();

personA.name="Mindy";
personA.introduceSelf();