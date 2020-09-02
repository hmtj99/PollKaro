const pollID = document.getElementById("pollID");
const joinButton = document.querySelector('.join-btn');
const createNewButton = document.querySelector('.create-new-btn');

var base_url = window.location.origin;

joinButton.addEventListener('click', () => {
    if (pollID.value) {
        window.location.replace(`${base_url}/PollKaro/vote.html?pollid=${pollID.value}`);
    }
    else {
        alert("Poll ID cannot be empty");
    }
})

createNewButton.addEventListener('click', () => {
    window.location.href = `${base_url}/PollKaro/create_new.html`;
})