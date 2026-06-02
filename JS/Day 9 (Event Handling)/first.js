// function handleClick(){
//     const element=document.getElementById("first");
//     element.textContent="How are You";
// }

//  const element=document.getElementById("first");

// element.onclick=function handleClick(){
//     element.textContent="How are You";
// }
// // Here in this method latest call will always overide the prvious call

// element.onclick=function handleClick(){
//     // element.textContent="you the best!!!!!";
//     element.style.backgroundColor="pink";
// }





// With addEventListener we can pass multiple call without overiding pervious one's
// here addEventListener is method which allows it to pass the call but not overide the previous one

// const defaultText=()=>{
//       element.textContent="Another Method of do event listing";
// }

// element.addEventListener("click",defaultText);

// // element.addEventListener('click',()=>{
// //      element.textContent="Another Method of do event listing";
// // })

// element.addEventListener('mouseenter',()=>{
//      element.textContent="click me";
// })

// element.addEventListener('mouseleave',defaultText)

// element.addEventListener('dblclick',()=>{
//      element.style.backgroundColor="orange";
// })


// const child1=document.getElementById("child1");
// child1.addEventListener("click",()=>{
//     child1.textContent="I am cliked";
// })

// const parent=document.getElementById("parent");
// // console.log(parent.children);
// parent.addEventListener('click',(e)=>{
//     // console.log(e.target);
//     e.target.textContent="i am clicked";
// })

// for(let child of parent.children){
//     child.addEventListener("click",()=>{
//         child.textContent="i am Clicked";
//     })
// }







// removing event Listener

const parent=document.getElementById("parent");

function handleClick(e){
    e.target.textContent="i am clicked";
}

parent.addEventListener('click',handleClick);
// parent.removeEventListener('click',handleClick);



































