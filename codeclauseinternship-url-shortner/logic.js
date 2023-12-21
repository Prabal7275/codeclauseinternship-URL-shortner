let btn = document.getElementById("shorten");

btn.addEventListener('click', short);


 async function short(){
    let longURL = document.getElementById("longurl").value;
    let shorturl = document.getElementById("shorturl");
    const result = await fetch(`https://www.shareaholic.com/v2/share/shorten_link?apikey=8943b7fd64cd8b1770ff5affa9a9437b&url=${longURL}`);
    const data =  await result.json();
    
    shorturl.value= data.data;
    
} 
