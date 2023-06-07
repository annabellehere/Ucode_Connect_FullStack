class guestList {
    #container = new Set();
    constructor(guests) {
      guests.forEach(guest => {
        this.#container.add(guest);
      });
    }
  
    addGuest(guest) {
      this.#container.add(guest);
    }
  
    checkGuest(guest) {
      return this.#container.has(guest);
    }
  
    deleteGuest(guest) {
      this.#container.delete(guest);
    }
}

class menu {
    #container = new Map();
    constructor(menu) {
      menu.forEach(([dish, price]) => {
        this.#container.set(dish, price);
      });
    }
  
    addDish(dish, price) {
      this.#container.set(dish, price);
    }
  
    checkAllDishes() {
      return this.#container.entries();
    }
}

class bankVault {
    #container = new WeakMap();
    constructor(boxes) {
      boxes.forEach(([safe, credentials]) => {
        this.#container.set(credentials, safe);
      });
    }
  
    addBox(box, credentials) {
      this.#container.set(credentials, box);
    }
  
    checkBox(credentials) {
      return this.#container.has(credentials);
    }
  
    getBox(credentials) {
      return this.#container.get(credentials);
    }
  
    get container() {
      return this.#container;
    }
}

class coinCollection {
    #container = new WeakSet();

    constructor(coins) {
      coins.forEach(coin => {
        this.#container.add(coin);
      });
    }
  
    addCoin(coin) {
      this.#container.add(coin);
    }
  
    checkAllCoins() {
      return this.#container;
    }
}

const test1 = new guestList(['Misha', 'Anya', 'Anton', 'Timur', 'Vanya']);

console.log('Is Anya in the list? ' + test1.checkGuest('Anya'));
console.log('Remove Misha from the list, please. ' + test1.deleteGuest('Misha'));

const test2 = new menu([
    ['Pizza', '25'],
    ['Burger', '10'],
    ['Salas', '5'],
    ['Pasta', '10'],
    ['Potato', '6']
]);

test2.addDish('Broad', '7');

console.log(test2.checkAllDishes());

const test3 = new bankVault([
    [
        box1 = { number: 23635635, name: 'Misha', money: '1000' },
        unique1 = { username: 'Misha', password: 'qwrgwrqg' }
    ],
    [
        box2 = { number: 13466136, name: 'Anya', money: '20000' },
        unique2 = { username: 'Anya', password: 'awfdeawsfe' }
    ],
    [
        box3 = { number: 1366346, name: 'Anton', money: '14' },
        unique3 = { username: 'Anton', password: 'wefeawgew' }
    ],
    [
        box4 = { number: 1662774, name: 'Timur', money: '7' },
        unique4 = { username: 'Timur', password: 'wqgwg' }
    ],
    [
        box5 = { number: 1662774, name: 'Vanya', money: '7' },
        unique5 = { username: 'Vanya', password: 'qwrhwqhw' }
    ]
]);

test3.addBox(
    box6 = { number: 16675774, name: 'Poril', money: '478' },
    unique6 = { username: 'Poril', password: 'almkgewe' }
);

console.log(test3.checkBox(unique5));
console.log(test3.getBox(unique3));

const test4 = new coinCollection([
    { denomination: 1, country: 'USA' },
    { denomination: 5, country: 'Canada' },
    { denomination: 8, country: 'Ukraine' },
    { denomination: 4, country: 'Germany' },
    { denomination: 3, country: 'Poland' }
]);

const newCoin = { denomination: 10, country: 'Australia' };
test4.addCoin(newCoin);

console.log(test4.checkAllCoins());