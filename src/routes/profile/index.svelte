<script>
    import {appUser} from "$lib/auth";
    let user;
    appUser.subscribe((value) => {
        user = value;
    })
</script>

<section class="basic-sec">
    <div class="basic-container">
        <div class="info-card">
            <div class="icon-container">
                <i class="fas fa-book blue" />
            </div>
            <div class="info-container">
                <h3 class="info-num">{user.questionsAsked}</h3>
                <h5 class="info-title">questions</h5>
            </div>
        </div>
        <div class="info-card">
            <div class="icon-container">
                <i class="fas fa-comment-alt red" />
            </div>
            <div class="info-container">
                <h3 class="info-num">{user.answersGiven}</h3>
                <h5 class="info-title">answers</h5>
            </div>
        </div>
        <div class="info-card">
            <div class="icon-container">
                <i class="fas fa-comments green" />
            </div>
            <div class="info-container">
                <h3 class="info-num">{user.comments}</h3>
                <h5 class="info-title">comments</h5>
            </div>
        </div>
        <div class="info-card">
            <div class="icon-container">
                <i class="fas fa-medal orange" />
            </div>
            <div class="info-container">
                <h3 class="info-num">{user.points}</h3>
                <h5 class="info-title">points</h5>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .basic-sec {
        width: 100%;
        background-color: white;
    }

    .basic-container {
        width: 100%;
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
    }

    .info-card {
        border: 1px solid rgb(194, 194, 194);
        display: flex;
        // justify-content: space-between;
        align-items: center;
        padding: 10px;
        min-width: 150px;
        margin-right: 20px;
        margin-bottom: 20px;
        cursor: pointer;
        .icon-container {
            margin-right: 20px;
        }
        .blue {
            color: var(--bluish);
        }
        .red {
            color: var(--redish);
        }
        .green {
            color: var(--greenish);
        }
        .orange {
            color: var(--orangish);
        }
        .info-container {
            .info-num {
                font-size: 24px;
            }
            .info-title {
                font-size: 12px;
                text-transform: capitalize;
                color: rgb(80, 80, 80);
            }
        }
    }
</style>
