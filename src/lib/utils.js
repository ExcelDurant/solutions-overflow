import { bearerToken } from "./auth";
let token;
bearerToken.subscribe((value) => {
    token = value;
})

export const apiUrl = 'http://127.0.0.1:8000/api/'

export async function authenticatedPost(url, body) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" , "Authorization":"Bearer " + token},
        body: JSON.stringify(body),
      };
      let res = await fetch(url, requestOptions);
      let data = await res.json()
      return data;
}

export async function post(url, body) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body),
      };
      let res = await fetch(url, requestOptions);
      console.log(res);
      let data = await res.json()
      return data;
}

export async function authenticatedGet(url, body) {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" , "Authorization":"Bearer " + token},
        body: JSON.stringify(body),
      };
      let res = await fetch(url, requestOptions);
      let data = await res.json()
      return data;
}

export async function get(url, body) {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body),
      };
      let res = await fetch(url, requestOptions);
      let data = await res.json()
      return data;
}