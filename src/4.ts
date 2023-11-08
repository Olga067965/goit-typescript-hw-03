// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);


// export { };


// Клас Key
class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature() {
    return this.signature;
  }
}

// Клас Person
class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  private tenants: Person[] = [];
  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("Людина увійшла в дім.");
    } else {
      console.log("Двері зачинені. Людина не може увійти.");
    }
  }

  abstract openDoor(key: Key): void;
}

// Клас MyHouse успадкуємо від абстрактного класу House
class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Двері відчинено.");
    } else {
      console.log("Невірний ключ. Двері залишаються зачиненими.");
    }
  }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(key); // Спроба відкрити двері ключем
house.comeIn(person); // Спроба увійти в дім

export {};