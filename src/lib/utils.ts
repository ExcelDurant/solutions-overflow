import { bearerToken } from "$lib/auth";
import { browser } from '$app/env';
import { failureMessage, showFailure } from "./store";
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
    if (res.ok) {
        console.log(res);
        let data = await res.json();
        return data;
    }

    console.log(res);
    const { message } = await res.json();
    showFailure.set(true);
    failureMessage.set(message);
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
