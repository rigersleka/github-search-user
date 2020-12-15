
// github class, this one takes care of fetching data from githubPlease note that, ion getUser is called from app.js and the response goes back there with .then methode
class Github {
  constructor() {
    this.client_id = '91b693becc3528567454';
    this.client_secret = '015f3d1cab0552232e233a01c0d7e452c9289398';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'

  }
  // getUser async function, and get repose. 
  async getUser(user) {
     const profileUser = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const reposUser = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const profile = await profileUser.json();
     const repos = await reposUser.json();

     return {
       profile,
       repos
     }
  }
  
}