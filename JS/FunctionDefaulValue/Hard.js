const newPost = (post, addedAt = Date())=>({
    ...post,
    addedAt
})
const firstPost = {
    id:1,
    autors:'Kolya'
}
console.table(newPost(firstPost))
