let p = document.getElementById("paragrap");
 p.innerHTML = p.innerText.split(" ").map(word=>{
    return word.length>8?`<span style="background-color: yellow">${word}</span>`: word;
}).join(' ');