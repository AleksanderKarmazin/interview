// let 
let a = "Varaible a"
let b = "Varaible b" 

// Scope ES 6 feacher 
// переменные объявленные через слово let  доступны только 
// в рамках блочного Scope
{
  
    a = "New Varaible a"  
    let b = "Local Varaible b" 
    console.log("Scoped A", a);
    console.log("Scoped B", b);
}
console.log("A", a);
console.log("B", b);

//  Не получиться измениь 
const PORT = 8080 
//  PORT = 9090

// Получиться измениь  
const array = ['Scoped','Scoped','Scoped','Scoped','Scoped']
array.push('!')
console.log(array);

const obj = {}
obj.name = "Sasha" 
obj.age = 26 

console.log(obj);

//  Не получиться измениь 
// obj = 8080 