const data = [[1,2,3], [3,4,5], [5,6,7]]
const flat = data.reduce((prev, item) =>{
    return prev.concat(item)
})
console.log(flat)