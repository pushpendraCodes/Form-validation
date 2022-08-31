const validation = () => {

    var username = document.getElementById("username")
    // alert(" username")
    var password = document.getElementById("password")
    // alert("pass")
    var email = document.getElementById("email")
    // alert("email")
    var mobile = document.getElementById("mobile")
    // alert("mobile")
    var userError = document.getElementById("userError")
    // alert("u err")
    var passError = document.getElementById("passError")
    // alert("p err")
    var emailError = document.getElementById("emailError")
    // alert(" e err")
    var mobileError = document.getElementById("mobileError")
    // alert(" m erro")



    var check_user = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/


    var check_pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
    var check_email = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
    var check_mobile = /^(\+\d{1,3}[- ]?)?\d{10}$/

    // user----validation

    

  
   if( check_user.test(username.value)){
    
    
    userError.innerHTML = ""
   }
   
   else{
    userError.innerHTML = ' ****username must be 8-20 character long'
    username.style.border = ' 1px solid red'

   }  

//    password--validation
   if( check_pass.test(password.value)){
    
    passError.innerHTML = ""
   }
   else{
         
    passError.innerHTML = '****password must be 8-16 character long '
    password.style.border = ' 1px solid red'
   }
//    if( check_pass.match(password.value)){
    
//     passError.innerHTML = ""
//    }
//    else{
         
//     passError.innerHTML = ' Enter valid password'
//    }


//    email---validation

   if(check_email.test(email.value)){
    
    emailError.innerHTML = ""
   }
   else{
         
    emailError.innerHTML = ' ****Enter valid email'
    email.style.border = ' 1px solid red'
   }


//    mobile---validation
   if(check_mobile.test(mobile.value)){
    
    mobileError.innerHTML = ""
   }
   else{
         
 mobileError.innerHTML = ' ****mobile no must be 10 digit long'
 mobile.style.border = ' 1px solid red'
   }


   if(  userError.innerHTML == "" &  passError.innerHTML == "" & emailError.innerHTML == "" &   mobileError.innerHTML  == ""){
    alert(" your form submitted");
   }

   
}






// check box test---------------

var checks = document.querySelectorAll(".check");

for (var i = 0; i < checks.length; i++){
   checks[i].onclick = selectiveCheck;}
  
function selectiveCheck (event) {
  var checkedChecks = document.querySelectorAll(".check:checked");
  if (checkedChecks.length >= 5){
  document.getElementById("validation").innerHTML = " **** You can't select more than 4 foods"
 
    return false;
   //  document.getElementById("validation").innerHTML = " **** You can't select more than 5 foods"
}}





// Radio button------

const radio = ()=>{
//   
  var Gen = document.getElementsByName("gender")
  console.log( Gen)
  if( Gen[0].checked == true & Gen[1].checked == false){
   document.getElementById("popup").style.display = "block"

  }
  if( Gen[1].checked == true & Gen[0].checked == false) {
   document.getElementById("popup").style.display = "block"

  }
   var cancel = document.getElementById("cancel")
cancel.addEventListener('click', ()=>{
   document.getElementById("popup").style.display = "none"
})

document.getElementById("submit").addEventListener('click' , ()=>{

alert("Thanks🙏 your data saved")
document.getElementById("popup").style.display = "none"

})

   
}



 

