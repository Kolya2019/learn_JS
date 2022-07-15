const sum = (a, b) =>{
    if(typeof a !== 'number' || typeof b !=='number'){
        return 'One of the arguments is not a number'
    }

    if(typeof a === 'number'|| typeof b === 'number'){
        return a + b
    }

}
console.log(sum(3, 3))