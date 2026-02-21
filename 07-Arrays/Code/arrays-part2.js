// map()
// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.map(function(item,index){
//     return item*item;
// })
// console.log(arr1);
// let arr1 = [];
// for(let i = 0; i < arr.length; i++){
//     arr1[i] = arr[i]*3; 
// }
// console.log(arr1);


// filter()

// let arr = [1,2,3,4,5];
// let arr1 = arr.filter((item,index)=> {
//     return item%2===0
// })
// console.log(arr1);

// let arr1 = arr.filter((item,index)=>{
//     return item % 2 !== 0
// })
// console.log(arr1);


// Reduce()
// let arr = [1,2,3,4,5,6,7,8,9];
// let sum = arr.reduce(function(total,item,index){
//     return total += item;
// },10)
// console.log(sum);


// sort
// let arr = [3,6,4,43,9,876,65,5,908];
// arr.sort(function(a,b){
//     return a - b;
// })
// console.log(arr);


// find
// let arr = [1,2,3,4,5,6,7];
// let a = arr.find((item,index)=>{
//     return item % 2 === 0;
// })
// console.log(a);


// findIndex()
// let arr = [1,2,3,4,5,6,7];
// let a = arr.findIndex((item,index)=>{
//     return item % 2 === 0;
// })
// console.log(a);


// some()
// let arr = [1,2,3,4,5,6,7,8,9];
// let a = arr.some((item,index)=>{
//     return item>9
// })
// console.log(a);


// every
// let arr = [1,2,3,4,5,6,7,8,9];
// let a = arr.every((item,index)=>{
//     return item>7
// })
// console.log(a);


// reverse
// let arr = [1,2,3,4,5,6,7,8,9];
// let a = arr.reverse();
// console.log(a);


// join() & split()
// let arr = ['a','p','p','l','e'];
// let str = arr.join('-');
// let arr1 = str.split('-');
// console.log(arr1);
// console.log(str);


// concat()
// let arr = [1,2,3];
// let arr1 = [4,5,6];
// let arr2 = [7,8,9];
// let arr3 = arr.concat(arr1,arr2);
// console.log(arr3);


// flat()
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     ['a','g']
// ]
// let arr1 = arr.flat(1);
// console.log(arr1);

// let arr = [
//     [3,[4,[5,[6,[7,[8]]]]]],
//     [[[[[[[[[43]]]]]]]]]
// ]
// let arr1 = arr.flat(Infinity);
// console.log(arr1);
