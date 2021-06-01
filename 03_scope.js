 function funcA() {
    let a =1

    function funcB() {
     let b = 2
        
        function funcC() {
            let c = 3
            console.log( "fancC",a,b,c);
        }
        funcC()
        console.log( "fancB",a,b);
    } 
    funcB()
    console.log( "fancA",a);
 }
 
 funcA()
 console.log( "fancA = Call chain");

 // видимость расширяется 