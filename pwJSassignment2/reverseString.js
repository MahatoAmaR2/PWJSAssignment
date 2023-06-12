console.log("radhe radhe");

let submit = document.getElementById("submit")
function keyUp() {
  let inputEl = document.getElementById("input").value;
//   console.log(inputEl);
  setTimeout(() => {
    const reversedString = inputEl.split("").reverse().join("");
    console.log(reversedString);
  }, 2000);

}
submit.addEventListener("click", keyUp);
// let revStr = strValue.split("").reverse().join("");
// console.log(revStr);
