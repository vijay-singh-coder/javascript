// Answer 1:
function Book(title, author) {
    this.title = title;
    this.author = author;
    this.describe = function () {
        console.log(`${this.title} is written by ${this.author}`);
    };
}

const book1 = new Book('1984', 'George Orwell');
book1.describe();


// Answer 2:
function createCar(make, model) {
    return {
        make,
        model,
        start() {
            console.log(`${this.make} ${this.model} started`);
        }
    };
}

const car1 = createCar('Toyota', 'Corolla');
car1.start();


// Answer 3:
function Counter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        getValue() {
            return count;
        }
    };
}

const counter = Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2


// Answer 4:
function User(initialName) {
    let _username = initialName;

    Object.defineProperties(this, {
        username: {
            get: function () {
                return _username;
            },
            set: function (value) {
                if (!value) {
                    console.log("Username cannot be empty");
                    return;
                }
                _username = value;
            }
        }
    });
}

const user = new User("john_doe");
console.log(user.username); // john_doe
user.username = "";         // Username cannot be empty
user.username = "alice";
console.log(user.username); // alice


// Answer 5:
function BankAccount(initialBalance) {
    let balance = initialBalance;

    const isValidAmount = function (amount) {
        return typeof amount === 'number' && amount > 0;
    };

    this.deposit = function (amount) {
        if (isValidAmount(amount)) {
            balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log('Invalid deposit');
        }
    };

    this.withdraw = function (amount) {
        if (isValidAmount(amount)) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: $${amount}`);
            } else {
                console.log('Insufficient funds');
            }
        } else {
            console.log('Invalid withdraw');
        }
    };

    this.getBalance = function () {
        return balance;
    };
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log(`Balance: $${myAccount.getBalance()}`); // 120
