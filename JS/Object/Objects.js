const objectA = {
    a: 10,
    b: true
}
const copyOfA = objectA
copyOfA.a = 20
copyOfA.c = 'dsa'
objectA.c = 'wp'
copyOfA.d = 21
copyOfA.result = ((copyOfA.d - copyOfA.a) * (2 - copyOfA.a))/2.1
copyOfA.word = 'gg '
copyOfA.wordResult = copyOfA.word + copyOfA.c
console.table(objectA)
