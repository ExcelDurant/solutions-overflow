<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from "svelte";
import { apiUrl, get, User } from './utils';
    onMount(() => {
		getInfo();
	});

    function getInfo() {
        let infoUrl = apiUrl+"system/info"
        get(infoUrl).then((value) => {
            system.questions = value.questions;
            system.answers = value.answers;
            system.users = value.users;
            system.highestUsers = value.highestUsers
        }).catch((err) => {
            console.log(err);
            window.alert("an error occured");
        })
    }
    let system = {
        questions:0,
        answers:0,
        users:0,
        communities:0,
        highestUsers:[] as User[]
    }
</script>

<aside class="rightbar">
    <div class="rightbar-container">
        <div class="stats-container">
            <h3 class="title"><i class="fas fa-signal"></i>stats</h3>
            <div class="stats-boxes">
                <div class="stat-box">
                    <h4 class="heading">questions</h4>
                    <h5 class="stat">{system.questions}</h5>
                </div>
                <div class="stat-box">
                    <h4 class="heading">answers</h4>
                    <h5 class="stat">{system.answers}</h5>
                </div>
                <div class="stat-box">
                    <h4 class="heading">users</h4>
                    <h5 class="stat">{system.users}</h5>
                </div>
                <div class="stat-box">
                    <h4 class="heading">communities</h4>
                    <h5 class="stat">{system.communities}</h5>
                </div>
            </div>
        </div>
        <div class="activities-container">
            <h2 class="title"><i class="fas fa-chart-line"></i>recent activities</h2>
            <h6 class="heading">there are no activities</h6>
        </div>
        <div class="members-container">
            <h2 class="title"><i class="fas fa-user-friends"></i>top members</h2>
            <div class="top-members">
                {#each system.highestUsers as user}
                <div class="member">
                    <div class="profile-container avatar">
                        <img src={user.photoUrl} alt="" class="full-img">
                    </div>
                    <div class="info-container">
                        <h3 class="username">{user.username}</h3>
                        <h4 class="questions">{user.questionsAsked} questions</h4>
                        <h4 class="questions">{user.answersGiven} answers</h4>
                        <h4 class="points">{user.points} points</h4>
                        <div class="status-container">
                            <h6 class="status">{user.status}</h6>
                        </div>
                    </div>
                </div>
                {/each}

            </div>
        </div>
    </div>
</aside>

<style lang="scss">
    @import "../styles.scss";
    .rightbar {
        width: 250px;
        background-color: #F2F2F2;
        @include mqx(900px) {
            width: 100%;
        }
    }
    .rightbar-container {
        width: 90%;
        margin: 0 auto;
        @include mqx(900px) {
            width: 100%;
        }
        
        .stats-container {
            padding: 20px 20px;
            width: 100%;
            background-color: white;
            margin-bottom: 2px;
            .title {
                text-transform: capitalize;
                font-size: 15px;
                font-weight: 700;
                margin-bottom: 20px;
                i {
                    margin-right: 5px;
                }
            }
            .stats-boxes {
                display: grid;
                grid-template-columns: 1fr 1fr;
                .stat-box {
                    border: 1px solid var(--grayish);
                    text-align: center;
                    padding: 10px 0;
                    .heading {
                        font-size: 12px;
                        text-transform: capitalize;
                        color: var(--bluish);
                    }
                    .stat {
                        font-size: 25px;
                        font-weight: 700;
                    }
                }
            }
        }
        .activities-container {
            padding: 20px;
            background-color: white;
            margin-bottom: 2px;
            .title {
                margin-bottom: 20px;
                color: black;
                font-weight: 700;
                i {
                    margin-right: 5px;
                }
            }
        }

        .members-container {
            padding: 20px;
            background-color: white;
            .title {
                margin-bottom: 20px;
                color: black;
                font-weight: 700;
                i {
                    margin-right: 5px;
                }
            }
            .top-members {
                .member {
                    display: flex;
                    margin-bottom: 20px;
                    .profile-container {
                        width: 60px;
                        height: 60px;
                        margin-right: 10px;
                        .full-img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .info-container {
                        .username {
                            font-size: 15px;
                            font-weight: 600;
                            color: var(--bluish);
                            margin-bottom: 5px;
                        }
                        .questions {
                            font-size: 13px;
                            margin-bottom: 2px;
                            color: gray;
                        }
                        .points {
                            font-size: 14px;
                            font-weight: 600;
                            margin-bottom: 10px;
                            color: green;
                        }
                        .status-container {
						padding: 3px 10px;
						background-color: blue;
						margin-right: 10px;
						.status {
							color: white;
							font-size: 10px;
						}
					}
                    }
                }
            }
        }
    }
</style>