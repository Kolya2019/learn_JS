//Original Mytation.js
// Но этот метод решение мутации предотвращает только мутацию в корне
const person = {
    name: 'Kolya',
    age: 21,
    info: {
       location: 'Ukraine'
    }
}
const person2 = Object.assign({},person) // для того что бы в
// исходном не поменялось значение

person2.age = 26
person2.info.location = 'Haha, yes'
console.log(person.age)
console.log(person2.age)
console.log(person.info.location)
