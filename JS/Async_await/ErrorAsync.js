async function asFun (){
 throw new Error('Error')
}

asFun()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))
