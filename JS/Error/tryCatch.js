const fn = () => {
    throw new Error('Some error')
}
try {
    console.log(fn())
}
catch (error){
    console.error(error)
    console.log(error.message)
}
console.log('Continue')
