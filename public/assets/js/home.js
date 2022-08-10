
// on load, pulls and stores all data on users
let leaderboard = $('#leaderboard');
// const socket = io();
//  socket.emit('login',{userId:'YourUserID'});

// const host = "http://yourdomain.com";
// // PASS your query parameters
// const queryParams = { userId: 123 };
// const socket = io(host, {
//     path: "/pathToConnection",
//     transports: ['websocket'],  // https://stackoverflow.com/a/52180905/8987128
//     upgrade: false,
//     query: queryParams,
//     reconnection: false,
//     rejectUnauthorized: false
// });

// socket.once("connect", () => {
    
//     // USER IS ONLINE
//     socket.on("online", (userId) => {
//         console.log(userId, "Is Online!"); // update online status
//     });

//     // USER IS OFFLINE
//     socket.on("offline", (userId) => {
//         console.log(userId, "Is Offline!"); // update offline status
//     });

// });


let placeholderuserDB = [
    {username:'player 1', wincount:'8'},
    {username:'player 2', wincount:'7'},
    {username:'player 3', wincount:'6'},
    {username:'player 4', wincount:'5'},
    {username:'player 5', wincount:'4'},
    {username:'player 6', wincount:'3'},
    {username:'player 7', wincount:'2'},
    {username:'player 8', wincount:'1'}
]

function challengePlayer() {
    let playerEl = $(this).children();
    let name = playerEl.data('username');
    // console.log(playerEl);
    playerEl.html(name + '&nbsp; &nbsp; &nbsp; &nbsp; wins: ' + playerEl.data('wincount'));
    console.log(playerEl.text());

};

let showWins = function() {
    $(this).find('.wins').show();
};

let concealWins = function() {
    $(this).find('.wins').hide();
};

// setInterval(loadOnlinePlayers, 5000);
leaderboard.on('mouseenter', '.player', showWins);
leaderboard.on('mouseleave', '.player', concealWins);
let loadMain = () => {
    // loadOnlinePlayers();
    // console.log(username);
    // console.log(usernameField.text())
    // $('#username').text(username);
}

loadMain();