function Cat(color, name) {
    this.color = color
    this.name = name
}

// const cat = new Cat('red', 'CAT')
// console.log(cat);


function myNew(constructor, ...args) {
    const obj = {}
    // для обж устаналиваем протип 
    // функции конструктора 
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}

const cat =  myNew(Cat, 'red', 'CAT') 
console.log(cat);

