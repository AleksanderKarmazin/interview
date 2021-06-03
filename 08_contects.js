// Контекст определяет как функция была вызывана 
const person = {
    surname: 'Starc',
    knows: function (what, name ) {
        console.log(`You ${what} know, ${name} ${this.surname}`);
    }
}

person.knows("All", "BRAN")