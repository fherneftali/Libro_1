class Shape{
    area: number;
    color: string;
     
    constructor (name: string, width: number, height: number){
        this.area = width * height;
        this.color = "pink";
    };
    
    shoutout(){
        return "Soy un " + this.name + " " + this.color + " con un area de " + this.area + " cm²";
    }
}

var cube = new Shape("", 30,30);
console.log(cube.shoutout());