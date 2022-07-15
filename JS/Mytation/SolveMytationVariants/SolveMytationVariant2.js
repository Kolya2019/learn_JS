//Original Mytation.js
//И этот метод решение мутации предотвращает только мутацию в корне
const person = {
    name: 'Kolya',
    age: 21,
    info: {
        location: 'Ukraine'
    }
}
const person2 = {...person} //оператор разделяет объект на свойства
//
person2.name ='Alyona'

console.log(person.name)
console.log(person2.name)
