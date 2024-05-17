document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.github.com/users/DavidLaurethAL')
    .then(response => response.json())
    .then(data => {
        console.log(data.avatar_url)
        const perfilDiv = document.getElementById('perfil')
        perfilDiv.innerHTML = 
            `<h2 class="Name">${data.name}</h2>
            <img class="Avatar" src="${data.avatar_url}" alt="Avatar">
            <p class="bio">${data.bio}</p>`
    fetch(data.followers_url)
        .then(response => response.json())
        .then(followersData => {
            const FollowersListHTML = document.getElementById('FollowersList')
            followersData.forEach(follower => {
                FollowersListHTML.innerHTML += 
                    `<div class="Follower">
                    <img src="${follower.avatar_url}" alt="Avatar">
                    </div>`
                })
            })
            .catch(error => console.error('Erro!!!:', error))
})
    .catch(error => console.error('Erro!!!:', error))
})
