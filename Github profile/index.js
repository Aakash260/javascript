const url='https://api.github.com/users';
const search=document.getElementById('searchInput');
const searchbtn=document.getElementById('search');
const pc=document.getElementById('profileContant');
const loading=document.getElementById('load');

const generateCard=(profile)=>{
    return`<div class="card animate__animated animate__bounce"">
    <div class="top">
        <div class="avtar">
            <img src='${profile.avatar_url}' alt="">
            <div class="detail">
                <h2>${profile.name}</h2>
                <h3>${profile.login}</h3>
            </div>
        </div>
        <a href="${profile.html_url}">
        <button>CheckProfile</button>
        </a>
    </div>
<div class="med">
<h2>About</h2>
<h3>${profile.bio}</h3>
</div>
<div class="last">
<div class="follower">
    <h3>Follower</h3>
    <h4>${profile.followers}</h4>
</div>
<div class="followings">
    <h3>followings</h3>
    <h4>${profile.following}</h4>
</div>
</div>
</div>`
}

const fetchprofile=async()=>{
    loading.innerHTML='loading...'
    loading.style.color='black'
    try{
        const res= await fetch(`${url}/${search.value}`)
        const data= await res.json();    
       
       if(data.bio){
        loading.innerHTML='';
        pc.innerHTML=generateCard(data);
       }else{
        loading.innerHTML=data.message;
        loading.style.color='red';
       }
        
     }catch(error){
        console.log("🚀 ~ file: index.js:8 ~ fetchprofile ~ error:", error)   
        loading.innerHTML='';
    }
};



searchbtn.addEventListener('click',fetchprofile)

