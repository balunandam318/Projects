console.log("Hello");

const url = "https://api.github.com/users";

const searchInputEl = document.getElementById("searchInput");
const searchBtnEl = document.getElementById("searchBtn");

const profileContainerEl = document.getElementById("profileContainer");
const loadingEl = document.getElementById("loading");


const generateProfile = (profile)=>{
    return (`<div class="profile-box">
        <div class="top-section">
          <div class="left">
            <div class="avatar">
              <img src="${profile.avatar_url}" alt="Not found" />
            </div>
            <div class="avatar-content">
              <h1>${profile.name}</h1>
              <h1>${profile.login}</h1>
            </div>
          </div>
          <a href="${profile.html_url}" target ="_black"><button class="primary-btn">Check Profile</button></a>
        </div>
        <div class="about">
          <h2>About</h2>
          <p>${profile.bio}</p>
        </div>
        <div class="status">
          <div class="status-icon">
            <h3>Followers</h3>
            <p>${profile.followers}</p>
          </div>
          <div class="status-icon">
            <h3>Following</h3>
            <p>${profile.following}</p>
          </div>
          <div class="status-icon">
            <h3>Repos</h3>
            <p>${profile.public_repos}</p>
          </div>
        </div>
      </div>)`)
}

const fetchProfile = async () =>{     //Using async indicates that this function will work with asynchronous operations (e.g., fetching data from a server).The function does not take any arguments.

    const username = searchInputEl.value;

    loadingEl.innerText = "loading.....";
    loadingEl.style.color = "black";

    try{
        const res = await fetch(`${url}/${username}`)    
        const data = await res.json();                 //The res.json() method is used to parse the response body as JSON. The await ensures that the function waits until the JSON data is fully parsed before continuing.
        console.log("data",data);
        if(data.bio){
            loadingEl.innerHTML="";
            profileContainerEl.innerHTML = generateProfile(data);
        }else{
            loadingEl.innerHTML = data.message;
            loadingEl.style.color = "red";
            profileContainerEl.innerText = "";

        }
    }catch(error){
        console.log({error});
        loadingEl.innerText = "";
    }
};

// fetchProfile();

searchBtnEl.addEventListener("click",fetchProfile);