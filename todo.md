##TODO:

- Paginate search results
- Admin features:
  - Daily email of goals added that day (also show on admin page?)
  - On admin page: add a highlight from a reddit URL?
- Add final features to search page (date range, sort, filter?)
- Find way to dynamically set API route (env variable?)
- Search should ignore special character
- Create an analytics page


NOTE: sign up/login code (for if and when I need it)
signUp = () => {

  var data = new FormData();
  data.append("[user]username", this.state.username);
  data.append("[user]password", this.state.password);

  fetch("http://localhost:3000/api/v1/signup", //change to login for login (duh)
    {
      method: "POST",
      body: data
    })
    .then(resp => resp.json())
    .then(json => {json.username ? this.setState({signUp: this.state.signUp+=1}) : alert("Sign Up Failed")})
}

NOTE: getting data code (for if and when I need it)
getUsers = () => {

  let header = new Headers()
  header.append("Authorization", this.state.token)
  header.append("method", "GET")

  let options = {
      method: 'GET',
      headers: header
    }

  fetch("https://web-060517.herokuapp.com/api/v1/users", options)
    .then(resp => resp.json())
    .then(users => this.setState({users}))
}
