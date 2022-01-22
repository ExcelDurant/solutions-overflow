import { bearerToken } from "./auth";
import { browser } from '$app/env';
let token = "";
if (browser) {
    bearerToken.subscribe((value) => {
        token = value;
    })
}

export const apiUrl = 'http://127.0.0.1:8000/api/'

export async function authenticatedPost(url:string, body) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
        body: JSON.stringify(body),
    };
    let res = await fetch(url, requestOptions);
    let data = await res.json()
    return data;
}

export async function post(url:string, body) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    };
    let res = await fetch(url, requestOptions);
    if (res.ok) {
        console.log(res);
        let data = await res.json();
        return data;
    }

    const { message } = await res.json();
    throw new Error(message);
    // return {
    //     error: new Error(message)
    // };
}

export async function authenticatedGet(url:string) {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
        // body: JSON.stringify(body),
    };
    let res = await fetch(url, requestOptions);
    if (res.ok) {
        console.log(res);
        let data = await res.json();
        return data;
    }
    console.log(res);
    const { message } = await res.json();
    console.log(message);
    throw new Error(message);

}

export async function get(url:string, body) {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    };
    let res = await fetch(url, requestOptions);
    let data = await res.json()
    return data;
}

export interface Question {
    _id:string;
    name:string;
    subject:string;
    details:{
        html:string;
        text?:string;
    }
    level:string;
    examType:string;
    reference:string;
    answers:[];
    comments:[];
    upvotes:[];
    downvotes:[];
    asker:string;
    isVerified:boolean;
    created_at:Date;
    paper?:number;
    questionNumber?:number;
    year?:number;
}