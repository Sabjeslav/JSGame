class Selectors {
    constructor (name) {
       
    }
}

class Pokemon extends Selectors {
    constructor({name, defaultHP, damageHP, selectors, attacks = [] }){
        super(Selectors);
        this.name = name;
        this.defaultHP = defaultHP;
        this.damageHP = damageHP;
        this.attacks = attacks;
        this.elHP = document.getElementById(`health-${selectors}`);
        this.elProgressbar = document.getElementById(`progressbar-${selectors}`);
    }

    renderHP = () => {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
        this.elProgressbar.style.width = this.damageHP + '%';
    }

    changeHP = (count) => {    
        const $btn = document.getElementById('btn-kick');
        const $btnOth = document.getElementById('btn-other')
        this.damageHP = this.damageHP > count ? this.damageHP - count : 0;
        if (this.damageHP <= 0) {
            alert ('Бедный ' + this.name + ' проиграл бой!');
            this.damageHP = 0;
            $btn.disabled = true;
            $btnOth.disabled = true;
        }
        this.renderHP();
    }
}

export default Pokemon;
