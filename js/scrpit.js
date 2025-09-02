

var loginForm = document.getElementById('login-form');
var userName=document.getElementById('username');
var userNameErr=document.getElementById('username-err');
var userNamesucess=document.getElementById('username-sucess');
var password=document.getElementById('password');
var passworderr=document.getElementById('password-err');
var passwordsucess=document.getElementById('password-sucess');

/* User Name */
userName.addEventListener('input',function(e) {

    var regex = /^[\w]{8}$/;
    var currentValue =e.target.value;

    var res = regex.test(currentValue);

    if (res) {
        userNameErr.style.display='none';
        userNamesucess.style.display='block';
    }

    else 
        {
        userNameErr.style.display='block';
         userNamesucess.style.display='none';
        
    }
});

/*  Password  */
password.addEventListener('input',function(e) {

    var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*["!@#$%^&*()_"]).{8}$/;
    var currentValue =e.target.value;

    var res = regex.test(currentValue);

    if (res) {
        passworderr.style.display='none';
        passwordsucess.style.display='block';
    }

    else 
        {
        passworderr.style.display='block';
         passwordsucess.style.display='none';
        
    }
});
