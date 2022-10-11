function login(){
    var username = document.loginForm.username
    var password = document.loginForm.password
    if(username.value != localStorage.getItem('username')){
        alert("Wrong Username")
        location.reload()
    }else if(password.value != localStorage.getItem('password')){
        alert("Wrong Password")
        location.reload()
    }else{
        alert("Login successful");
        document.loginForm.setAttribute("action", "social media.html");
    }
}

function signUp(){
    var fullname = document.signupForm.fname
    var email = document.signupForm.email
    var password = document.signupForm.password
    var cPassword = document.signupForm.cpassword
    var pp = document.signupForm.pp
    var username = document.signupForm.username
    var tc = document.signupForm.tc

    localStorage.setItem('fullname', fullname.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('username', username.value);
    localStorage.setItem('pp', pp.value);
}

function signUpCont(){
    var desc = document.signupFormCont.desc
    var hobbies = document.signupFormCont.hobbies

    localStorage.setItem('desc', desc.value);
    localStorage.setItem('hobbies', hobbies.value);

    alert("You are registered successfully")
}
