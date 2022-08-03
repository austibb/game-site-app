let enterForm = $('#enterForm');
let startBox = $('#startBox');
let enterButton = $('#enterButton');

enterForm.hide();

$('.homePageButton').on('click', (e) => {
  console.log(e);
  console.log($(this).children());
  if ($(this).attr('id') === 'loginBtn') {
    enterButton.text('Login');
  } else {
    enterButton.text('Register');
  }
  startBox.hide();
  enterForm.show();
})