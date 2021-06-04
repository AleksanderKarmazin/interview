// Контекст определяет как функция была вызывана 
const person = {
    surname: 'Starc',
    knows: function (what, name ) {
        console.log(`You ${what} know, ${name} ${this.surname}`);
    }
}

person.knows("All", "BRAN")


const john = {surname: 'Snow '}

// Форсированная передача контекста 
// call  первым агруметом принимает контекст 
// контекст в js  является объектом  
// через запятую принмает остальные параметры 
person.knows.call(john, 'nothing', 'John')
// apply только 2 параметраб второй это массив
person.knows.apply(john, ['nothing', 'John'])
// ES 6 feacher ... []
person.knows.call(john, ...['nothing', 'John'])
// bind -  не вызывает функцию сразу же,
//  а возвращает новую функцию            =>| // либо срузу вызывем
person.knows.bind(john, 'nothing', 'John') ()
         
// либо положить результат в переменную 
const bound = person.knows.bind(john, 'nothing', 'John') 
bound()



function Person(name, age) {
    this.name = name
    this.age = age 

    console.log(this);
}

const elena = new Person('Elena', 20)

// Явный байндинг - Explicit Binding
function logThis() {
    console.log(this);
}
 
const obj = {num: 42}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

// Неявный байндинг - Implicit Binding

const animal ={
    legs: 4,
    logThis: function () {
        console.log(this);
    }
}

// Получаем контекст в рамках которого был вызыван 
// метод logThis
animal.logThis() 


function Cat(color) {
    this.color = color
    console.log(this);

    // вот эта стрелочная функция не создаёт своего 
    // собственного контекста
    (
        ()=> console.log('Arrow this', this)
    )(),

    ()=> console.log('======', this)
}

new Cat('red')
