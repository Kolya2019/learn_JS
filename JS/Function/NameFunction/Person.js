const personOne = {
    name: 'Kolya',
    age: 20
}
function increasePersonAge(person) { // происходит мутирования
    person.age +=7
    return person
}
increasePersonAge(personOne)
console.log(personOne.age)