let arrNumbers = []
function addNumber() {
    let inputNumber = document.getElementById('inputNumbers');
    arrNumbers.push(inputNumber.value);
    if(inputNumber.value!==""){
        inputNumber.value="";
    }
   let set = new Set(arrNumbers);
console.log(set);
}