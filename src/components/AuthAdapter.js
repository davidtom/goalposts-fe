import {APIURL} from "./PageAssets";

class AuthAdapter {
  static login (loginParams) {
    return fetch(`${APIURL}/login`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(loginParams)
    })
    .then(resp => resp.json())
  }

  static currentUser() {
    return fetch(`${APIURL}/current_user`, {
      headers: this.headers()
    })
    .then(resp => resp.json())
  }

  headers() {
    return {
      'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    }
  }
}

export default AuthAdapter
