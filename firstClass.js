var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hola, soy " + this.name + "!");
    };
    return Person;
}());
var personA = new Person("Fher");
personA.introduceSelf();
personA.name = "Mindy";
personA.introduceSelf();
