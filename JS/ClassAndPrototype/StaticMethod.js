class com {
  constructor(text) {
      this.text = text
      this.votesQty = 0
  }
  upvote(){
      this.votesQty +=1
  }
  static mergeCom(first, second){
      return first + second
  }
}

console.log(com.mergeCom(2, 3))