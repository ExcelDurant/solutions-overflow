<script lang="ts">
    import {
        Answer,
        getReadableDate,
        showErrorPop,
        showSuccessPop,
        User,
    } from "./utils";
    import { get, authenticatedPost, apiUrl, Question } from "$lib/utils";
    import { appUser, isLoggedIn } from "$lib/auth";
    import SingleComment from "./SingleComment.svelte";
    import MiniSpinner from "./MiniSpinner.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    let isLogged = false;
    let user: User;
    isLoggedIn.subscribe((value) => {
        isLogged = value;
    });
    appUser.subscribe((value) => {
        user = value;
    });

    export let answer: Answer;
    let commentForm = false;
    function toggleCommentForm() {
        commentForm = !commentForm;
    }

    let comment;
    function postComment() {
        let commentUrl = apiUrl + "answers/comment";
        let formData = {
            comment,
            answer: answer._id,
        };
        console.log(formData);
        commentForm = false;
        authenticatedPost(commentUrl, formData)
            .then((value) => {
                answer = value.answer;
                // document.body.scrollIntoView();
                showSuccessPop(value.message);
            })
            .catch((err) => {
                console.log(err);
                // window.alert("an error occured");
            });
    }
    let miniSpin = false;
    function upvote() {
        let upvoteUrl = apiUrl + "answers/upvote/" + answer._id;
        if (isLogged == true) {
            miniSpin = true;
            authenticatedPost(upvoteUrl, {})
                .then((value) => {
                    answer = value;
                    miniSpin = false;
                })
                .catch((err) => {
                    console.log(err);
                    miniSpin = false;
                });
        } else {
            showErrorPop("you are not logged in");
        }
    }
    function downvote() {
        let downvoteUrl = apiUrl + "answers/downvote/" + answer._id;
        if (isLogged == true) {
            miniSpin = true;
            authenticatedPost(downvoteUrl, {})
                .then((value) => {
                    answer = value;
                    miniSpin = false;
                })
                .catch((err) => {
                    console.log(err);
                    miniSpin = false;
                });
        } else {
            showErrorPop("you are not logged in");
        }
    }

    let deleteSpin = false;
    function deleteAnswer() {
        deleteSpin = true;
        let deleteUrl = apiUrl + "answers/delete/" + answer._id;
        authenticatedPost(deleteUrl, {})
            .then((value) => {
                deleteSpin = false;
                document.body.scrollIntoView();
                dispatch('delete', {
                    answer:answer
                });
                showSuccessPop(value.message);
            })
            .catch((err) => {
                deleteSpin = false;
                console.log(err);
            });
    }
</script>

<div class="answer-container">
    <div class="top-container">
        
            <a href="/profile/{answer.answererDetails._id}">
                <div class="profile-container">
                <img
                src={answer.answererDetails.photoUrl}
                alt=""
                class="full-img"
            />
        </div>
        </a>
            
        
        <div class="basic-container">
            <div class="mini-info-container">
                <a href="/profile/{answer.answererDetails._id}"><h3 class="username">{answer.answererDetails.username}</h3></a>
                <div class="status-container flex-center">
                    <h6 class="status">{answer.answererDetails.status}</h6>
                </div>
                <h5 class="datetext">
                    <span class="date"
                        >{getReadableDate(answer.created_at)}</span
                    >
                </h5>
            </div>
        </div>
    </div>
    <div class="middle-container">
        <div class="answer-details-container">
            <h5 class="answer">{answer.answer}</h5>
            <div class="answer-details">
                {@html answer.details.html}
            </div>
            <div class="bottom-container">
                <div class="actions-container">
                    <button
                        class="up-btn btn"
                        class:blue={answer.upvotes.includes(user._id)}
                        on:click={upvote}><i class="fas fa-sort-up" /></button
                    >
                    {#if miniSpin}
                        <MiniSpinner />
                    {:else}
                        <h6 class="upvotes">
                            {answer.upvotes.length - answer.downvotes.length}
                        </h6>
                    {/if}
                    <button
                        class="down-btn btn invert"
                        class:blue={answer.downvotes.includes(user._id)}
                        on:click={downvote}
                        ><i class="fas fa-sort-down" /></button
                    >
                </div>
                {#if isLogged == true}
                    <button class="reply-btn" on:click={toggleCommentForm}
                        ><i class="fas fa-reply" />reply</button
                    >
                {/if}
                <button class="share-btn"
                    ><i class="fas fa-share-alt" />share</button
                >
                {#if answer.answerer === user._id}
                    <button
                        type="button"
                        class="btn btn-danger"
                        on:click={deleteAnswer}>delete your answer</button
                    >
                    {#if deleteSpin}
                        <MiniSpinner />
                    {/if}
                {/if}
            </div>
        </div>
    </div>
    {#if answer.all_comments.length > 0}
        <div class="comments-container">
            <h3 class="title">comments</h3>
            {#each answer.all_comments as comment}
                <SingleComment {comment} />
            {/each}
        </div>
    {/if}
    {#if commentForm == true && isLogged == true}
        <div class="form-container">
            <form
                action=""
                class="comment-form"
                on:submit|preventDefault={postComment}
            >
                <h5 class="title">
                    Reply to {answer.answererDetails.username}
                </h5>
                <button class="cancel-btn" on:click={toggleCommentForm}
                    >cancel reply</button
                >
                <textarea
                    name="comment"
                    placeholder="your comment"
                    class="in form-control"
                    bind:value={comment}
                    required
                />
                <button type="submit" class="submit-btn">submit</button>
            </form>
        </div>
    {/if}
</div>

<style lang="scss">
    @import '../styles.scss';
    .answer-container {
        background-color: white;
        width: 100%;
        padding: 30px;
        margin-bottom: 2px;
        .top-container {
            display: flex;
            margin-bottom: 10px;
            align-items: center;
            .profile-container {
                min-width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 2px solid var(--bluish);
                margin-right: 10px;
                overflow: hidden;
                @include mqx(800px) {
                    width: 40px;
                height: 40px;
		}
            }
            .basic-container {
                .mini-info-container {
                    display: flex;
                    align-items: center;
                    margin-bottom: 5px;
                    .username {
                        font-size: 15px;
                        font-weight: 600;
                        color: var(--bluish);
                        margin-right: 10px;
                        @include mqx(800px) {
                    font-size: 0.7rem;
		}
                    }
                    .status-container {
                        padding: 3px 10px;
                        background-color: blueviolet;
                        margin-right: 10px;
                        .status {
                            color: white;
                            font-size: 10px;
                            @include mqx(800px) {
                    font-size: 0.7rem;
		}
                        }
                    }
                    .datetext {
                        font-size: 12px;
                        .date {
                            color: var(--bluish);
                        }
                        @include mqx(800px) {
                    font-size: 0.7rem;
		}
                    }
                }
            }
        }

        .middle-container {
            display: flex;

            .answer-details-container {
                width: 100%;

                .answer {
                    margin-bottom: 10px;
                    @include mqx(800px) {
                    font-size: 0.9rem;
		}
                }
                .answer-details {
                    width: 100%;
                    max-height: 350px;
                    overflow: auto;
                    margin-bottom: 30px;
                }
                .bottom-container {
                    display: flex;
                    align-items: center;
                    .share-btn,
                    .reply-btn {
                        background-color: transparent;
                        color: gray;
                        margin-right: 20px;
                        @include mqx(800px) {
                    font-size: 0.7rem;
		}
                        &:hover {
                            color: var(--bluish);
                        }
                        i {
                            margin-right: 5px;
                        }
                    }
                    .btn {
                        @include mqx(800px) {
                    font-size: 0.7rem;
		}
                    }
                    .actions-container {
                        margin-right: 10px;
                        display: flex;
                        align-items: center;
                        height: 20px;
                        // justify-content: center;
                        .btn {
                            background-color: white;
                            text-align: center;
                            font-size: 25px;
                            color: gray;
                            margin: 0;
                            margin-top: 10px;
                            @include mqx(800px) {
                    font-size: 0.9rem;
		}

                            &:hover {
                                color: var(--bluish);
                            }
                        }

                        .blue {
                            color: var(--bluish);
                        }
                        .invert {
                            margin-top: -10px;
                        }
                    }
                }
            }
        }
        .comments-container {
            width: 90%;
            margin: 10px auto;
            .title {
                font-size: 1.2rem;
                color: var(--text-color);
                margin-bottom: 10px;
            }
        }
        .form-container {
            width: 100%;
            margin-top: 20px;
            background-color: #f7f7f7;
            padding: 20px 30px;
            .comment-form {
                width: 100%;
                display: flex;
                flex-direction: column;
                .title {
                    margin-bottom: 20px;
                }
                .cancel-btn {
                    width: fit-content;
                    background-color: transparent;
                    margin-bottom: 20px;
                }

                .in {
                    margin-bottom: 20px;
                }
                .submit-btn {
                    display: block;
                    width: 100%;
                    margin: 0 auto;
                    background-color: var(--bluish);
                    padding: 5px 0;
                    color: white;
                }
            }
        }
    }
</style>
