<div class="answer-container">
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
                    Aswered on: <span class="date">December 22, 2021</span>
                </h5>
            </div>
        </div>
    </div>
    <div class="middle-container">
        <div class="answer-details-container">
            <p class="answer-details">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                adipisci sunt vel, numquam quos aliquam, ullam eum pariatur
                dolor perferendis explicabo illum hic. Fugit corporis architecto
                in quasi deserunt fuga laborum vero autem excepturi cupiditate
                enim, iure non voluptatibus consectetur?
            </p>
            <div class="bottom-container">
                <div class="actions-container">
                    <button class="up-btn btn"
                        ><i class="fas fa-sort-up" /></button
                    >
                    <h6 class="upvotes">132</h6>
                    <button class="down-btn btn invert"
                        ><i class="fas fa-sort-down" /></button
                    >
                </div>
                <button class="reply-btn"
                    ><i class="fas fa-reply" />reply</button
                >
                <button class="share-btn"
                    ><i class="fas fa-share-alt" />share</button
                >
            </div>
        </div>
    </div>
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
                    line-height: 1.8;
                    font-size: 16px;
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
                        .invert {
                            margin-top: -10px;
                        }
                    }
                }
            }
        }
    }
</style>
