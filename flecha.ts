var shape = {
    name: "rectangulo",
    popup: function() {
        console.log('This inside popup(): ' + this.name);

        setTimeout(function(){
            console.log('This inside setTimeout(): ' + this.name);
            console.log("Soy un " + this.name + "!");
        }, 3000);
    }
};
shape.popup();