function checkForm(){
var error=false;
var errorText="";
var contactName = document.getElementById("contactName");
var contactEmail = document.getElementById("contactEmail");

if(contactName.value==""){
    errorText+=" - Name and Surname;\n";
    document.getElementById("contactName").className = "form-control is-invalid";
    document.getElementById("errorName").innerHTML = "You have to write your Name and Surname";
    error=true;
} else {
    document.getElementById("contactName").className = "form-control is-valid";
}

if(contactEmail.value == ""){
    errorText+=" - Email;\n";
     document.getElementById("contactEmail").className="form-control is-invalid";
     document.getElementById("errorEmail").innerHTML="You have to write your email ";
    error=true;
    } else {
    var email = contactEmail.value;
    var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
    if(regex.test(email)==false) 
    { 
        var c=-1;
        
    document.getElementById('contactEmail').className='form-control is-invalid';
    document.getElementById('errorEmail').innerHTML='Email is not correct';
    error=true;
    } 
    else {
    document.getElementById('contactEmail').className='form-control is-valid';
    }
    }

    if(c==-1){
        alert("\tWrite correct email");
        return false;
    }

if(!error){
    return true;
} else {
    alert("You didn't fill the following fields :\n" + errorText);
    return false;
}
}

function checkEmail(){
    var contactEmail = document.getElementById("contactEmail");
    if(contactEmail.value == ""){
        document.getElementById("contactEmail").className="form-control is-invalid";
        document.getElementById("errorEmail").innerHTML="You have to write your email";
       
       } else {
       var email = contactEmail.value;
       var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
       if(regex.test(email)==false) 
       { 
       document.getElementById('contactEmail').className='form-control is-invalid';
       document.getElementById('errorEmail').innerHTML='Email is not correct';
      
       } 
       else {
       document.getElementById('contactEmail').className='form-control is-valid';
       }
       }

}
