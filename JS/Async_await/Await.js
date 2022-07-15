const timerPromise = () =>
  new Promise((resolve, reject) =>
  setTimeout(()=>resolve(),2000))
const asyn = async () =>{
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended, await a have = ', endTime - startTime)
}
asyn()