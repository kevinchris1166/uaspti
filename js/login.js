const user = document.querySelector('input[name="user"]'),
loginBtn = document.querySelector('#loginBtn'),
password = document.querySelector('input[name="password"]');
navDiv = document.querySelector('#navigasilogin');
navlogDiv = document.querySelector('#navigasilogout');

// Register Function

localStorage.setItem('user','user');
localStorage.setItem('password','uaspti');

// Login Function
function login() {
  var authenuser = localStorage.getItem('user');
  var authenpass = localStorage.getItem('password');
  if(user.value == authenuser) {
    if(password.value == authenpass) {
        alert('Login Success');
        localStorage.setItem('statusLogin','success');
      
        window.location = 'index.html';
      }
    } else {
      alert('Login Failed');
    }
  
  }
  
  function logout(){
    localStorage.removeItem('statusLogin');
    window.location = 'login.html';
  }