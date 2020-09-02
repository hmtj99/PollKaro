const question = document.getElementById("question");
const optionsList = document.getElementById("options-list");
const addButton = document.querySelector(".add-btn");
const submitButton = document.querySelector(".submit-btn");

var firebaseConfig = {
    apiKey: "AIzaSyDxkJJSo4T3L-NJofwaU5Sl_bODYNNfD5A",
    authDomain: "poll-app-141fa.firebaseapp.com",
    databaseURL: "https://poll-app-141fa.firebaseio.com",
    projectId: "poll-app-141fa",
    storageBucket: "poll-app-141fa.appspot.com",
    messagingSenderId: "392838219265",
    appId: "1:392838219265:web:a9d9691cfbb6676e712200",
    measurementId: "G-E41B5ZQ7SW"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

let count = 2;

const addOptionField = (e) => {
    e.preventDefault();
    const newOptionField = document.createElement("input");
    newOptionField.setAttribute("type", "text");
    newOptionField.setAttribute("name", "options");
    newOptionField.setAttribute("id", `option${++count}`);
    newOptionField.setAttribute("placeholder", `Option ${count}`);
    optionsList.appendChild(newOptionField);
}

const createNewPoll = (e) => {
    e.preventDefault();

    const ques = question.value;
    const options_list = document.getElementsByName("options");
    const labels = [];
    for (let i = 0; i < options_list.length; i++) {
        labels.push(options_list[i].value);
    }

    const newPoll = { question: ques, author: "Hemant Jain", labels: labels };

    for (const i in labels) {
        newPoll[labels[i]] = 0;
    }

    db.collection("polls").add(newPoll)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            var base_url = window.location.origin;
            window.location.replace(`${base_url}/chart.html?pollid=${docRef.id}`);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}



addButton.addEventListener('click', addOptionField);
submitButton.addEventListener('click', createNewPoll);
