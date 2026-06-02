/*inner() function apne outer function ke variables ko yaad rakhta hai, 
chahe outer function execute ho chuka ho. Ye memory ko hold karke rakhta hai
 — isi ko closure bolte hain.*/

function outer(){
    let count=0;

    function inner(){
        count++;
        console.log(count);
    }

    return inner; // Here Outer function is returning inner function as a refrence.
}

const counter=outer(); 
/* Here outer function is executed and should be deleted from the memory, 
But still is able to class count which is in scope of deleted function(outer()),
it simple holds the variable out outer functions in heap memory..*/
counter();
counter();
counter();


let user={
     balance:500,
    deposit: function(amount){
        if(typeof amount==="number" && amount>0){
            this.balance+=amount;
            return this.balance;
        } 
    },
    withdraw: function(amount){
        if(typeof amount==="number" && amount>0 && balance>=amount){
            this.balance-=amount;
            return this.balance;
        } 
    },
    getBalance: function(){
        return this.balance;
    }
}
user.balance="keshav";
console.log(user.getBalance());