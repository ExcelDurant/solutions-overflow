<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	// export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
    import BadgeCard from "$lib/BadgeCard.svelte";
    import RewardCard from "$lib/RewardCard.svelte";
</script>

<svelte:head>
	<title>Badges</title>
    <meta name="description" content="Besides gaining reputation with your questions and answers, you
    receive badges for being especially helpful. Badges appears on
    your profile page, questions & answers. Your points are added
    once your question is verified">
</svelte:head>

<section class="top-sec">
    <div class="txt-container">
        <h4 class="title">Badges</h4>
    </div>
</section>
<section class="points-sec">
    <div class="points-container">
        <div class="txt-container">
            <h5 class="title"><i class="fas fa-medal" />Points System (work in progress)</h5>
            <p class="txt">
                Besides gaining reputation with your questions and answers, you
                receive badges for being especially helpful. Badges appears on
                your profile page, questions & answers. Your points are added
                once your question is verified
            </p>
        </div>
        <div class="badges-container">
            <BadgeCard points="0.5" text="For commenting on a question" />
            <BadgeCard points="0.5" text="For commenting on an answer" />
            <BadgeCard points="1" text="Each time your question is upvoted" />
            <BadgeCard points="2" text="Each time your answer is upvoted" />
            <BadgeCard points="5" text="For asking a question" />
            <BadgeCard
                points="8"
                text="For providing an answer to a question"
            />
            <BadgeCard points="20" text="For signing up" />
        </div>
    </div>
</section>
<section class="badge-system-sec">
    <div class="system-container">
        <div class="txt-container">
            <h5 class="title"><i class="fas fa-medal" />Reward System (work in progress)</h5>
            <p class="txt">
                Besides gaining reputation with your questions and answers, you
                receive badges for being especially helpful. Badges appears on
                your profile page, questions & answers. Your points are added
                once your question is verified
            </p>
        </div>
        <div class="rewards-container">
            <RewardCard
                points="20"
                status="potato"
                text="You are provided with a profile picture that represents your status"
            />
            <RewardCard
                points="50"
                status="beginner"
                text="Your profile picture is upgraded"
            />
            <RewardCard
                points="100"
                status="observer"
                text="You are assigned a custom emoji next to your status"
            />
            <RewardCard
                points="200"
                status="adventurer"
                text="You are given the ability to choose your profile picture among a set of pictures"
            />
            <RewardCard
                points="400"
                status="enlightener"
                text="You will be able to upload your own picture as profile picture"
            />
            <RewardCard
                points="450"
                status="master"
                text="You will be able to upload your own banner picture"
            />
            <RewardCard
                points="1000"
                status="solutionist"
                text="You will be able to upload your own banner picture"
            />
        </div>
    </div>
</section>

<style lang="scss">
    i {
        margin-right: 15px;
    }
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
