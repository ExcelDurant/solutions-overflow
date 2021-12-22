<script lang="ts">
    import { page } from '$app/stores';
</script>

<aside class="rightbar">
    <div class="rightbar-container">
        <div class="stats-container">
            <h3 class="title"><i class="fas fa-signal"></i>stats</h3>
            <div class="stats-boxes">
                <div class="stat-box">
                    <h4 class="heading">questions</h4>
                    <h5 class="stat">21</h5>
                </div>
                <div class="stat-box">
                    <h4 class="heading">answers</h4>
                    <h5 class="stat">75</h5>
                </div>
                <div class="stat-box">
                    <h4 class="heading">users</h4>
                    <h5 class="stat">105</h5>
                </div>
                <div class="stat-box">
                    <h4 class="heading">communities</h4>
                    <h5 class="stat">5</h5>
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
                <div class="member">
                    <div class="profile-container avatar">
                        <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png" alt="" class="full-img">
                    </div>
                    <div class="info-container">
                        <h3 class="username">Excel Durant</h3>
                        <h4 class="questions">5 questions</h4>
                        <h4 class="questions">20 answers</h4>
                        <h4 class="points">550 points</h4>
                        <div class="status-container">
                            <h6 class="status">enlightened</h6>
                        </div>
                    </div>
                </div>
                <div class="member">
                    <div class="profile-container avatar">
                        <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png" alt="" class="full-img">
                    </div>
                    <div class="info-container">
                        <h3 class="username">Excel Durant</h3>
                        <h4 class="questions">5 questions</h4>
                        <h4 class="questions">20 answers</h4>
                        <h4 class="points">550 points</h4>
                        <div class="status-container">
                            <h6 class="status">enlightened</h6>
                        </div>
                    </div>
                </div>
                <div class="member">
                    <div class="profile-container avatar">
                        <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png" alt="" class="full-img">
                    </div>
                    <div class="info-container">
                        <h3 class="username">Marko Smith</h3>
                        <h4 class="questions">5 questions</h4>
                        <h4 class="questions">20 answers</h4>
                        <h4 class="points">550 points</h4>
                        <div class="status-container">
                            <h6 class="status">enlightened</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</aside>

<style lang="scss">
    .rightbar {
        width: 18%;
        background-color: #F2F2F2;
    }
    .rightbar-container {
        width: 90%;
        margin: 0 auto;
        
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