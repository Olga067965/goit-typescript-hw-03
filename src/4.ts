// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);


// export { };


class Key {
  generateSignature(): string {
    return Math.random().toString(36).substring(7);
  }
}

class Person {
  private key: Key;
  constructor() {
    this.key = new Key(); 
  }
  getKey(): Key {
    return this.key;
  }
}

class House {
  private doorLocked: boolean = true;
  private key: Key | undefined;

  unlockDoor(key: Key) {
    const signature = key.generateSignature();

    if (signature === this.key?.generateSignature()) {
      this.doorLocked = false;
      console.log('Двері відчинено.');
    } else {
      console.log('Невірний ключ. Двері залишаються зачиненими.');
    }
  }

  enterHouse(person: Person) {
    if (!this.doorLocked) {
      console.log('Особа увійшла до будинку.');
    } else {
      console.log('Двері зачинені. Особа не може увійти.');
    }
  }
}

const key = new Key();
const person = new Person();
const house = new House();

house.key = key; 
house.unlockDoor(key);
house.enterHouse(person);

export {};