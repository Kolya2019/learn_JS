const name = 'Kolya'
const postsQty = 20

const userProfile = {
    name: name, //properties:key
    postsQty: postsQty,//properties:key
    hasSinedAgreement: false
}
console.table(userProfile)


// Сокращенный вид


const userProfile1 = {
    name,//key
    postsQty,//key
    hasSinedAgreement: false
}
console.table(userProfile1)