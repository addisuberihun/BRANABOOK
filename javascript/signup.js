
var password = document.getElementById("pass");
var icon1 = document.getElementById("icon1");
var password2 = document.getElementById("pass2");
var icon2 = document.getElementById("icon2");

icon1.onclick = () => {
    if (password.type == "password") {
        password.type = "text";
        icon1.src = "photo/eye.png";
    }
    else {
        password.type = "password";
        icon1.src = "photo/closed.png";
    }
}
icon2.onclick = () => {
    if (password2.type == "password") {
        password2.type = "text";
        icon2.src = "photo/eye.png";
    }
    else {
        password2.type = "password";
        icon2.src = "photo/closed.png";
    }
}

var emailId = document.getElementById("email");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@gmail\.[a-zA-Z0-9]{2,3}$/;

let fnameRegex = /^[a-zA-Z][a-zA-Z]{2,}$/;
var fname = document.getElementById("Fname");
let errorfname = document.getElementById("error-fname");

var lname = document.getElementById("lname");
let errorlname = document.getElementById("error-lname");
let lnameRegex = /^[a-zA-Z][a-zA-Z]{2,}$/;


let passRegex = /^[a-zA-Z0-9]{7,14}[@,#]{1,2}$/;
let errorpass = document.getElementById("error-pass");
let errorpass2 = document.getElementById("error-pass2");
//email
function checker() {
    icon.style.display = "inline-block";

    //email validation
    if (emailId.value.match(mailRegex)) {
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = '#2ecc71';
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #12cf4b';
    }
    else if (emailId.value == "") {
        icon.style.display = 'block';
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #d1d3d4';
    }

    else {
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = '#ff2851';
        errorMsg.style.display = 'block';
        emailId.style.border = '2px solid #ff2851';
    }

}
//fname
function fnamefun() {
    icon.style.display = "inline-block";

    //email validation
    if (fname.value.match(fnameRegex)) {
        // icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        // icon.style.color = '#2ecc71';
        errorfname.style.display = 'none';
        fname.style.border = '2px solid #12cf4b';
    }
    else if (fname.value == "") {
        // icon.style.display = 'block';
        errorfname.style.display = 'none';
        fname.style.border = '2px solid #d1d3d4';
    }

    else {
        // icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        // icon.style.color = '#ff2851';
        errorfname.style.display = 'block';
        fname.style.border = '2px solid #ff2851';
    }
}
//lname
function lnamefun() {
    icon.style.display = "inline-block";

    //email validation
    if (lname.value.match(lnameRegex)) {
        // icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        // icon.style.color = '#2ecc71';
        errorlname.style.display = 'none';
        lname.style.border = '2px solid #12cf4b';
    }
    else if (lname.value == "") {
        // icon.style.display = 'block';
        errorlname.style.display = 'none';
        lname.style.border = '2px solid #d1d3d4';
    }

    else {
        // icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        // icon.style.color = '#ff2851';
        errorlname.style.display = 'block';
        lname.style.border = '2px solid #ff2851';
    }

}
function passwordch() {

    icon.style.display = "inline-block";

    //email validation

    if (password.value.match(passRegex)) {
        // icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        // icon.style.color = '#2ecc71';
        errorpass.style.display = 'none';
        password.style.border = '2px solid #12cf4b';
    }
    else if (password.value == "") {
        // icon.style.display = 'block';
        errorpass.style.display = 'none';
        password.style.border = '2px solid #d1d3d4';
    }

    else {
        // icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        // icon.style.color = '#ff2851';
        errorpass.style.display = 'block';
        password.style.border = '2px solid #ff2851';
    }
}
var submit = document.getElementById("submit");
submit.onclick = () => {
    if (mailRegex.test(emailId.value)) {
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = '#2ecc71';
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #12cf4b';
    }
    else if (emailId.value == "") {
        icon.style.display = 'none';
        errorMsg.style.display = 'block';
        emailId.style.border = '2px solid #d1d3d4';
    }
    else {
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = '#ff2851';
        errorMsg.style.display = 'block';
        emailId.style.border = '2px solid #ff2851';
    }
    //fname validation
    if (fnameRegex.test(fname.value)) {
        // icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        // icon.style.color = '#2ecc71';
        errorfname.style.display = 'none';
        fname.style.border = '2px solid #12cf4b';
    }

    else if (fname.value == "") {
        // icon.style.display = 'block';
        errorfname.style.display = 'block';
        fname.style.border = '2px solid #d1d3d4';
    }
    else {
        // icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        // icon.style.color = '#ff2851';
        errorfname.style.display = 'none';
        fname.style.border = '2px solid #ff2851';
    }
    //lname validation

    if (lnameRegex.test(lname.value)) {
        // icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        // icon.style.color = '#2ecc71';
        errorlname.style.display = 'none';
        lname.style.border = '2px solid #12cf4b';
    }
    else if (lname.value == "") {
        // icon.style.display = 'block';
        errorlname.style.display = 'block';
        lname.style.border = '2px solid #d1d3d4';
    }
    else {
        // icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        // icon.style.color = '#ff2851';
        errorlname.style.display = 'none';
        lname.style.border = '2px solid #ff2851';
    }
    //conifrm password
    if (password.value == password2.value) {
        // icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        // icon.style.color = '#2ecc71';
        errorpass2.style.display = 'none';
        pass2.style.border = '2px solid #12cf4b';

    }
    else if (password2.value.match(passRegex) === "") {
        // icon.style.display = 'block';
        errorpass2.style.display = 'block';
        pass2.style.border = '2px solid #d1d3d4';
    }
    else {
        // icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        // icon.style.color = '#ff2851';
        errorpass2.style.display = 'block';
        pass2.style.border = '2px solid #ff2851';
    }

}
