function pinfo() {
let nameEl = document.getElementById("uname").value;
let ageEl = document.getElementById("uage").value;
let streetEl = document.getElementById("ustreet").value;
let cityEl = document.getElementById("ucity").value;
let stateEl = document.getElementById("ustate").value;

let person = {
    name: nameEl,
    age: ageEl,
    address: {
      street: streetEl,
      city: cityEl,
      state: stateEl,
    },
  };
let {name: pName, address:{street:pStreet}} = person

 let pObj =()=> {
    return{
    name : pName,
    street : pStreet,
}
 };
 console.log(pObj());
}


