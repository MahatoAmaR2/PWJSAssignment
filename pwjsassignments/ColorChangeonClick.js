let button = document.getElementById("button");

let colorName = ["red", "yellow", "green", "blue", "#c0c0c0", "pink", "cyan", "teal", "coral"];

function colorChanger() {
    let res = Math.floor(Math.random()*colorName.length);
    document.body.style.backgroundColor=`${colorName[res]}`
    console.log(res);
}
button.addEventListener("click",
colorChanger
)
colorChanger()