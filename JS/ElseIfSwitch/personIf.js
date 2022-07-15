const person = {
    age:20,
    name:'Kolya'
}
const  {name, age} = person
if(!person.name){
    console.log('Don`t have name')
}
else {
    console.log(`Name is user ${name}`)
}