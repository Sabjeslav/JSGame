const $btn = document.getElementById('btn-kick');
const $btnOth = document.getElementById('btn-other')
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


$btn.addEventListener('click', function () {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});

$btnOth.addEventListener('click', function () {
    console.log('Additional damage');
    enemy.changeHP(20);
});

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}
/*
function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    person.damageHP = person.damageHP > count ? person.damageHP - count : 0;
    if (person.damageHP <= 0) {
        alert ('Бедный ' + person.name + ' проиграл бой!');
        $btn.disabled = true;
        $btnOth.disabled = true;
    }
    renderHP(person);
}*/

function random(num) {
    return Math.ceil(Math.random() * num);
}

function generateLog (attacker, defender, damage) {
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