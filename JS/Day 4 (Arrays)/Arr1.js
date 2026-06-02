// Iteration in Array

// let arr=[10,20,40,89,70];

// //for loop
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// //forOf loop
// for(let num of arr){
//     console.log(num);
// }


// //important 
// //as Arrays are copied form refrence 
//  let nums1=[1,2,3,4,5,6,7,8];
//  let nums2=nums1;
//  nums2.push(100);
//  console.log(nums1);


// object(non-Primitive):Copy by refernce hote hai
//This will give Error because Const ristrict arr to 
//resign new arr, but still we can mutate the array
//  const arr=[1,3,5,6,7,7];
//  arr=[45,67,84,54];
//  arr[0]=99;


// // Slice vs Splice
// let nums1=[1,2,3,4,5,6,7,8];
//   //slice just slice the arr but don't actually deletes the elements from orignal Array 
// const nums2=nums1.slice(1,5);
// console.log(nums1);
//   //Splice delete the Element deletes the elements from the orignal Array
// const nums3=nums1.splice(1,3,'Keshav');
// console.log(nums1);


