const Array = [1, 2, 3, 4]
sum = 0;
let result = Array.reduce((prev, item, index)=>{
    return prev+item
},0)
console.log(result);


//find max element

const Arr = [1, 3, 4,8 ,5, 7]
let max = Arr[0];
for(let i = 0; i < Arr.length; i++)
{
    if(Arr[i] > max)
    {
        max = Arr[i];
    }
}
console.log('Max = '+max);


//reduce find max

const reduceArr = Arr.reduce((prev, item) =>{
    if(prev < item){
        return item
    }
    else{
        return prev
    }
})

console.log('Max reduce = ' + reduceArr);
