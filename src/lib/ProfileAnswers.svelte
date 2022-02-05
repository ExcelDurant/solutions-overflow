<script lang="ts">
    import BasicSpinner from "$lib/BasicSpinner.svelte";
    import { Answer, apiUrl, authenticatedGet, authenticatedPost, getReadableDate, showSuccessPop, User } from "$lib/utils";
    
    
    import { onMount } from "svelte";
import { appUser } from "./auth";
        onMount(() => {
            getAnswers();
        });
        let user;
    appUser.subscribe((value) => {
        user = value;
    });
        export let profileUser: User;
        let answers = [] as Answer[];
        let spin = false;
        function getAnswers() {
            spin = true;
            let answersUrl = apiUrl+"profile/" + profileUser._id + "/answers"
            authenticatedGet(answersUrl).then((value) => {
                answers = value;
                spin = false;
            }).catch((err) => {
                console.log(err);
                spin = false;
            })
        }

        let deleteSpin = false;
    function deleteAnswer(answer:Answer) {
        deleteSpin = true;
        let index = answers.indexOf(answer);
        let deleteUrl = apiUrl + "questions/delete/" + answer._id;
        authenticatedPost(deleteUrl, {})
            .then((value) => {
                deleteSpin = false;
                showSuccessPop(value.message);
                answers.splice(index, 1);
            })
            .catch((err) => {
                deleteSpin = false;
                console.log(err);
            });
    }
    </script>
    
    <section>
        {#if spin}
        <BasicSpinner />
        {:else}
        <h3>answers given by {profileUser.username}</h3>
    {/if}
    {#if answers.length < 1}
        <h5>no answers given</h5>
    {/if}
    {#each answers as answer}
    <div class="answer-container">
        <div class="top-container">
            <div class="basic-container">
                <div class="mini-info-container">
                    <h5 class="datetext">
                        <span class="date">{getReadableDate(answer.created_at)}</span>
                    </h5>
                </div>
            </div>
        </div>
        <div class="middle-container">
            <div class="answer-details-container">
                <a href="/questions/{answer.question}" class="answer">{answer.answer}</a>
                <div class="answer-details">
                    {@html answer.details.html}
                </div>
                <div class="bottom-container">
                    
                        <h6 class="upvotes">
                            {answer.upvotes.length - answer.downvotes.length} upvotes
                        </h6>
                   
                    <button class="share-btn"
                        ><i class="fas fa-share-alt" />share</button
                    >
                    {#if user._id == profileUser._id}
                        <button type="button" class="btn btn-danger" on:click={() => deleteAnswer(answer)}
                            >delete</button
                        >
                    {/if}
                    {#if deleteSpin}
                        <BasicSpinner />
                    {/if}
                </div>
            </div>
        </div>
        
    </div>
    {/each}
    </section>
    
    <style lang="scss">
        section {
            background-color: white;
            padding: 10px 5px;
            h3,h5 {
            color: gray;
            font-size: 1.1rem;
            margin-left: 10px;
        }
        }
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
                                color: rgb(58, 58, 58);
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
                        align-items: center;
                        .upvotes {
                            margin-right: 10px;
                        }
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
    