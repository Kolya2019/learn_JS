class Numbers extends Array{
    sum() {
        return this.reduce((el, acc)=>acc +=el, 0)
    }
}

const myArray = new Numbers(2, 3,4 )
console.log(myArray)
console.log(myArray.sum())
