const pollID = document.getElementById("pollID");
const joinButton = document.querySelector('.join-btn');
const createNewButton = document.querySelector('.create-new-btn');

var base_url = window.location.origin;

joinButton.addEventListener('click', () => {
    window.location.replace(`${base_url}/vote.html?pollid=${pollID.value}`);
})

createNewButton.addEventListener('click', () => {
    window.location.href = `${base_url}/create_new.html`;
})