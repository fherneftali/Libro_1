function area(shape, width, height) {
    var area = width * height;
    return "Soy un " + shape + "con un area de " + area + "cm²";
}
document.body.innerHTML = area("rectangulo", 30, 15);
