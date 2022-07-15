const userProfile = {
    name: 'Kolya',
    coment: null,
    other: false
}
const userInfo = ({name, coment}) => {
    if(!coment){
        return `User ${name} has no coments`
    }
    return `User ${name} has ${coment} coments`
}
let t = userInfo(userProfile)
console.log(t)