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
    return fetch(`${APIURL}/auth`, {
      headers: this.headers()
    })
    .then(resp => resp.json())
  }

  static headers() {
    return {
      'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': "Token token=" + localStorage.getItem('jwt')
    }
  }
}

export {AuthAdapter};
