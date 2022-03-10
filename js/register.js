/*
* Judge if text area is null, and formate is false.
*/
function checkName(name){
  if(name=="")
  {
      alert("null");
    return false;
  }
  return true;
  alert("111");
}

function checkEmail(email){
  var pattern = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;

  if(email=="")
  {
    return false;
  }
  else if(!pattern.test(email))
  {
    return false;
  }
  else{
    return true;
  }
}

function checkPassw(password){
  if(password=="")
  {
    return false;

  }
  return true;
}

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;

document.getElementById("name").addEventListener("blur",checkName(name));
document.getElementById("email").addEventListener("blur",checkEmail(email));
document.getElementById("password").addEventListener("blur",checkPassw(password));
