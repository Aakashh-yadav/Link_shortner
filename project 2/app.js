let btn=document.getElementById("btn1");
btn.addEventListener('click',short);
async function short(){
    const lngurl=document.getElementById("longurl").value;
    const result=await fetch(` https://api.shrtco.de/v2/shorten?url=${lngurl}`)
    const data= await  result.json();
    let shrturl=document.getElementById("shorturl");
    shrturl.value=data.result.short_link;
};