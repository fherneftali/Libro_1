var Shape = /** @class */ (function () {
    function Shape(name, width, height) {
        this.area = width * height;
        this.color = "pink";
    }
    ;
    Shape.prototype.shoutout = function () {
        return "Soy un " + this.name + " " + this.color + " con un area de " + this.area + " cm²";
    };
    return Shape;
}());
var cube = new Shape("", 30, 30);
console.log(cube.shoutout());
