<script>
    import SingleQuestion from "$lib/SingleQuestion.svelte";
    import SingleAnswer from "$lib/SingleAnswer.svelte";
</script>

<section class="top-sec" />
<section class="question-sec">
    <div class="question-container">
        <div class="top-container">
            <div class="profile-container">
                <img src="avatar1.png" alt="" class="full-img" />
            </div>
            <div class="basic-container">
                <div class="mini-info-container">
                    <h3 class="username">Martin Hope</h3>
                    <div class="status-container flex-center">
                        <h6 class="status">beginner</h6>
                    </div>
                    <h5 class="datetext">
                        Asked on: <span class="date">December 22, 2021</span>
                    </h5>
                </div>
                <div class="title-container">
                    <a href="/questions/1" class="quest-title">
                        Is this statement, “i see him last night” can be
                        understood as “I saw him last night”?
                    </a>
                </div>
            </div>
        </div>
        <div class="middle-container">
            <div class="actions-container">
                <button class="up-btn btn"><i class="fas fa-sort-up" /></button>
                <h6 class="upvotes">132</h6>
                <button class="down-btn btn"
                    ><i class="fas fa-sort-down" /></button
                >
            </div>
            <div class="quest-details-container">
                <p class="quest-details">
                    In my local language (Bahasa Indonesia) there are no verb-2
                    or past tense form as time tracker. So, I often forget to
                    use the past form of verb when speaking english. I saw him
                    last night (correct) I see him last night (incorrect) But i
                    think both has the same meaning and are understandable,
                    Isn't it? Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Quisquam laudantium est necessitatibus
                    ratione iusto laboriosam nobis, animi beatae mollitia
                    consequatur earum molestiae dolorum. Placeat excepturi vel,
                    nostrum culpa voluptatibus mollitia. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Cumque molestias minima,
                    explicabo aut impedit dolores vel omnis quo sequi atque
                    voluptate ab quisquam quis ea doloremque, maxime accusamus.
                    Cupiditate, cumque.
                </p>
                <div class="tags-container">
                    <div class="tag">mathematics</div>
                </div>
                <div class="bottom-container">
                    <h6 class="answers"><i class="fas fa-book" />4 answers</h6>
                    <h6 class="answers">
                        <i class="fas fa-comment-dots" />8 comments
                    </h6>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="answers-count-container">
    <h4 class="answers-count">6 Answers</h4>
</div>
<section class="answers-sec">
    <SingleAnswer />
    <SingleAnswer />
    <SingleAnswer />
    <SingleAnswer />
    <SingleAnswer />
    <SingleAnswer />
</section>

<section class="answer-sec">
    <button class="answer-btn">leave an answer</button>
</section>

<style lang="scss">
    .top-sec {
        width: 100%;
        height: 100px;
        background-color: white;
        margin-bottom: 2px;
    }
    .question-sec {
        width: 100%;
    }
    .question-container {
        background-color: white;
        width: 100%;
        padding: 30px;
        margin-bottom: 2px;
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
                }
                .title-container {
                    .quest-title {
                        font-size: 20px;
                        font-weight: 700;
                        color: black;
                        cursor: pointer;
                        &:hover {
                            color: var(--bluish);
                        }
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
            }
            .quest-details-container {
                .quest-details {
                    line-height: 1.8;
                    font-size: 16px;
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
                    .answers {
                        margin-right: 10px;
                        font-weight: 300;
                        color: gray;
                        cursor: pointer;
                        &:hover {
                            color: black;
                        }
                        i {
                            margin-right: 5px;
                        }
                    }
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
    .answer-btn {
        display: block;
        width: 80%;
        margin: 0 auto;
        background-color: var(--bluish);
        padding: 5px 0;
        color: white;
    }
</style>
