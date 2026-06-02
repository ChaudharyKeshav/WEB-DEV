//Array

let marks=[100,50,80,70,90];
console.log(marks);
console.log(marks.length);
let arr=[true, `keshav`,56,` `];
console.log(typeof arr);


 //Push :: insert element at the end
 arr.push(90);
 console.log(arr);

 //pop: delete element from end
 arr.pop();
 console.log(arr);

//unshift inserts an element in the beginning
//**not recommended because of high time complexity due to shift all the elements */
arr.unshift(100);
arr.unshift(899);
console.log(arr);

//shift deletes the element from the beginning
//**not recommended because of high time complexity due to shift all the elements */

arr.shift();
console.log(arr);


