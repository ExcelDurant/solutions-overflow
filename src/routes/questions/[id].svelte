<script context="module" lang="ts">
    // export const prerender = true;
    import { get, authenticatedPost, apiUrl, Question, User, getReadableDate, showErrorPop, showSuccessPop } from "$lib/utils";
    export const load = async ({ page, fetch, session, stuff }) => {
        console.log(page.params);
        let questionssUrl = apiUrl + "questions/" + page.params.id;
        const question = await get(questionssUrl);
        return {
            props: { question },
        };
    };
</script>

<script lang="ts">
    import SingleQuestion from "$lib/SingleQuestion.svelte";
    import SingleAnswer from "$lib/SingleAnswer.svelte";
    import SingleComment from "$lib/SingleComment.svelte";
    import { goto } from "$app/navigation";
    import { onMount, onDestroy } from "svelte";
    // import { quill } from "../../../node_modules/svelte-quill/dist/index.cjs.js";
    import { Editor } from "@tiptap/core";
    import StarterKit from "@tiptap/starter-kit";
    import { isLoggedIn, appUser } from "$lib/auth";
import MiniSpinner from "$lib/MiniSpinner.svelte";
import BasicSpinner from "$lib/BasicSpinner.svelte";
    let isLogged = false;
    let user:User;
    isLoggedIn.subscribe((value) => {
        isLogged = value;
    });
    appUser.subscribe((value) => {
        user = value;
    });
    let commentForm = false;
    function toggleCommentForm() {
        commentForm = !commentForm;
    }
    // onMount(() => {
	// 	console.log(question);
	// });
    // backend url to post to
    let askQuestionUrl = apiUrl + "questions/ask";
    const options = {
        modules: {
            toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike", "script"],
                ["link", "code-block", "header", "blockquote", "list"],
                ["image", "formula"],
            ],
        },
        placeholder: "Type something...",
        theme: "snow",
    };

    let element;
    let editor;
    onMount(() => {
        editor = new Editor({
            element: element,
            extensions: [StarterKit],
            content: "<p>Hello World! 🌍️ </p>",
            onTransaction: () => {
                // force re-render so `editor.isActive` works as expected
                editor = editor;
            },
        });
    });
    onDestroy(() => {
        if (editor) {
            editor.destroy();
        }
    });

    export let question: Question;
    let answerForm: boolean = false;
    function toggleAnswerForm() {
        answerForm = !answerForm;
    }

    let details;
    let answer;
    let comment;
    let answerSpin = false;
    function postAnswer() {
        let answerUrl = apiUrl + "questions/answer";
        answerSpin = true;
        answerForm = false;
        let formData = {
            answer,
            details: {
                html:editor.getHTML(),
                text:element.textContent
            },
            question: question._id,
        };
        authenticatedPost(answerUrl, formData)
            .then((value) => {
                // console.log(value);
                answerSpin = false;
                question = value.question;
                document.body.scrollIntoView();
                showSuccessPop(value.message);
            })
            .catch((err) => {
                answerSpin = false;
                console.log(err);
                window.alert("an error occured");
            });
    }
    function postComment() {
        let commentUrl = apiUrl + "questions/comment";
        let formData = {
            comment,
            question: question._id,
        };
        authenticatedPost(commentUrl, formData)
            .then((value) => {
                console.log(value);
                question = value.question;
                document.body.scrollIntoView();
                showSuccessPop(value.message);
            })
            .catch((err) => {
                console.log(err);
                window.alert("an error occured");
            });
    }
    let miniSpin = false;
    function upvote() {
        let upvoteUrl = apiUrl + "questions/upvote/"+question._id;
        if (isLogged == true) {
			miniSpin = true;
			authenticatedPost(upvoteUrl, {})
				.then((value) => {
					question = value;
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
        let downvoteUrl = apiUrl + "questions/downvote/"+question._id;
        if (isLogged == true) {
			miniSpin = true;
			authenticatedPost(downvoteUrl, {})
				.then((value) => {
					question = value;
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

    async function removeAnswer(event) {
        let questionssUrl = apiUrl + "questions/" + question._id;
        question = await get(questionssUrl);
    }
</script>

<svelte:head>
    <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
    <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=61f5a75f61edda00194ec254&product=inline-share-buttons" async="async"></script>
    <title>{question.name}</title>
    <meta name="description" content={question.details.text}>
    <meta property="og:title" content={question.name}/>
  <!-- <meta property="og:url" content="http://www.sharethis.com" /> -->
  <!-- <meta property="og:image" content="http://sharethis.com/images/logo.jpg" /> -->
  <meta property="og:description" content={question.details.text} />
  <meta property="og:site_name" content="SolutionsOverflow" />
</svelte:head>

<section class="top-sec">
    <div class="txt-container">
        <h4 class="question">Question: {question.name}</h4>
    </div>
</section>
<section class="question-sec">
    <div class="question-container">
        <div class="top-container">
            <div class="profile-container">
                <img
                    src={question.askerDetail.photoUrl}
                    alt=""
                    class="full-img"
                />
            </div>
            <div class="basic-container">
                <div class="mini-info-container">
                    <h3 class="username">{question.askerDetail.username}</h3>
                    <div class="status-container flex-center">
                        <h6 class="status">{question.askerDetail.status}</h6>
                    </div>
                    <h5 class="datetext">
                        Asked on: <span class="date">{getReadableDate(question.created_at)}</span
                        >
                    </h5>
                    <h5 class="reference">
                        Reference: <span class="ref">{question.reference}</span>
                    </h5>
                </div>
                <div class="title-container">
                    <h2 href="/questions/1" class="quest-title">
                        {question.name}
                    </h2>
                </div>
            </div>
        </div>
        <div class="middle-container">
            <div class="actions-container">
                <button class="up-btn btn" class:blue={question.upvotes.includes(user._id)} on:click={upvote}><i class="fas fa-sort-up" /></button>
                {#if miniSpin}
                    <MiniSpinner />
                    {:else}
                    <h6 class="upvotes">
                        {question.upvotes.length - question.downvotes.length}
                    </h6>
                {/if}
                <button class="down-btn btn" class:blue={question.downvotes.includes(user._id)} on:click={downvote}
                    ><i class="fas fa-sort-down" /></button
                >
            </div>
            <div class="quest-details-container">
                <div class="quest-details">
                    {@html question.details.html}
                </div>
                <div class="tags-container">
                    <div class="tag">{question.subject}</div>
                    {#if question.examType == "gce"}
                        <div class="tag">GCE</div>
                    {/if}
                    {#if question.examType == "mock"}
                        <div class="tag">MOCK</div>
                        <div class="tag">{question.region}</div>
                    {/if}
                    {#if question.examType == "gce" || question.examType == "mock"}
                        <div class="tag">year: {question.year}</div>
                        <div class="tag">paper: {question.paper}</div>
                    {/if}
                    <div class="tag">
                        question number: {question.questionNumber}
                    </div>
                </div>
                <div class="bottom-container">
                    <h6 class="answers">
                        <i class="fas fa-book" />{question.answers.length} answers
                    </h6>
                    <h6 class="answers">
                        <i class="fas fa-comment-dots" />{question.comments
                            .length} comments
                    </h6>
                    {#if isLogged == true}
                        <button class="reply-btn" on:click={toggleCommentForm}
                            ><i class="fas fa-reply" />leave a comment</button
                        >
                    {/if}
                    <div class="sharethis-inline-share-buttons"></div>
                </div>
            </div>
        </div>
        {#if question.all_comments.length > 0}
            <div class="comments-container">
                <h3 class="title">comments</h3>
                {#each question.all_comments as comment}
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
                        Reply to {question.askerDetail.username}
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
</section>
<div class="answers-count-container">
    <h4 class="answers-count">{question.answers.length} Answers</h4>
</div>
<section class="answers-sec">
    {#each question.all_answers as answer}
        <SingleAnswer {answer} on:delete={removeAnswer}/>
    {/each}
</section>

<section class="answer-sec">
    {#if answerSpin}
        <BasicSpinner />
    {/if}
    {#if isLogged == true}
        <button class="answer-btn" on:click={toggleAnswerForm}
            >leave an answer</button
        >
    {/if}
    {#if answerForm == true && isLogged == true}
        <div class="answer-form-container">
            <form
                action=""
                class="answer-form"
                on:submit|preventDefault={postAnswer}
            >
                <h4 class="title">leave an answer</h4>
                <label for="answer" class="label">answer</label>
                <textarea
                    name="answer"
                    id=""
                    placeholder="your answer"
                    class="in answer-in form-control"
                    bind:value={answer}
                    required
                />
                <h5 class="label">details</h5>
                <!-- <div
                    class="editor in"
                    use:quill={options}
                    on:text-change={(e) => (details = e.detail)}
                /> -->
                {#if editor}
                        <button
                            on:click={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 1 })
                                    .run()}
                            class:active={editor.isActive("heading", {
                                level: 1,
                            })}
                        >
                            H1
                        </button>
                        <button
                            on:click={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: 2 })
                                    .run()}
                            class:active={editor.isActive("heading", {
                                level: 2,
                            })}
                        >
                            H2
                        </button>
                        <button
                            on:click={() =>
                                editor.chain().focus().setParagraph().run()}
                            class:active={editor.isActive("paragraph")}
                        >
                            P
                        </button>
                    {/if}

                    <div bind:this={element} />
                    
                <button type="submit" class="submit-btn">submit</button>
            </form>
        </div>
    {/if}
</section>

<style lang="scss">
    @import "../../styles";
    .top-sec {
        width: 100%;
        background-color: white;
        margin-bottom: 2px;
        .txt-container {
            padding: 30px 20px;
            .question {
                font-size: 1.2rem;
                color: var(--text-color);
            }
        }
    }
    .question-sec {
        width: 100%;
    }
    .question-container {
        background-color: white;
        width: 100%;
        padding: 30px;
        margin-bottom: 2px;
        @include mqx(800px) {
            padding: 5px;
        }
        .top-container {
            display: flex;
            margin-bottom: 10px;
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
                    .reference {
                        font-size: 12px;
                        margin-left: 5px;
                        color: var(--greenish);
                    }
                }
                .title-container {
                    .quest-title {
                        font-size: 20px;
                        font-weight: 700;
                        color: black;
                        // color: var(--bluish);
                    }
                }
            }
        }

        .middle-container {
            display: flex;
            .actions-container {
                height: 100px;
                margin-right: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .btn {
                    background-color: white;
                    font-size: 25px;
                    color: gray;
                    margin: 0;
                    &:hover {
                        color: var(--bluish);
                    }
                }
                .blue {
                    color: var(--bluish);
                }
            }
            .quest-details-container {
                .quest-details {
                    width: 100%;
                    max-height: 500px;
                    overflow: auto;
                }
                .tags-container {
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 10px;
                    .tag {
                        border: 1px solid gray;
                        padding: 2px 10px;
                        margin-right: 10px;
                        margin-bottom: 5px;
                    }
                }
                .bottom-container {
                    display: flex;
                    align-items: center;
                    .answers {
                        margin-right: 10px;
                        font-weight: 300;
                        color: gray;
                        i {
                            margin-right: 5px;
                        }
                    }
                    .reply-btn {
                        background-color: transparent;
                        color: gray;
                        // margin-right: 20px;
                        padding: 0;
                        &:hover {
                            color: var(--bluish);
                        }
                        i {
                            margin-right: 5px;
                        }
                    }
                    .sharethis-inline-share-buttons {
                        position: relative;
                        z-index: 1;
                        .st-btn {
                            z-index: 1;
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
    .answers-count-container {
        .answers-count {
            font-size: 0.9rem;
            padding: 20px 20px;
            font-weight: 700;
        }
    }

    .answer-sec {
        width: 100%;
        background-color: white;
        padding: 20px 0;
        margin-bottom: 2px;
    }
    .answer-btn,
    .submit-btn {
        display: block;
        width: 80%;
        margin: 0 auto;
        background-color: var(--bluish);
        padding: 5px 0;
        color: white;
    }
    .answer-form-container {
        width: 80%;
        margin: 20px auto;
        // border: 1px solid black;
    }
    .answer-form {
        width: 100%;
        display: flex;
        flex-direction: column;

        .title {
            font-size: 1rem;
            margin-bottom: 10px;
        }

        .label {
            font-size: 0.8rem;
            text-transform: capitalize;
            margin-bottom: 5px;
        }
        .in {
            width: 100%;
            margin-bottom: 10px;
        }
        .answer-in {
            border: 1px solid var(--grayish);
            padding-left: 10px;
        }
        .submit-btn {
            width: 100%;
        }
    }
</style>
