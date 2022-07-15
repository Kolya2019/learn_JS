//Original Mytation.js
//этот метод  полностю решает мутацию
const person = {
    name: 'Kolya',
    age: 21,
    info: {
        location: 'Ukraine'
    }
}
const person2 = JSON.parse(JSON.stringify(person)) //Конвертируем в строку
// и потом парсим
person2.name ='Alyona'
person2.info.location = 'Yes'
console.log(person.name)
console.log(person2.name)
console.log(person.info.location)
console.log(person2.info.location)