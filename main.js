const $btn = document.getElementById('btn-kick');
const $btnOth = document.getElementById('btn-other')
let counter = 0;
let regAttackAmount = 6;
let criticalAttackAmount = 2;
let shotsReg = document.getElementById('shotsReg');
let shotsCrit = document.getElementById('shotsCrit');


document.addEventListener('click', (e) => {
    if (e.target.id == "btn-kick") {
        regAttackAmount--;
        document.getElementById("shotsReg").innerHTML = regAttackAmount;
    }
    if (e.target.id == "btn-other") { 
        criticalAttackAmount--;
        document.getElementById("shotsCrit").innerHTML = criticalAttackAmount;
    }
})

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elProgressbar: document.getElementById('progressbar-character'),
    elHP: document.getElementById('health-character'),
    changeHP,
    renderHP
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elProgressbar: document.getElementById('progressbar-enemy'),
    elHP: document.getElementById('health-enemy'),
    changeHP,
    renderHP
}

const {name, ...rest} = character;
const {name: nameEnemy, ...restEnemy} = enemy;
console.log(name, rest);
console.log(nameEnemy, restEnemy);

function changeHP (count) {
    
    this.damageHP = this.damageHP > count ? this.damageHP - count : 0;
    if (this.damageHP <= 0) {
        alert ('Бедный ' + this.name + ' проиграл бой!');
        $btn.disabled = true;
        $btnOth.disabled = true;
    }
    this.renderHP();
    const log = this === enemy ? generateLog(character, this, count) : generateLog(enemy, this, count);
    console.log(log);

    const $p = document.createElement("p");
    $p.innerText = log;
    $log.insertBefore($p, $log.children[0]);
    
}

const $log = document.querySelector('#log');

function renderHP () {
    const{ damageHP, defaultHP } = this;
    this.elHP.innerText = damageHP + ' / ' + defaultHP;
    this.elProgressbar.style.width = damageHP + '%';
}

const clk = () => {
    return function () {
        counter++; 
        console.log(counter); // счетчик в консоли
    }
}
const c = clk();


$btn.addEventListener('click', () => {
    if (regAttackAmount == 1) $btn.disabled=true;
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
    c();
});

$btnOth.addEventListener('click', () => {
    if (criticalAttackAmount == 1) $btnOth.disabled=true;
    console.log('Additional damage');
    enemy.changeHP(20);
    c();
});


const init = () => {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

const random = num => Math.ceil(Math.random() * num);

const generateLog = (attacker, defender, damage) => {
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

init();