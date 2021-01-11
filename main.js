import Pokemon from "./pokemon.js"
import {attack, init, action} from "./methods.js"
import { pokemons } from './characters.js'

const $btn = document.getElementById('btn-kick');
const $btnOth = document.getElementById('btn-other');

let regAttackAmount = 5;
let criticalAttackAmount = 5;

const pikachu = pokemons.find (item => item.name === "Pikachu");
console.log(pikachu);

const player1 = new Pokemon({
    // name: 'Pikachu',
    // defaultHP: 100,
    // damageHP: 100,
    ...pikachu,
    selectors: 'player1'
})

const player2 = new Pokemon ({
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    selectors: 'player2'
})

console.log(player1);
console.log(player2);


const $control = document.querySelector('.control');

player1.attacks.forEach (item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    $control.appendChild($btn);
    const bntCount = 
})

init();


document.addEventListener('click', (e) => {
    if (e.target.id == "btn-kick") {    
        regAttackAmount--;
        document.getElementById("shotsReg").innerHTML = regAttackAmount;
        console.log(regAttackAmount, "SMOTRI")
    }
    if (e.target.id == "btn-other") { 
        criticalAttackAmount--;
        document.getElementById("shotsCrit").innerHTML = criticalAttackAmount;
    }
})

const {name, ...rest} = character;
const {name: nameEnemy, ...restEnemy} = enemy;
console.log(name, rest);
console.log(nameEnemy, restEnemy);


const al = action($btn);
const ar = action($btnOth);
$btn.addEventListener('click', () => {
    al();
    attack(character, 20, enemy, 20);
    console.log('Kick!')
});

$btnOth.addEventListener('click', () => {
    ar();
    attack(character, 50, enemy, 25);
    console.log('Critical damage')
}); 