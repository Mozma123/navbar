document.getElementById('auth-btn').addEventListener('click' ,function(event){
    event.preventDefault();
    var loginForm = document.getElementById('login-form');
    if(loginForm.style.display === 'block')
    {loginForm.style.display = 'none'} 
    else{loginForm.style.display = 'flex;'}
});


document.getElementById('close-btn').addEventListener('click', function(){
    document.getElementById('login-form').style.display = 'none';
});

document.getElementById('submit-btn').addEventListener('click', function() {
var username = document.getElementById('username').value;
var email = document.getElementById('email').value;
    if (username && email) {
        localStorage.setItem('username' , 'email');
        localStorage.setItem('email' , email);
        localStorage.setItem('isLoggedIn', 'true' );
        document.getElementById('login-form').style.display = 'none';
        updateAuthButton(); }
        else{
            alert('please fill in the both fileds.');
        }
});


document.getElementById('auth-btn').addEventListener('click', function(){
    if  (localStorage.getItem('isLoggedIn')  === 'true') {
        localStorage.removeItem('usename');
        localStorage.removeItem('email');
        localStorage.setItem('isLoggedIn', 'false');
        updateAuthButton(); 
      }
        else { 
            document.getElementById('login-form').style.display = 'flex';
    }
});
// learn 39 lines
function updateAuthButton() {
    var authBtnText = document.getElementById('auth-btn-text');
    if (localStorage.getItem('isLoggedIn') === 'true') {
        authBtnText.innerText = 'Logout' ;
    }
    else{
        authBtnText.innertext ='login';
    }};

// window.onload = function() {
//     updateAuthButton();};
    window.onload = function(){
updateAuthButton();};

  