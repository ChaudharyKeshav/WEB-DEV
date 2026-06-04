// function createElement(tag, attribute,children){
//     const element=document.createElement(tag);
//     element.textContent=children;

//     for(const key in attribute){
//         element.setAttribute(key, attribute[key]);
//     }
//     return element;
// }


// const element=createElement('h1',{className:'element',id:'first'},"hellow from keshav ");

// // const element1=document.createElement('h1');
// // element1.textContent=`learning React from Scratch`;
// // element1.id='first';
// // element1.className='element';
// // // element1.style.color="pink";


// // const element2=document.createElement('h2');
// // element2.textContent=`still learning React from Scratch`;
// // element2.id='first';
// // element2.className='element';
// // // element2.style.color="pink";

// const root=document.getElementById('root');
// root.append(element);
// // root.append(element2);


import { useState } from "react";
function MyButton(){
    const [count ,setCount]=useState(0);

    function handleClick(){
        setCount(count+1);
    }

    return(
        <button onClick={handleClick}>
            Click {count} times
        </button>
    );
}