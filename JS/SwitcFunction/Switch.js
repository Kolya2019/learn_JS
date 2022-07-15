const result = (a, b, f) => {
    let c
    c = a + b - f
    return c
}
setTimeout(()=>console.log(result(2, 2, 4)), 1000)
