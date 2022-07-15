const Arr = [1, 3, 4,8 ,5, 7]
let max = Arr[0];
let index = 0;
for(let i = 0; i < Arr.length; i++)
{
    if(Arr[i] > max)
    {
        max = Arr[i];
        index = i;
    }
}
console.log('Max = '+max);
console.log(index)

//reduce search index array

let searchItem = Arr.reduce((prev, item) =>{
    if(item > prev[1]){
        return [index, item]
    }else{
        return prev
    }
}, [0, Arr[0]])

console.log(searchItem)