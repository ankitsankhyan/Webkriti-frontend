const querystring = window.location.search ;

const blog_id = querystring.substring(1);
const deleteurl = 'https://blog-gify.herokuapp.com/api/blogs/deleteblog'
let token = localStorage.getItem("auth_token");
const deleteblog = async ()=>{
    console.log("akj")
    const object = {
        "id":blog_id
    }
    console.log(object , token);
      await fetch ( deleteurl  ,{
        method:'POST' ,
        headers:{
            "Content-Type":"application/json",
            "auth-token":token,
        },
        body:JSON.stringify(object)
      }).then(async(res)=>{
        const data = res.json();
        // console.log(data);
        const winurl = window.location.href ;
            let length = winurl.length ;
            window.location.replace(`https://blog-gify.netlify.app/user_profile.html`);
        // window.location.replace("http://127.0.0.1:5500/frontend_new/user_profile.html")
      }).catch(err=>{
        console.log(err);
      })
}

deleteblog();