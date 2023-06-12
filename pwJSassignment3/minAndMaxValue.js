console.log("har har mahadev");

let numbers = [];
const addValue =()=>{
    let inputNumber = document.getElementById('inputNumber');
    numbers.push(inputNumber.value);
    if (inputNumber.value!="") {
        inputNumber.value="";
    }
    console.log(numbers);
    let minValue = Math.min(...numbers)
    let maxValue = Math.max(...numbers)
    function minandmax() {
       return {
           min : minValue,
           max : maxValue,
        }
    }
    console.log(minandmax());
}
