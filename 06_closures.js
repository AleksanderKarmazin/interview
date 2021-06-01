// Замыкание это момент когда 
// функция имеет  доступ
//  до вышестоящего скоупа 

function sayHellowTo(name) {
    const message = 'Hellow ' + name

    return function () {
        console.log('un?', message);
    }
}

const hellowToElena = sayHellowTo('Elena')
console.log(hellowToElena);

// Эта функция ни чего не имеет return
//  така функуия всегда возвращает undefined
// return function () {
//     console.log('un?', message);
// }

console.log("un2", hellowToElena()); 

