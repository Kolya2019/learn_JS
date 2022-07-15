import {sum, mult } from './modul1.mjs'
import Div from './modal3.mjs'
const resultSum = sum(2, 3)
const resultMult = mult(6, 3)
console.log('Result a*b = ' + resultMult)
console.log('Result a+b = ' + resultSum)

console.log('Result a/b = ' + Div(12, 3))
export {
    resultSum, resultMult
}