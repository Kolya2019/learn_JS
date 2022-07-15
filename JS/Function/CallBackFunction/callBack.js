//С помощью одной функции вызывается другая
function anotherFunction(){
    console.log('Hello')
}
function fnWithCallBack(callbackFunction){
    callbackFunction()
}
fnWithCallBack(anotherFunction)