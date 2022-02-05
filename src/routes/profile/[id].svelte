<script context="module" lang="ts">
    // export const prerender = true;

    export const router = false;

    import {
        get,
        apiUrl
    } from "$lib/utils";
    export const load = async ({ params}) => {
        console.log(params);
        let profileUrl = apiUrl + "profile/" + params.id;
        const response = await get(profileUrl);
        const currentUser = response.user;
        return {
            props: { currentUser },
        };
    };
</script>

<script>
    import { appUser, isLoggedIn, profileUser, setUser } from "$lib/auth";
import ProfileEdit from "$lib/ProfileEdit.svelte";
    import { authenticatedGet } from "$lib/utils";
    import { onMount } from "svelte";
import ProfileQuestions from "$lib/ProfileQuestions.svelte";
import ProfileAnswers from "$lib/ProfileAnswers.svelte";
    let user;
    // let isLogged = false;
    export let currentUser;
    profileUser.set(currentUser);
    appUser.subscribe((value) => {
        user = value;
    });
</script>

<svelte:head>
    <title>{currentUser.username}</title>
</svelte:head>

<section class="basic-sec">
    <div class="basic-container">
        <div class="info-card">
            <div class="icon-container">
                <i class="fas fa-book blue" />
            </div>
            <div class="info-container">
                <h3 class="info-num">{currentUser.questionsAsked}</h3>
                <h5 class="info-title">questions</h5>
            </div>
        </div>
        <div class="info-card">
            <div class="icon-container">
                <i class="fas fa-comment-alt red" />
            </div>
            <div class="info-container">
                <h3 class="info-num">{currentUser.answersGiven}</h3>
                <h5 class="info-title">answers</h5>
            </div>
        </div>
        <div class="info-card">
            <div class="icon-container">
                <i class="fas fa-comments green" />
            </div>
            <div class="info-container">
                <h3 class="info-num">{currentUser.comments}</h3>
                <h5 class="info-title">comments</h5>
            </div>
        </div>
        <div class="info-card">
            <div class="icon-container">
                <i class="fas fa-medal orange" />
            </div>
            <div class="info-container">
                <h3 class="info-num">{currentUser.points}</h3>
                <h5 class="info-title">points</h5>
            </div>
        </div>
    </div>
    <div class="socials-container">
        <div class="socials-icons-container">
            {#if user.facebookUrl}
            <a href={user.facebookUrl} target="_blank" class="social-link"><i class="fab fa-facebook-f"></i></a>
            {/if}
            {#if user.twitterUrl}
            <a href={user.twitterUrl} target="_blank" class="social-link"><i class="fab fa-twitter"></i></a>
            {/if}
            {#if user.instagramUrl}
            <a href={user.instagramUrl} target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>
            {/if}
            {#if user.youtubeUrl}
            <a href={user.youtubeUrl} target="_blank" class="social-link"><i class="fab fa-youtube"></i></a>
            {/if}
            
        </div>
    </div>
</section>
{#if currentUser._id == user._id}
    <ProfileEdit />
    <div class="divider"></div>
{/if}
<ProfileQuestions profileUser={currentUser}/>
<div class="divider"></div>
<ProfileAnswers profileUser={currentUser}/>


<style lang="scss">
    .basic-sec {
        width: 100%;
        background-color: white;
    }

    .basic-container,.socials-container {
        width: 100%;
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
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

    .socials-icons-container {
        display: flex;
        .social-link {
					height: 35px;
					width: 35px;
					margin-right: 5px;
					border-radius: 50%;
					background-color: var(--bluish);
					color: white;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
					&:hover {
						background-color: var(--text-color);
					}
				}
    }
    .divider {
        margin-bottom: 4px;
    }
</style>
