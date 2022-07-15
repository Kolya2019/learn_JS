class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
        this.visited = 0
    }
    upvote(){
        this.votesQty +=1
    }
    visit(){
        this.visited +=1
    }
}

const firstComment = new Comment('Hi')
console.log(firstComment)
firstComment.upvote()
console.log(firstComment)
console.log(firstComment.text)

const second = new Comment('Second')
console.log(second)
second.upvote()
console.log(second)
second.visit()
console.log(second)

//New test
//firstComment.hasOwnProperty()
console.log(firstComment.hasOwnProperty('text'))
console.log(firstComment.hasOwnProperty('votesQty'))
console.log(Comment.hasOwnProperty('upvote'))