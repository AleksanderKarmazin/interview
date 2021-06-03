// // Замыкание это момент когда 
// // функция имеет  доступ
// //  до вышестоящего скоупа 

// function sayHellowTo(name) {
//     const message = 'Hellow ' + name

//     return function () {
//         console.log('un?', message);
//     }
// }
    
// const hellowToElena = sayHellowTo('Elena')
// console.log(hellowToElena);

// // Эта функция ни чего выводит так как  не имеет return
// //  така функуия всегда возвращает undefined
// // return function () {
// //     console.log('un?', message);
// // }

// console.log("un2", hellowToElena()); 

function createFarmerworkManager() {
    const fw = ['Angular', 'React']

    return {
        // Имеет доступ до вышестоящего скоупа 
        print: function name() {
            console.log(fw);
        }, 
        add: function name(framework) {
           fw.push(framework)  
        }
    }
}

// const manager = createFarmerworkManager()
// console.log(manager );

// manager.print()
// manager.add('Vue')
// manager.print()

// setTimOut 
 
fib = [1,2,3,5,8,13]

// var => let 
// for (let i = 0; i < fib.length; i++){
//     setTimeout(() => {
//       console.log(`fib[${i}] = $fib[{i}]`);
//     }, 1500);
// }


for (var i = 0; i < fib.length; i++){
    (
        function (j) {
            setTimeout(() => {
            console.log(`fib[${j}] = $fib[{j}]`);
            }, 1500);
        }
    )(i)
    
}


