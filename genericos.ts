function randomIntElem(theArray: number[]): number {
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

function randomStrElem(theArray: string[]): string{
    let randomIndex= Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

function randomElem(theArray: any[]): any{
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

let positions: number[] = [103, 458, 472, 458];
let randomPosition: number= randomElem(positions);

let colors: string[] = ['violet', 'indigo', 'blue', 'green'];
let randomColor:string = randomElem(colors);