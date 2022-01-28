<script lang="ts">
    import BadgeCard from "$lib/BadgeCard.svelte";
    import RewardCard from "$lib/RewardCard.svelte";
</script>

<section class="top-sec">
    <div class="txt-container">
        <h4 class="title">Badges</h4>
    </div>
</section>
<section class="points-sec">
    <div class="points-container">
        <div class="txt-container">
            <h5 class="title">Points System</h5>
            <p class="txt">
                Besides gaining reputation with your questions and answers, you receive badges for being especially helpful. Badges appears on your profile page, questions & answers
            </p>
        </div>
        <div class="badges-container">
            <BadgeCard points=20 text="For signing up" />
            <BadgeCard points=20 text="For signing up" />
            <BadgeCard points=20 text="For signing up" />
            <BadgeCard points=20 text="For signing up" />
            <BadgeCard points=20 text="For signing up" />
            <BadgeCard points=20 text="For signing up" />
        </div>
    </div>
</section>
<section class="badge-system-sec">
    <div class="system-container">
        <div class="txt-container">
            <h5 class="title">Reward System</h5>
            <p class="txt">
                Besides gaining reputation with your questions and answers, you receive badges for being especially helpful. Badges appears on your profile page, questions & answers
            </p>
        </div>
        <div class="rewards-container">
            <RewardCard points=20 status="potato" text="You must have a total score of 50 in at least 10 non-community wiki answers to achieve this badge. Highest scoring answer that outscored an accepted answer with score of more than 10."/>
            <RewardCard points=20 status="potato" text="You must have a total score of 50 in at least 10 non-community wiki answers to achieve this badge. Highest scoring answer that outscored an accepted answer with score of more than 10."/>
            <RewardCard points=20 status="potato" text="You must have a total score of 50 in at least 10 non-community wiki answers to achieve this badge. Highest scoring answer that outscored an accepted answer with score of more than 10."/>
            <RewardCard points=20 status="potato" text="You must have a total score of 50 in at least 10 non-community wiki answers to achieve this badge. Highest scoring answer that outscored an accepted answer with score of more than 10."/>
        </div>
    </div>
</section>


<style lang="scss">
    section {
        width: 100%;
        background-color: white;
        margin-bottom: 2px;
        padding: 30px 40px;
    }
    .top-sec {
        width: 100%;
        background-color: white;
        margin-bottom: 2px;
        .txt-container {
            margin-bottom: 10px;
            .title {
                font-size: 1rem;
                color: var(--text-color);
            }
        }
    }

    .points-container {
        width: 100%;
        .txt-container {
            .title {
                font-size: 1rem;
                margin-bottom: 10px;
            }
            .txt {
                color: var(--darkgray);
                font-size: 0.9rem;
                margin-bottom: 20px;
            }
        }
        .badges-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }

    .system-container {
        width: 100%;
        .title {
                font-size: 1rem;
                margin-bottom: 10px;
            }
            .txt {
                color: var(--darkgray);
                font-size: 0.9rem;
                margin-bottom: 20px;
            }
    }
</style>