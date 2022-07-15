class Comment {
    constructor(text, text2, age) {
        this.text = text
        this.text2 = text2
        this.age = 'number'
        this.votesQty = 0
        this.vis = 0
    }
    upvote(){
        this.votesQty +=1
    }
    visit(){
        this.vis +=1
    }
}

const first = new Comment('first', 'hi', 3)
const second = new Comment('second', 'i`m', 4)
const third = new Comment('third', 'programmer', 5)
const four = new Comment('ffd', 'fds', 6)

//Void function upvote && visit
first.upvote()
first.visit()
second.upvote()
second.visit()
third.upvote()
third.visit()
four.upvote()
four.visit()

//Log

console.log(first)
console.log(second)
console.log(third)
console.log(four)


