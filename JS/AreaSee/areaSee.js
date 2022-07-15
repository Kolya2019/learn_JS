let a //global
let b// global

function myFn(){
    let b
    a =true
    b = 10 //local
    console.log(b)
}
myFn()
console.log(a)
console.log(b)