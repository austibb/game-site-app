let homePageButton = $('.homePageButton');
let enterForm = $('#enterForm');
let startingEl = $('#startingEl');
let loginButton = $('#loginButton');
let loginErrorMessage = $('#loginErrorMessage');
let usernameField = $('#usernameField')
let passwordField = $('#passwordField');


enterForm.hide();
// loginErrorMessage.hide();

homePageButton.on('click', function () {
  if ($(this).attr('id') === 'loginBtn') {
    loginButton.text('Login');
  } else {
    loginButton.text('Register');
  }
  startingEl.hide();
  enterForm.show();
})


const maybeLogin = () => {
  if (!usernameField.val().trim() || !passwordField.val().trim()) {
    // user left both or one of the fields blank
    // console.log('failed!');
    loginErrorMessage.text('Please input a username and password.')
  } else {

    // if (loginButton.text() === 'Login') {
    //   check to verify the credentials exist in the db
    //   if (check failed) {
    //     loginErrorMessage.text('This password and username combination do not exist. Please try again.')
    //   } else { //check succeeded
    //     success, enter next page
    //     loginErrorMessage.html(`&ensp;`)
    //   }
    //   if/else for correct credentials
    // } else { // user is registering new account
    //   check user name is not already being used in db
    //   if (username is being used ) {
    //     loginErrorMessage.text('This username is already taken, please try another.')
    //   } else {
    //     loginErrorMessage.html(`&ensp;`)
    //     success, enter next page
    //     maybe display a loading animation
    //   }
    // };
    loginErrorMessage.html(`&ensp;`)
  }
};

loginButton.on('click', maybeLogin);