import { bearerToken } from "$lib/auth";
import { browser } from '$app/env';
import { failureMessage, showFailure, showSuccess, successMessage } from "./store";
import { profileUser } from './auth';
import axios from 'axios';
import { goto } from "$app/navigation";
let token = "";
if (browser) {
    bearerToken.subscribe((value) => {
        token = value;
    })
}

// export const apiUrl = 'http://127.0.0.1:8000/api/';
export const apiUrl = 'https://solutions-overflow.ey.r.appspot.com/api/';
export const appName = 'Solutions Overflow';

export async function axiosAuthPost(url:string, body) {
    let config = {
        headers:{"Content-Type": "application/json", "Authorization": `Bearer ${token}`}
    }
    let res = await axios.post(url, body, config)
    if(res.status >= 200 && res.status < 300) {
        console.log(res);
        let data = res.data;
        return data;
    }
    console.log(res);
    const { message } = await res.data;
    showErrorPop(message);
    console.log(message);
    throw new Error(message);
} 

export async function authenticatedPost(url:string, body) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify(body)
    };
    let res = await fetch(url, requestOptions);
    if (res.ok) {
        console.log(res);
        let data = await res.json();
        return data;
    }

    console.log(res);
    const { message } = await res.json();
    showErrorPop(message);
    console.log(message);
    throw new Error(message);
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

    console.log(res);
    const { message } = await res.json();
    console.log(message);
    showFailure.set(true);
    failureMessage.set(message);
    throw new Error(message);
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
    showFailure.set(true);
    failureMessage.set(message);
    throw new Error(message);
}

export async function get(url:string) {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
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

export function getReadableDate(date:Date) {
    let newDate = new Date(date);
    return newDate.toDateString();
}

export function gotoUserProfile(user:User) {
    profileUser.set(user);
    // goto("/profile/"+user._id);
}

export function showErrorPop(message:string) {
    showFailure.set(true);
    failureMessage.set(message);
    console.log("showing error");
}

export function showSuccessPop(message:string) {
    showSuccess.set(true);
    successMessage.set(message);
}

export interface User {
    _id:string;
    username:string;
    email:string;
    status:string;
    photoUrl:string;
    points:number;
    level:string;
    isAdmin:boolean;
    questionsAsked:number;
    answersGiven:number;
    comments:number;
    created_at:Date;
    phoneNumber?:string;
    city?:string;
    country?:string;
    birthday?:any;
    bannerUrl?:string;
    isVerified?:boolean;
    facebookUrl?:string;
    twitterUrl?:string;
    instagramUrl?:string;
    youtubeUrl?:string;
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
    region?:string;
    answers:[];
    comments:[];
    upvotes:[];
    downvotes:[];
    asker:string;
    askerDetail:User;
    isVerified:boolean;
    created_at:Date;
    paper?:number;
    questionNumber?:number;
    year?:number;
    all_answers?:Answer[];
    all_comments?:Comment[];
}

export interface Answer {
    _id:string;
    answer:string;
    answerer:string;
    details:{
        html:string;
        text?:string;
    }
    question:string;
    comments:[];
    upvotes:[];
    downvotes:[];
    answererDetails:User;
    created_at:Date;
    all_comments?:Comment[];
}

export interface Comment {
    _id:string;
    comment:string;
    commenter:string;
    question:string;
    answer:string;
    created_at:Date;
    commenterDetails:User;
}
