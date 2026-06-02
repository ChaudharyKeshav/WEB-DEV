// const newElement1=document.createElement("h2");
// newElement1.textContent="Are used to manuplate data";
// newElement1.id="second";



// const element=document.getElementById("first");
// element.after(newElement1);
// // newElement1.style.color="white";
// // newElement1.style.backgroundColor="black";



// const newElement2=document.createElement("h2");
// newElement2.textContent="It Includes Create, Update, Read and Delete";
// newElement2.id="third";
// // newElement2.className="operations"
// newElement2.classList.add("operations");
// newElement2.classList.add("manupulation");

// newElement1.after(newElement2) 


// //creating elements and inserting them inside UnorderList
// const list1=document.createElement("li");
// list1.textContent="Update";
// const list2=document.createElement("li");
// list2.textContent="Read";
// const list3=document.createElement("li");
// list3.textContent="Delete";
// const list4=document.createElement("li");
// list4.textContent="Create";
// const unorderedElement=document.getElementById("listing");
// unorderedElement.append(list1,list2); // Append insert elements in a list (in the end)
// unorderedElement.prepend(list3);// Prepend insert elements in a list (in the beginning)
// list3.after(list4);



const arr=["Create","Read","Update","Delete"];
const unorderList=document.getElementById("listing");
const fragment=document.createDocumentFragment();
for(let opr of arr){
    const list=document.createElement("li");
    list.textContent=opr;
    fragment.append(list);
}
 unorderList.append(fragment);

// const s1=document.getElementById("first");
// s1.remove();
































