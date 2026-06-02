// function twoSum(num1, num2){
//     const sum=num1+num2;
//     console.log(sum);
//     return 0;
// }
// twoSum(1,2);
// console.log(twoSum(1,5));

// function sum(num1, num2){
//     const total=num1+num2;
//     return 0;
// }
// const num=sum(2,1);
// console.log(sum());

//this use of REST(...var) operator (where we can wrap up multiple values in the form of Array)
//it is similar to SPREAD(...var) operator (where we open the data like in case of Array we distructe it)
//both have opposite role

// function sumOfNumbers(...num /*converting input in array form*/){
//     let sum=0;
//     /*Adding all the elements of Array */
//     for( let n of num){
//         sum+=n;
//     }
//     return sum;
// }
// console.log(sumOfNumbers(1,5,5));




//Other ways of declaring Functions

// //2.
// const addNumbers=function(num1, num2){
//     return num1+num2;
// }
// console.log(addNumbers(56,87));




// //3. Arrow function
// // const numsSum=(num1,num2)=>{
// //     return num1+num2
// // }
// const numsSum=(num1,num2)=> num1+num2;
// //for single attribute
// const sqrt= num=> num*num;
// //in case of only one attribute we dont have to write return and braces
// console.log(sqrt(9)); 



// const greeting=()=>{
//     let user={
//         name:"keshav",
//         age:21
//     }
//     return user;
// }
// console.log(greeting());\
       
        //   OR

// const greeting=()=>({name:'Keshav',age:21});
// // when ever we remove { } then conpiler thing that we are returning something like in this case
// // therefore we have to apply ( ) when returning a object so that compiler can know we are returning obj
// console.log(greeting());




// IIFE (Immediately Invoked Function Expression )
//  executed immediately after it’s created
// (function greeting(){
//     console.log("Hello Ji");
// })();

// (()=>{
//     console.log("hello world");
// })();


//CALLBACK
//callback is used to pass a function as argument to another function.
// example
// function greet(){
//     console.log("Hello ji kase hoo aap");
// }
// function dance(){
//     console.log(`I like to dance`);
// }
// function meet(callback){
//     console.log("I am going to meet her Tommorow");
//     callback();
//     console.log("keshav is good boy");
// }
// meet(greet);
// meet(dance);

//callback is use bring reusblility ta function so that it can be used by various other function 
//acording to their need 



// // example 1:
// function zomatoOrderPlaced(){
//     console.log(`payment is completed. Start cooking Order.`)
// }
// function blinketOrderPlaced(){
//     console.log(`Payment is completed. pick the Order`);
// }
// function payment(Amount,callback){
//     console.log(`${Amount} payment has been initiated` );
//     console.log(`payment is recived`);
//     callback();
// }

// payment(5000,zomatoOrderPlaced);
// payment(150,blinketOrderPlaced);


//Example 2:

function sendToKitchen(orderId){
        console.log(`Order #${orderId} has recived, Start Cooking.`)
}
function assignDeliveryBoy(orderId){
        console.log(`Payemnt Done, Assign Delivey Agent`)
}
function processPayment(amount,orderId,onSuccess){
        console.log(`Order #${orderId}: Payment initiated for Rs. ${amount}..`);

        setTimeout(()=>{
                console.log(`Order #${orderId}: Payment reveived Successfully..`)
                onSuccess(orderId);
        },2000);
}
processPayment(2000,"A15f34g62g52",sendToKitchen);
processPayment(2000,"BK726SJKFN",assignDeliveryBoy);