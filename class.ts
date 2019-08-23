class Shape{
    area: number;
    private color: string;
     
    constructor (public name: string, width: number, height: number){
        this.area = width * height;
        this.color = "pink";
    };
    
    shoutout(){
        return "Soy un " + this.name + " " + this.color + " con un area de " + this.area + " cm²";
    }
}

var cuadro = new Shape("cuadrado", 30,30);
console.log(cuadro.shoutout());

class Shape3D extends Shape{
    volume: number;

    constructor (public name: string, width: number, height:number, length:number){
        super( name, width, height);
        this.volume= length * this.area;
    };

    shoutout(){
        return "Soy un " + this.name + " con un volumen de " + this.volume + " cm³";
    }

    superShout(){
        return super.shoutout();
    }
}

var cube = new Shape3D("cubo", 30,30,30);
console.log(cube.shoutout());
console.log(cube.superShout());