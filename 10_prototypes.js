function Cat(name, color ) {
    this.name = name
    this.color = color 
}

// здесь ключекове слово function  создаёт свой контекст 

Cat.prototype.voice = function () {
    console.log(`Cat ${this.name} has ${this.color} color`);
}

const cat = new Cat('Kiss', 'Black')

// cat.voice()

console.log(Cat.prototype);
console.log(cat);
console.log(cat.__proto__);
console.log(cat.constructor);


// ====================================
function Person() {}
Person.prototype.legs = 2
Person.prototype.skin = 'wight'


const person = new Person()
person.name = 'Max'

console.log('skin' in person);

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('skin'));


// Object.create()

let proto = {year: 2019}
/**
 * @param объект который будет прототипом для нового объекта
 * @param свойства
 * 
 */
const myYear = Object.create(proto)

console.log(myYear.year);
console.log(myYear.hasOwnProperty('year'));
console.log(myYear.__proto__ === proto);


// Изменение объекта прототипа и собственного 

console.log('myYear.year', myYear.year);
console.log('proto.year', proto.year);

proto.year = 2020

console.log('myYear.year', myYear.year);
console.log('proto.year', proto.year);

proto = {year: 2025 }
// свойство  обекта  прототипа (наследника) не меняется 
// если перназначен новый объект 
// с которого прототипируем (родитель)
console.log('myYear.year', myYear.year);
console.log('proto.year', proto.year);