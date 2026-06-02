//forEach loop, Filter, reducer, map, set


// 1. ForEach Loop

// const arr=[10,20,30,40,45,50];
// let sum=0;
// arr.forEach((number)=>{
//     // console.log(number);
//     sum+=number;
// })
// console.log(sum);



// 2. Filter

// arr.forEach((number)=>{
//     if(number>25){
//         console.log(number);
//     }
// })
// const arr=[10,20,30,40,45,50];
// const newArr=arr.filter((number)=> number>25);
// console.log(newArr);




// how filter() works

// const arr=[10,20,30,40,45,50];
// // arr.filtering=function(callback){ // This will work on arr only
// Array.prototype.filtering=function(callback){  //this General for all Arrays    const ans=[];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const compare=(number)=> number>25;
// const newArr=arr.filtering(compare);
// console.log(newArr);



// 3. Map

// const arr=[10,20,30,40,45,50];
// const newArr =arr.map((num)=>num*2);
// console.log(newArr)


const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// const resultArr=products.filter((product)=>product.price>50).sort((a,b)=>b.price-a.price);
// console.log(resultArr);

// const resultArr=products.map((product)=>({name:product.name, price:product.price}));
// console.log(resultArr);

// const resultArr=products.filter((product)=>product.price>50).sort((a,b)=>b.price-a.price).map((product)=>({name:product.name, price:product.price}));
// console.log(resultArr);



// // CustomMapping function
// const condition=(number)=> number*2;
// Array.prototype.mapping=function(callback){
//     const ans=[];
//     for(let num of this){
//         const output=callback(num)
//          ans.push(output);
//     }
//     return ans;
// }
// const arr=products.mapping((product)=>product.price*2);
// console.log(arr);


// 4. Reducer
const totalSum=products.reduce((accumulator,currentValue)=>{
    if(currentValue.inStock)
        return accumulator+currentValue.price;
    else
        return accumulator;
},0);
console.log(totalSum);


// 5. Set (Data Structure): Enforce uniqueness

// const arr=[10,20,30,50,40,30,20,10,50,60]
// console.log(arr);

// const set=new Set(arr);
// set.add(11);
// console.log(set);
// console.log(set.has(50))
// set.clear();

// const email=["keshavrr21#","keshavrr21#","keshavrr21#"];
// const s1=new Set(email);
// //output in simple form
// console.log(s1);
// //output in array form
// const uniqueEmail=[...new Set(email)];
// console.log(uniqueEmail)

// 6. Data Structure MAP

const map=new Map([
    ["keshav",true],
    [false,4],
    [[10,30,20],"ram"],
    [{name:"keshav",roll:"23BCS10481"},"user"]
]);
map.set({name:"kanik",roll:"23BAI7208"})
console.log(map);
