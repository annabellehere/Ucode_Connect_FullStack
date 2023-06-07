class Human {
    #status = false;
    constructor(firstName = "Arnold", lastName = "Dominic", gender = "Pug", age = 5, calories = 400) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
    }

    sleepFor() {
        if (this.#status) {
            return;
        }
        let time = prompt('Enter amount of seconds for sleep:', '');
        if (!time) {
            return;
        }
        this.#status = true;
        labelStatus.innerText = 'I`m sleeping...';
        setTimeout(() => {
            labelStatus.innerText = `I'm awake now`;
            setTimeout(() => { 
                if(!this.#status) labelStatus.innerText = 'Status';
                this.checkEat(); 
            }, 3000);
            this.#status = false;
        }, time * 1000);
    }

    feed() {
        if (this.#status) {
            return;
        }
        if (this.calories >= 500) {
            labelStatus.innerText = `I'm not hungry`;
            setTimeout(() => { 
                if(!this.#status) labelStatus.innerText = 'Status'; 
            }, 3000);
            return;
        }
        this.#status = true;
        this.calories += 200;
        labelStatus.innerText = 'Nom Nom Nom';
        setTimeout(() => {
            document.querySelector('.container p:nth-child(8)').innerText = "Calories: " + this.calories;
            if (this.calories <= 500) {
                labelStatus.innerText = `I'm still hungry`;
            } else {
                labelStatus.innerText = 'Status';
            }
            this.#status = false;
        }, 10000);
    }

    hungry() {
        setTimeout(() => {
          this.calories = 200;
          this.updateCalories();
          this.checkEat();
        }, 5000);
      
        setInterval(() => {
          this.calories -= 200;
          this.updateCalories();
          this.checkEat();
        }, 60000);
    }

    updateCalories() {
        if (this.calories < 0) {
          this.calories = 0;
        }
        const caloriesElement = document.querySelector('.container p:nth-child(8)');
        caloriesElement.innerText = 'Calories: ' + this.calories;
    }

    infos() {
        document.querySelector('.container p:nth-child(3)').innerText = "First Name: " + this.firstName;
        document.querySelector('.container p:nth-child(4)').innerText = "Last Name: " + this.lastName;
        document.querySelector('.container p:nth-child(6)').innerText = "Gender: " + this.gender;
        document.querySelector('.container p:nth-child(7)').innerText = "Age: " + this.age;
        document.querySelector('.container p:nth-child(8)').innerText = "Calories: " + this.calories;
    }

    checkEat() {
        if (this.calories < 500) {
            labelStatus.innerText = `I'm still hungry`;
            return;
        }
        else return;
    }
}

class Superhero extends Human {
    #status = false;
    fly() {
        if (this.#status) {
            return;
        }
        this.#status = true;
        labelStatus.innerText = 'I`m flying...';
        setTimeout(() => { 
            if(!this.status) labelStatus.innerText = 'Status';
            this.checkEat(); 
        }, 10000);
    }

    fightWithEvil() {
        if (this.status) {
            return;
        }
        labelStatus.innerText = `Khhhh-chh... Bang-g-g-g... Evil is defeated!`;
        setTimeout(() => { 
            if(!this.status) labelStatus.innerText = 'Status';
            this.checkEat(); 
        }, 3000);
    }
}

const labelStatus = document.getElementById('status');
let human = new Human();

human.infos();
human.hungry();

document.querySelector('#sleep').addEventListener('click', () => {
    human.sleepFor();
});

document.querySelector('#eat').addEventListener('click', () => {
    human.feed();
});

let hero;

document.querySelector('#fly').addEventListener('click', () => {
    hero.fly();
});

document.querySelector('#fight-with-evil').addEventListener('click', () => {
    hero.fightWithEvil();
});

document.querySelector('#turn-into-superhero').addEventListener('click', () => {
    if(human.calories < 500) {
        labelStatus.innerText = 'You have to have at least 500 calories!';
        return;
    }
    hero = new Superhero('Denny', 'Wow', 'SuperPug', 5, human.calories);
    hero.superpower = 'Poop without sound';
    document.querySelector('.container p:nth-child(5)').innerText = 'Superpower: ' + hero.superpower;
    hero.infos();
    document.querySelector('img').src = 'https://i.pinimg.com/564x/80/5a/f9/805af9980f475b6c12804dd862032fc3--superheroes-steel.jpg';
    document.querySelector('.container p:nth-child(5)').classList.remove('hidden');
    document.querySelector('#fly').classList.remove('hidden');
    document.querySelector('#turn-into-superhero').classList.add('hidden');
    document.querySelector('#fight-with-evil').classList.remove('hidden');
});