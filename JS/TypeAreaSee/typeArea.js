//То есть если не создавать переменую, то она автоматически создастца с помощью JS в глобальном доступе
// Но так делать не рекомендуется
function myFn(a, b){
   let c
    c = a - b
    return c
}

let r = myFn(1, 3)
console.log(r)