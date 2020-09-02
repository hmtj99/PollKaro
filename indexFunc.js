const pollID = document.getElementById("pollID");
const joinButton = document.querySelector('.join-btn');
const createNewButton = document.querySelector('.create-new-btn');

joinButton.addEventListener('click', () => {
    window.location.replace(`http://127.0.0.1:5500/vote.html?pollid=${pollID.value}`);
})

createNewButton.addEventListener('click', () => {
    window.location.href = `http://127.0.0.1:5500/create_new.html`;
})