const post = {
    title: 'My post',
    likesQty:5
}
console.log(post)
console.log(JSON.stringify(post)) //convert js for JSON

const postStringified = JSON.stringify(post)

console.log(JSON.parse(postStringified)) //convert JSON for JS

