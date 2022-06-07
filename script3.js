const gitHubForm = document.getElementById('gitHubForm');
gitHubForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let usernameInput = document.getElementById('usernameInput');
    let gitHubUsername = usernameInput.value;
    requestUserRepos(gitHubUsername);
})
function requestUserRepos(username) {
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}/repos`;
    xhr.open('GET', url, true);
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        let root = document.getElementById('userRepos');
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }
        if (data.message === "Not Found") {
            let ul = document.getElementById('userRepos');
            let li = document.createElement('li');
            li.classList.add('list-group-item')
            li.innerHTML = (`
                <p><strong>No account exists with username:</strong> ${username}</p>`);
            ul.appendChild(li);
        } else {
            let ul = document.getElementById('userRepos');
            for (let i in data) {
                let li = document.createElement('li');
                li.classList.add('list-group-item')

                li.innerHTML = (`
                <p><strong>Repo:</strong> ${data[i].name}</p>
                <p><strong>Private/Public Repository (false if private and true if public)</strong> ${data[i].private}</p>
                <p><strong>Forks Count</strong> ${data[i].forks_count}</p>
                <p><strong>Stargazers Count</strong> ${data[i].stargazers_count}</p>
                <p><strong>Watchers Count</strong> ${data[i].watchers_count}</p>
                <p><strong>Topics of the repository</strong> ${data[i].description}</p>
                <p><strong>License</strong> ${data[i].license}</p>
            `);
                ul.appendChild(li);
            }
        }
    }
    xhr.send();
}