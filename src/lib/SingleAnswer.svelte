<script lang="ts">
    import type { Answer, User } from "./utils";
    import { get, authenticatedPost, apiUrl, Question } from "$lib/utils";
    import { appUser, isLoggedIn } from "$lib/auth";
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
        authenticatedPost(commentUrl, formData)
            .then((value) => {
                console.log(value);
            })
            .catch((err) => {
                console.log(err);
                window.alert("an error occured");
            });
    }
    function upvote() {
        let upvoteUrl = apiUrl + "answers/upvote/" + answer._id;
        if (isLogged == true) {
            authenticatedPost(upvoteUrl, {})
                .then((value) => {
                    console.log(value);
                    answer = value;
                })
                .catch((err) => {
                    console.log(err);
                    window.alert("an error occured");
                });
        }
    }
    function downvote() {
        let downvoteUrl = apiUrl + "answers/downvote/" + answer._id;
        if (isLogged == true) {
            authenticatedPost(downvoteUrl, {})
                .then((value) => {
                    console.log(value);
                    answer = value;
                })
                .catch((err) => {
                    console.log(err);
                    window.alert("an error occured");
                });
        }
    }
</script>

<div class="answer-container">
    <div class="top-container">
        <div class="profile-container">
            <img
                src={answer.answererDetails.photoUrl}
                alt=""
                class="full-img"
            />
        </div>
        <div class="basic-container">
            <div class="mini-info-container">
                <h3 class="username">{answer.answererDetails.username}</h3>
                <div class="status-container flex-center">
                    <h6 class="status">{answer.answererDetails.status}</h6>
                </div>
                <h5 class="datetext">
                    Aswered on: <span class="date">{answer.created_at}</span>
                </h5>
            </div>
        </div>
    </div>
    <div class="middle-container">
        <div class="answer-details-container">
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
                    <h6 class="upvotes">
                        {answer.upvotes.length - answer.downvotes.length}
                    </h6>
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
            </div>
        </div>
    </div>
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
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 2px solid var(--bluish);
                padding: 5px;
                margin-right: 10px;
                overflow: hidden;
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
                    }
                    .status-container {
                        padding: 3px 10px;
                        background-color: blueviolet;
                        margin-right: 10px;
                        .status {
                            color: white;
                            font-size: 10px;
                        }
                    }
                    .datetext {
                        font-size: 12px;
                        .date {
                            color: var(--bluish);
                        }
                    }
                }
            }
        }

        .middle-container {
            display: flex;

            .answer-details-container {
                .answer-details {
                    width: 100%;
                    max-height: 150px;
                    overflow: auto;
                }
                .bottom-container {
                    display: flex;
                    .share-btn,
                    .reply-btn {
                        background-color: transparent;
                        color: gray;
                        margin-right: 20px;
                        &:hover {
                            color: var(--bluish);
                        }
                        i {
                            margin-right: 5px;
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
