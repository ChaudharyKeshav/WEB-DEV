// //async function always returns a promise
// //async wait
// async function greet(){
//     return "keshav";
// }
// const respone =greet();
// // console.log(greet());
// respone.then((data)=>console.log(data));



// let promise=new Promise((resolve, reject)=>{
//     let success=true;
//     if(success){
//         resolve(`operation is executed`);
//     }else{
//         reject(`operation Failed.`)
//     }
// });

// promise
//     .then(result => console.log(result))
//     .catch(error => console.error(error))
//     .finally(final =>console.log('done!'))

// 1. way to do this
// fetch("https://api.github.com/users")
//     .then((respone)=>respone.json())
//     .then((data)=>console.log(data));


// 2. second way to do this 
//here java script is waiting and not moving ahead increaing the execution time
// const response= await fetch("https://api.github.com/users");
// const data = await response.json();
// console.log(data);
//console.log("i am exected now");

async function github(){
    const response= await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);
}
github();
console.log("i am exected now");


