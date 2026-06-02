const grandparent=document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{
    console.log(e.target); //retruns the element which triggered the event
    // e.stopPropagation();
    console.log("grandparent is clicked");
})
const parent=document.getElementById("parent");
parent.addEventListener('click',(e)=>{
    // console.log(e);
    // e.stopPropagation();
    console.log("parent is clicked");
})
const child=document.getElementById("child");

// e is the object created for Event
child.addEventListener('click',(e)=>{
    // console.log(e);
    // e.stopPropagation;
    console.log("child is clicked");
})


// (true)capture phase on hai: Top se down aaoge : us time pe event ko trigger kar diya jaayga
// (false, Default)capture phase off hai: Evwnt hao usko down to up(bUbbling Phase bolte hai), tab ttrigger kr diya jaayga










