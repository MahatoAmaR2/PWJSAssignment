
function verify(){
   let password = document.getElementById("password").value;
   let cpassword = document.getElementById("c-password").value;

   // password not be empty
     if (password=="") {
        alert("password can not be empty");
        return false;
     }  
   //   password must be 8 char 
     if(password.length<8){
      alert("8 char");
      return false;
     }
   //   match password 
    if(password!=cpassword){
      console.log("Password didn't match. Password validation unsuccessful")
      return false;
    }else{
      console.log("Password Matched. Password validation Successful.")
    }
    };