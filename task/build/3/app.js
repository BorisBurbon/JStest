"use strict";

/*************************username*************************/
var userName = function userName() {
    var reg = /^[a-zA-Z]+$/;
    var name = document.fname.firstname.value;
    var field = document.getElementById('error_field');
    if (name === "") {
        field.innerHTML = "Enter Your Name";
        field.style.color = 'red';
        document.fname.firstname.focus();
    } else if (reg.test(name) !== true) {
        field.innerHTML = "Only Characters";
        field.style.color = 'red';
        document.fname.firstname.focus();
    } else {
        field.innerHTML = "ok";
        field.style.color = 'green';
    }
};
/*************************password*************************/
var pattern1 = /[0-9]/;
var pattern2 = /[a-z]/;
var pattern3 = /[A-Z]/;
var pattern4 = /.*[!@#$%^&*() =+_-]/;

var userPassword = function userPassword() {
    var pwd = document.fname.password.value;
    var error = document.getElementById('error_pass');
    if (pwd === "") {
        error.innerHTML = "Enter your password";
        document.fname.password.focus();
    } else if (pwd.length < 5) {
        error.innerHTML = "mimum 5";
        error.style.color = 'red';
    } else if (pattern1.test(pwd) !== true) {
        error.innerHTML = "atleast one no";
        error.style.color = 'red';
    } else if (pattern2.test(pwd) !== true) {
        error.innerHTML = "atleast one lowercase";
        error.style.color = 'red';
    } else if (pattern3.test(pwd) !== true) {
        error.innerHTML = "atleast one uppercase";
        error.style.color = 'red';
    } else if (pattern4.test(pwd) !== true) {
        error.innerHTML = "atleast one Special";
        error.style.color = 'red';
    } else {
        error.innerHTML = "ok";
        error.style.color = 'green';
    }
};

/*************************confirm*************************/
var confirm = function confirm() {
    var pwd = document.fname.password.value;
    var cp = document.fname.cpwd.value;
    var error = document.getElementById('error_cp');
    if (cp === "") {
        error.innerHTML = "Enter UR Password";
        error.style.color = 'red';
    } else if (cp !== pwd) {
        error.innerHTML = "Password Not Matched";
        error.style.color = 'red';
    } else {
        error.innerHTML = "ok";
        error.style.color = 'green';
    }
};

/*************************Email*************************/
var email = function email() {

    var email = document.fname.email.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var error = document.getElementById("error_email");
    if (email === "") {
        error.innerHTML = "please enter the email id";
        document.fname.email.focus();
        error.style.color = 'red';
    } else if (!email.match(mailformat)) {
        error.innerHTML = "please enter the correct format";
        document.fname.email.focus();
        error.style.color = 'red';
    } else {
        error.innerHTML = "ok";
        error.style.color = 'green';
    }
};

/*************************checkbox*************************/
var checbox = function checbox() {
    var error = document.getElementById("error_check");
    if (document.fname.checkbox.checked === false) {
        error.innerHTML = "select the checkbox";
        error.style.color = 'red';
    } else {
        error.innerHTML = "ok";
        error.style.color = 'green';
    }
};

function formValidation() {
    userName();
    userPassword();
    confirm();
    email();
    checbox();
}