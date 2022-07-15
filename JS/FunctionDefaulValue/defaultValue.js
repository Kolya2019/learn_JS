let r = (value, mul = 1) => {
    return value * mul
}
setTimeout(()=>console.log(r(1, 2)), 1000)