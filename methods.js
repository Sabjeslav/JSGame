const $log = document.querySelector('#log');

export function generateLog (attacker, defender, damage) {
    const logs = [
        `${defender.name} вспомнил что-то важное, но неожиданно ${attacker.name}, не помня себя от испуга, ударил в предплечье врага, нанеся ${damage} урона. Осталось [${defender.damageHP} / 100]`,
        `${defender.name} поперхнулся, и за это ${attacker.name} с испугу приложил прямой удар коленом в лоб врага, нанеся ${damage} урона. Осталось [${defender.damageHP} / 100]`,
        `${defender.name} забылся, но в это время наглый ${attacker.name}, приняв волевое решение, неслышно подойдя сзади, ударил, нанеся ${damage} урона. Осталось [${defender.damageHP } / 100]`,
        `${defender.name} пришел в себя, но неожиданно ${attacker.name} случайно нанес мощнейший удар, нанеся ${damage} урона. Осталось [${defender.damageHP} / 100]`,
        `${defender.name} поперхнулся, но в это время ${attacker.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника, нанеся ${damage} урона. Осталось [${defender.damageHP} / 100]`,
        `${defender.name} удивился, а ${attacker.name} пошатнувшись влепил подлый удар, нанеся ${damage} урона. Осталось [${defender.damageHP} / 100]`,
        `${defender.name} высморкался, но неожиданно ${attacker.name} провел дробящий удар, нанеся ${damage} урона. Осталось [${defender.damageHP} / 100]`,
        `${defender.name} пошатнулся, и внезапно наглый ${attacker.name} беспричинно ударил в ногу противника, нанеся ${damage} урона. Осталось [${defender.damageHP} / 100]`,
        `${defender.name} расстроился, как вдруг, неожиданно ${attacker.name} случайно влепил стопой в живот соперника, нанеся ${damage} урона. Осталось [${defender.damageHP} / 100]`,
        `${defender.name} пытался что-то сказать, но вдруг, неожиданно${attacker.name} со скуки, разбил бровь сопернику, нанеся ${damage} урона. Осталось [${defender.damageHP} / 100]`
    ];

    return logs[random(logs.length-1)];
}

export function attack (player1, p1damage, player2, p2damage) {
    player1.changeHP (random(p1damage));
    player1.renderHP();
    player2.changeHP (random(p2damage));
    player2.renderHP();
    const log = this === player2 ? generateLog(player2, player1, p1damage) : generateLog(player1, player2, p2damage);
        const $p = document.createElement("p");
        $p.innerText = log;
        $log.insertBefore($p, $log.children[0]);
}

export const random = num => {
    return Math.ceil(Math.random() * num);
}

export const init = () => {
    console.log('Start Game!');
}

export function action (e) {
    let c=0;
        return  function(){
            c++;
            if (c<5){
                let left=6-c;
                console.log('Осталось ' + left + ' атак');
            }
            if (c==5){
                e.disabled=true;
                console.log("Все атаки использованы")
            }
    }
}
