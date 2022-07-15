const myArray = [1, 2, 3]
console.log(myArray)
const newArray = myArray.map(function (el){
    return el*3

})
console.log(newArray)
console.log(myArray)