const UL=document.getElementById("listing");

// const list1=document.createElement("li");
// list1.textContent="Bachelors in Engineering";
// UL.append(list1);

const InfoArr=["Arts and Commerce","Law LLB","Fashion Design","BBA","MBA"];
const fragment=document.createDocumentFragment();
for(let course of InfoArr){
    const list=document.createElement("li");
    list.textContent=(course);
    fragment.append(list);
}
UL.append(fragment);









































