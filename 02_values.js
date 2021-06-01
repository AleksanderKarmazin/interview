// let a = 42 
// let b = a 
// b++
// console.log(a)
// console.log(b)



let a = [1,2,3,4,5,6] 
let b = a

// В переменной b  хранится ссылка на переменную a 
// Поэтому мы меняем a, т ак как b  тлько ссылка
b.push(7);
console.log('a', a)
console.log('b', b)


 a = [1,2,3,4,5,6] 
// clone a Array 
 b = a.concat()


b.push(7);
console.log('a', a)
console.log('b', b)
