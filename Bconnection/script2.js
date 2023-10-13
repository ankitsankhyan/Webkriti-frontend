// java script for login 
 const alert1 = document.getElementById('alert');
const login_user_name = document.getElementById('login_user_name');
const login_password = document.getElementById('login_password')
const login_btn = document.getElementById('login_submit');
const login_url = 'https://blog-gify.herokuapp.com/api/auth/login' ;
let auth ;
const login = async (e)=>{
    e.preventDefault();
    const log_object = {
        "user_name":login_user_name.value,
        "password":login_password.value
    };
    await fetch (login_url , {
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(log_object)
    }).then(async (response) =>{
        const data = await response.json();
        console.log(data);
        if ( data.value === 0 ) {
          auth = data.authtoken ;
            localStorage.setItem("auth_token" , auth);
            const winurl = window.location.href ;
            let length = winurl.length ;
            window.location.replace(`https://blog-gify.netlify.app/dashboard.html`);
            // window.location.replace("http://127.0.0.1:5500/frontend_new/dashboard.html");
        }else {
            alert1.innerHTML = `<div class="alert" ><span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            Invalid Credentials            </div> `
            window.scroll(0 , window.top)
        }
        
     }).catch(err=>{
        console.log(err);
     })
}

login_btn.addEventListener("click" , login);