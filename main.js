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

function changeHP (count) {
    this.damageHP = this.damageHP > count ? this.damageHP - count : 0;
    if (this.damageHP <= 0) {
        alert ('Бедный ' + this.name + ' проиграл бой!');
        $btn.disabled = true;
        $btnOth.disabled = true;
    }
    this.renderHP();
}

function renderHP () {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
    this.elProgressbar.style.width = this.damageHP + '%';
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

init();