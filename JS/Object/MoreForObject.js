const myCity = {
    city: 'Kherson',
    info: {
        popular: true,
        country: 'Ukraine',
        people: 100
    }
}
console.log(myCity.info.people)
myCity.info.people ++
console.log(myCity.info.people)
delete myCity.info.people //delete item in object
myCity['location'] = 'Europa'
const president = 'Presedent of Ukrains'
myCity[president] = 'Zelenskiy'
console.log(myCity)