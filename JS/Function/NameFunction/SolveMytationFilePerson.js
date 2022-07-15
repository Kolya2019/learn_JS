//Original Person.js
const personOne = {
    name: 'Kolya',
    age: 20
}
function increasePersonAge(person) { // происходит мутирования
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age +=32
    return updatedPerson
}
const updatedPerson =  increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPerson.age)