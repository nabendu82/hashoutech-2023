const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getUser = async username => {
    const res = await fetch(API_URL + username);
    const data = await res.json();
    createUserCard(data);
    getRepos(username);
}

const getRepos = async username => {
    const res = await fetch(API_URL + username + "/repos");
    const data = await res.json();
    addReposToCard(data);
}

function addReposToCard(repos) {
    const reposEl = document.getElementById("repos");
    repos.forEach((repo) => {
            const repoEl = document.createElement("a");
            repoEl.classList.add("repo");
            repoEl.href = repo.html_url;
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;
            reposEl.appendChild(repoEl);
        });
}

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
        <div>
            <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul class="info">
                <li><strong>Followers :</strong>${user.followers}</li>
                <li><strong>Following :</strong>${user.following}</li>
                <li><strong>Repos :</strong>${user.public_repos}</li>
                <li><strong>Twitter :</strong> ${user.twitter_username}</li>
                <li><strong>Location :</strong>${user.location}</li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>
    `
    main.innerHTML = cardHTML;
}

form.addEventListener("submit", e => {
    e.preventDefault();
    const user = search.value;
    if(user){
        getUser(user);
        search.value = "";
    }
})

getUser("nabendu82")