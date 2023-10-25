function validateForm() {
  let name= document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let tnc = document.getElementById("tnc_checkbox");
  let skin = document.getElementById("Skin");
  let body = document.getElementById("Body");
  let serum = document.getElementById("Serum");

  if(name.length==0){
    alert("Please input a username")
  }else if(name.length<2 || name.length>20){
    alert("Username must be between 2 and 20 characters")
  }else if (!email.endsWith("@gmail.com")&&!email.endsWith("@yahoo.com")) {
    alert("Email must end with @gmail.com or @yahoo.com");
  }else if(phone.length==0){
    alert("Please enter a phone number")
  }else if (isNaN(phone)) {
    alert("Phone number must only contain digits!");
  }else if (!tnc.checked) {
    alert("You MUST agree to the terms and conditions to subscribe!");
  }else if (!skin.checked&&!body.checked&&!serum.checked){
    alert("Please pick a preferenced product")
  }
}