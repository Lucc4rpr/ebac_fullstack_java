$(document).ready(function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/Lucc4rpr')
        .then(function(resposta) {
            if (!resposta.ok) {
                throw new Error('Erro na requisição: ' + resposta.statusText);
            }
            return resposta.json();
        })
        .then(function(json) {
            try {
                nameElement.innerText = json.name;
                usernameElement.innerText = json.login;
                avatarElement.src = json.avatar_url;
                followingElement.innerText = json.following;
                followersElement.innerText = json.followers;
                reposElement.innerText = json.public_repos;
                linkElement.href = json.html_url;
            } catch (error) {
                alert("Ocorreu um erro ao exibir os dados: " + error.message);
            }
        })
        .catch(function(erro) {
            alert("Ocorreu um erro ao buscar os dados: " + erro.message);
        });
});