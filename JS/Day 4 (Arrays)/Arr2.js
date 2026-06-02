// ## 1. ADDITION OF MULTIPLE ARRAYS
const arr1=[10,20,30,40,50];
const arr2=['Keshav',45,true];
const arr3=[90,4,true];


// arr3.push(arr2);
// console.log(arr3);

// //  # Method 1
// const arr4=arr1.concat(arr2,arr3);
// console.log(arr4);



// // #Method 2 using Spread Operator **IMPORTANT**
// const arr4=[...arr1,...arr2,...arr3];
// console.log(arr4);

// //## 2. ARRAY TO STRING
// const names=["keshav" ,'karna','dikshit'];
// console.log(names.toString());
// console.log(names.join(" "));


// // ## 3. SEARCHING
// const names=["keshav" ,'karna','dikshit'];
//  //  indexOf gives the index of element
// console.log(names.indexOf('keshav'));
//  // includes give the true or false value 
// console.log(names.includes('keshav'));



// // ##  4. SORTING 
// // sorting happens on the bases of Askie values
// const names=["keshav" ,'karna','dikshit','mohit','rohit'];
// console.log(names.sort()); 
// console.log(names.reverse());



// const arr=[102,80,32,91];
// // it will sort like [ 102, 32, 80, 91 ] Because it sorts using Askiee value
// //it consider each element of arr as a string even thought it is a number
// // for Example [ '102', '32', '80', '91' ]
// arr.sort();
// //to sort number use this, it compaires a and b and substracts a-b 
// //it value is -ve then a is smaller b is greater
// //if do b-a instead of a-b then we will get descending order of sorting
// arr.sort((a,b)=>a-b);
// arr.sort((a,b)=>b-a);
// console.log(arr); 

