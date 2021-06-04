//  Evant loop, call stack 
const first = () => {
    console.log("First");
}
const second = () => {
    console.log("Second");
}
const third = () => {
    console.log("Therd");
}

first()
second()
third()

first()
setTimeout(() => {
    second()
}, 0);
third()