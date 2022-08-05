
// on load, pulls and stores all data on users
let onlineTable = $('#onlineTable');



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

function loadOnlinePlayers() {
    onlineTable.empty();
    onlineTable.append($('<tr><th>Currently Online:</th></tr>'))
    for (person of placeholderuserDB) {
        let row = $('<p>');
        row.text(person.username)
        .data('wincount', person.wincount).data('username', person.username);
        onlineTable.append($('<tr>').append($('<td>').data('wincount', person.wincount).addClass('player').append(row)));
    }
};

function challengePlayer() {
    let playerEl = $(this).children();
    let name = playerEl.data('username');
    // console.log(playerEl);
    console.log(playerEl.text(name + '    wins: ' + playerEl.data('wincount')));

};

// setInterval(loadOnlinePlayers, 5000);
onlineTable.on('click', '.player', challengePlayer);

loadOnlinePlayers();