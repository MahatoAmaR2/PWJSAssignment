console.log("Radhe Radhe");
let inpEl = document.getElementById("input");
let btnEl = document.getElementById("button");
let listsEl = document.getElementById("lists");


function add() {
    if (inpEl.value=="") {
        alert("Please enter your task")
    } else {
        let li = document.createElement('li')
        li.innerHTML=inpEl.value
        listsEl.appendChild(li);
        inpEl.value="";
    }
}
btnEl.addEventListener("click",add)