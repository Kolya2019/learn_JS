const fn = () => {
    throw new Error('Some error')
}
console.log(fn())
console.log('cont')
