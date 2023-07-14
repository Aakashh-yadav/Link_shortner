let shortedurl = document.getElementById("shorturl");
let cpy=document.getElementById("copy");
cpy.onclick = ()=>{
    shortedurl.select();
    window.navigator.clipboard.writeText(shortedurl.value);
}
