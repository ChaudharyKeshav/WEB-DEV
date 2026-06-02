// const result=document.getElementById('result');


setInterval(()=>{
    const current=Date.now();
    const olympic=new Date(2028,7,14).getTime();
    let result=olympic-current;
    function msToTime(ms) {
    let years = Math.floor(ms / 31536000000);              // 1 year ≈ 31,536,000,000 ms (365 days)
    let days = Math.floor((ms % 31536000000) / 86400000);  // 1 day = 86,400,000 ms
    let hours = Math.floor((ms % 86400000) / 3600000);     // 1 hour = 3,600,000 ms
    let minutes = Math.floor((ms % 3600000) / 60000);      // 1 minute = 60,000 ms
    let seconds = Math.floor((ms % 60000) / 1000);         // 1 second = 1,000 ms

    return `${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`;
}
    const div=document.getElementById('time');
    div.textContent=msToTime(result);

},1000)






