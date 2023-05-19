
let btnEl = document.getElementById("button");

let arrayListItems = [
    "",
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Version Control and Git",
  "Getting Started with JavaScript"
];

let list = 0;
function lists() {
    let ol = document.getElementById("myList");
    if(list>=8){
        alert("all items have been added.")
    }else{
        list++;
        let li = document.createElement("li");
         li.innerText=arrayListItems[list];
         ol.appendChild(li);
    }
}

btnEl.addEventListener("click",lists)