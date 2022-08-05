let enterForm = $('#enterForm');
let startingEl = $('#startingEl');
let loginButton = $('#loginButton');


enterForm.hide();

$('.homePageButton').on('click', function() {
  if ($(this).attr('id') === 'loginBtn') {
    loginButton.text('Login');
  } else {
    loginButton.text('Register');
  }
  startingEl.hide();
  enterForm.show();
})
// $('.mainMenu').on('click', '.homePageButton', function()  {
//   console.log($(this));
// })

const maybeLogin = () => {
  if (!$('#usernameField').val().trim() || !$('#passwordField').val().trim()) {
    console.log('failed!');
    // renderMainPage();
  } else {
    console.log('success');
  }
};

loginButton.on('click', maybeLogin);
// console.log('sldfkjd');