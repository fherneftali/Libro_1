interface EnemyHit{
    (name: Enemy, damageDone: number): number;
}

let tankHit: EnemyHit= function(tankName: Enemy, damageDone: number){
    tankName.health -= damageDone;
    return tankName.health;
}