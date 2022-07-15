const person = {
    name: 'Kolya',
    age: 20
}
Object.keys(person).forEach(key =>{
    console.log(key, person[key])
})

console.log('')
Object.values(person).forEach(value =>{
    console.log(value)
})