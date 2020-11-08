let poll_data = {
    labels: [],
    data: []
}

//displays bar chart
let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: poll_data.labels,
        datasets: [{
            label: '# of Votes',
            data: poll_data.data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//displays pie chart
let ctx1 = document.getElementById('pieChart');
let pieChart = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: poll_data.labels,
        datasets: [{
            label: '# of Votes',
            data: poll_data.data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
        }]
    },
    
});

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

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pollID = urlParams.get("pollid");
console.log(pollID);
let docRef = db.collection('polls').doc(`${pollID}`);

//get labels and data of a poll for bar chart
docRef.get().then((doc) => {
    if (doc.exists) {
        document.getElementById("question").innerHTML = doc.data().question;
        document.getElementById("poll-id-heading").innerHTML = `Poll ID: ${docRef.id}`;
        myChart.data.labels = doc.data().labels;
        pieChart.data.labels = doc.data().labels;
        let newData = doc.data().labels.map(label => doc.data()[label]);
        console.log(newData);
        myChart.data.datasets[0].data = newData;
        myChart.update();
        pieChart.data.datasets[0].data = newData;
        pieChart.update();
        console.log("Chart updated!");
    }
    else {
        console.log("No data found!");
    }

}).catch(error => {
    console.log("Error getting document", error);
})


setInterval(() => {
    docRef.get().then((doc) => {
        if (doc.exists) {
            let newData = doc.data().labels.map(label => doc.data()[label]);
            myChart.data.datasets[0].data = newData;
            pieChart.data.datasets[0].data = newData;
            myChart.update();
            pieChart.update();
            console.log("Chart updated!");
        }
        else {
            console.log("No data found!");
        }

    }).catch(error => {
        console.log("Error getting document", error);
    })
}, 10000)

