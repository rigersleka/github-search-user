// init github class
const github = new Github;
//init Ui class
const ui = new UI;
// select the input from the DOM
const input = document.querySelector('#searchUser');

// add event listener for user
input.addEventListener('input', e => {
  e.preventDefault();
  // make sure the input is not empty
  const textUser = e.target.value;
  if (textUser !== '') {
    //call the getuser function in github.js and then handle the response here 8or the errore).
    github.getUser(textUser)
     .then(data => {
       if (data.profile.message === 'Not Found'){
         //show an alert
         ui.showAlert('User not found', 'alert alert-danger')
       }else {
         //display profile if data
         ui.showProfile(data.profile);
         ui.showRepos(data.repos);
       }  
     })
     .catch(err => console.log(err));
  }else {
    // clear profile
    ui.clearProfile();
  }
})