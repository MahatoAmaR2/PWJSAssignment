let arr = [2, 4, 5, 12, 34, 67, 3456, 6, 8]
let max = Math.max(...arr);
let min = Math.min(...arr);
let arr2 = [];
arr2.push(max,min);
let obj = {};
arr2.forEach((e,i)=>{
    obj[i]=e; 
});
obj['Max']=obj['0'];
delete obj['0'];
obj['Min']=obj['1'];
delete obj['1'];
console.log(obj);