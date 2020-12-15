
//ui class, takes care of displaing the UI
class UI {
  //the constructor takes a variable which is a DOM selector for the div wheere all the UI ill be inserted by javascript
  constructor() {
    this.profile = document.querySelector('#profile');
  }
  // how profile function, creates and displays the user info in UI
  showProfile(user) {
    console.log(user)
    
    this.profile.innerHTML = ` 
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="mb-3 img-fluid" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
        </div>
      <div class="col-md-9">
        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success">Followers: ${user.followers}</span>
        <span class="badge badge-info">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Memebr since: ${user.created_at}</li>
        </ul>
      </div>
     </div>
    </div>
     <h3 class="page-heading mb-3">Public Repos</h3>
     <div id="repos"></div>
    `;
  }
 // show repos function
 showRepos(repos) {
   console.log(repos)
   let output ='';

   repos.forEach(repo => {
     //attention to += for output; you may want to output all the repos_count, not just 1!
     output += `
     <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
         <a href="${repo.html_url}" target="_blanck">${repo.name}</a>
        </div>
        <div class="col-md-6">
        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
        <span class="badge badge-success">Forks: ${repo.form_count}</span>
        </div>
      </div>
     </div>
     `;
   }); 
   // output the repository
   document.querySelector('#repos').innerHTML = output;
 }
  //show alert, creates and displays an alert div when ther is no user found
  showAlert(msg, className) {
    //clear alert
    this.clearAlert();
   // create a div for alert
   const div = document.createElement('div');
   //add class to the div
   div.className = className;
   //add text to the div
   div.appendChild(document.createTextNode(msg));
   //get the first DOM element
   const container = document.querySelector('.searchContainer');
   //get the second DOM element
   const h1 = document.querySelector('#h1');
   //append before
   container.insertBefore(div, h1);
   //clean the UI of that alert div after 2 sec
   setTimeout(() => {
     this.clearAlert()
   }, 2000);
   
  }
  // clear alert, checks if there is already a div alert and stops for adding athoers to the UI
  clearAlert() {
    const alert = document.querySelector('.alert');
    if (alert) {
      alert.remove();
    }
  }
  //clear profile will stop the input going back from keeping on shoing profiles 
  clearProfile() {
    this.profile.innerHTML = '';
  }
}