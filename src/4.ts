// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);


// export { };

class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  private tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Людина увійшла в дім.");
    } else {
      console.log("Двері зачинені. Людина не може увійти.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
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

house.openDoor(key);
house.comeIn(person);

export {};
