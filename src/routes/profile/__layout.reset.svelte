<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import Rightbar from '$lib/Rightbar.svelte';
    import { page } from '$app/stores';
	import '../../app.css';
    import { onMount } from 'svelte';
    import {setUser, appUser} from "$lib/auth";
    import { apiUrl, authenticatedGet } from "$lib/utils";
    let user;
    appUser.subscribe((value) => {
        user = value;
    })
    let profileUrl = apiUrl + "profile/me";
    function getUser() {
        authenticatedGet(profileUrl)
            .then((value) => {
                // setUser(value.user);
                console.log(value);
            })
            .catch((err) => {
                console.log(err);
                window.alert("an error occured");
            });
    }
    onMount(() => {
		getUser();
	});
</script>

<Header />

<main>
    <section class="banner-sec">
        <div class="banner-container">
            <div class="info-container">
                <div class="user-container">
                    <div class="profile-img-container no-overflow">
                        <img src={user.photoUrl} alt="" class="full-img">
                    </div>
                    
                    <h5 class="username">{user.username}</h5>
                    <div class="status-container flex-center">
                        <h6 class="status">{user.status}</h6>
                    </div>
                    
                </div>
                <div class="misc-container">

                </div>
            </div>
        </div>
    </section>
    <div class="body-content">
        <Sidebar />
	<div class="content">
        <nav class="profile-nav">
            <ul class="navlist">
                <li><a href="/profile" class="navlink" class:active={$page.path === '/profile'}>info</a></li>
                <li><a href="profile/questions" class="navlink" class:active={$page.path === '/profile/questions'}>questions</a></li>
                <li><a href="profile/questions" class="navlink" class:active={$page.path === '/profile/waiting'}>waiting questions</a></li>
                <li><a href="profile/answers" class="navlink" class:active={$page.path === '/profile/answers'}>answers</a></li>
                <li><a href="profile/edit" class="navlink" class:active={$page.path === '/profile/edit'}>edit profile</a></li>
            </ul>
        </nav>

        <slot />
    </div>
    <Rightbar />
    </div>
</main>
<style lang="scss">
	main {
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: #F2F2F2;
	}

    .banner-sec {
        width: 98%;
        margin: 0 auto;
        height: 300px;
        background-color: var(--darkgray);
    }

    .banner-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;

        .info-container {
            width: 100%;
            padding: 10px 20px;
            .user-container {
                display: flex;
                align-items: center;
                .profile-img-container {
                width: 70px;
                height: 70px;
                border: 2px solid var(--bluish);
                border-radius: 50%;
                margin-right: 10px;
                background-color: white;
            }
            .username {
                color: white;
                font-weight: 700;
                margin-right: 10px;
            }
            .status-container {
                background-color: black;
                padding: 2px 5px;
                .status {
                    color: white;
                    font-size: 12px;
                    text-transform: capitalize;
                }
            }
            }
        }
    }

    .body-content {
        flex: 1;
		display: flex;
		width: 100%;
    }
    .content {
        width: 64%;
    }

    .profile-nav {
        width: 100%;
        background-color: white;
        margin-bottom: 0px;
        .navlist {
            width: 100%;
            display: flex;
            justify-content: space-between;
            list-style: none;
            // li {
            //     min-width: 20%;
            // }
            .navlink {
                font-size: 18px;
                color: gray;
                font-weight: 600;
                padding: 30px 20px;
                text-transform: capitalize;
                &:hover {
                    color: black;
                    border-bottom: 2px solid black;
                }
            }
            .active {
                color: black;
                    border-bottom: 2px solid black;
            }
        }
    }

	
</style>