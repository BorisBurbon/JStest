function formValidation() {
    /*************************username*************************/

    let reg=/^[a-zA-Z]+$/;
    let name=document.fname.firstname.value;

    if (name=="") {
        document.getElementById('error_field').innerHTML="Enter Your Name";
        document.getElementById('error_field').style.color = 'red';
        document.fname.firstname.focus();
    }
    else if(reg.test(name)!=true) {
        document.getElementById('error_field').innerHTML="Only Characters";
        document.getElementById('error_field').style.color = 'red';
        document.fname.firstname.focus();
    }
    else {
        document.getElementById('error_field').innerHTML="ok";
        document.getElementById('error_field').style.color = 'green';
    }

    /*************************password*************************/

    let pattern1=/[0-9]/;
    let pattern2=/[a-z]/;
    let pattern3=/[A-Z]/;
    let pattern4=/.*[!@#$%^&*() =+_-]/;
    let pwd=document.fname.password.value;
    if(pwd=="") {
        document.getElementById("error_pass").innerHTML="Enter your password";
        document.fname.password.focus();
    }
    else if(pwd.length<5) {
        document.getElementById('error_pass').innerHTML="mimum 5";
        document.getElementById('error_pass').style.color = 'red';
    }
    else if(pattern1.test(pwd)!=true) {
        document.getElementById("error_pass").innerHTML="atleast one no";
        document.getElementById('error_pass').style.color = 'red';
    }
    else if(pattern2.test(pwd)!=true) {
        document.getElementById("error_pass").innerHTML="atleast one lowercase";
        document.getElementById('error_pass').style.color = 'red';
    }
    else if(pattern3.test(pwd)!=true) {
        document.getElementById("error_pass").innerHTML="atleast one uppercase";
        document.getElementById('error_pass').style.color = 'red';
    }
    else if(pattern4.test(pwd)!=true) {
        document.getElementById("error_pass").innerHTML="atleast one Special";
        document.getElementById('error_pass').style.color = 'red';
    }
    else {
        document.getElementById('error_pass').innerHTML="ok";
        document.getElementById('error_pass').style.color = 'green';
    }

    /*************************confirm*************************/

    let cp=document.fname.cpwd.value;
    if(cp=="") {
        document.getElementById('error_cp').innerHTML="Enter UR Password"
        document.getElementById('error_cp').style.color = 'red';
    }
    else if(cp!==pwd) {
        document.getElementById('error_cp').innerHTML="Password Not Matched";
        document.getElementById('error_cp').style.color = 'red';
    }
    else {
        document.getElementById('error_cp').innerHTML="ok";
        document.getElementById('error_cp').style.color = 'green';
    }

    /*************************Email*************************/

    let email=document.fname.email.value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email=="") {
        document.getElementById("error_email").innerHTML="please enter the email id";
        document.fname.email.focus();
        document.getElementById("error_email").style.color = 'red';
    }
    else if(!email.match(mailformat)) {
        document.getElementById("error_email").innerHTML="please enter the correct format";
        document.fname.email.focus();
        document.getElementById("error_email").style.color = 'red';
    }
    else {
        document.getElementById("error_email").innerHTML="ok";
        document.getElementById("error_email").style.color = 'green';
    }


    /*************************checkbox*************************/

    if((document.fname.checkbox.checked == false )) {
        document.getElementById("error_check").innerHTML="select the checkbox";
        document.getElementById("error_check").style.color = 'red';
    }
    else {
        document.getElementById("error_check").innerHTML="ok";
        document.getElementById("error_check").style.color = 'green';
    }

}