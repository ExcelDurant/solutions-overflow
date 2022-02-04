<script lang="ts">
    import Header from "$lib/header/Header.svelte";
    import Sidebar from "$lib/Sidebar.svelte";
    import Rightbar from "$lib/Rightbar.svelte";
    import { page } from "$app/stores";
    import "../../app.css";
    import { appUser, profileUser } from "$lib/auth";
    import {
        showFailure,
        showLogin,
        showSignup,
        showSuccess,
    } from "$lib/store";
    import SignupForm from "$lib/SignupForm.svelte";
    import LoginForm from "$lib/LoginForm.svelte";
    import SuccessPopup from "$lib/SuccessPopup.svelte";
    import FailurePopup from "$lib/FailurePopup.svelte";
    import Footer from "$lib/Footer.svelte";
    let currentProfileUser;
    profileUser.subscribe((value) => {
        currentProfileUser = value;
    });
    let login = false;
    let signup = false;
    let success = false;
    let failure = false;
    showLogin.subscribe((value) => {
        login = value;
    });
    showSignup.subscribe((value) => {
        signup = value;
    });
    showSuccess.subscribe((value) => {
        success = value;
    });
    showFailure.subscribe((value) => {
        failure = value;
    });
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

<Header />
{#if signup}
    <SignupForm />
{/if}

{#if login}
    <LoginForm />
{/if}
{#if success}
    <SuccessPopup />
{/if}
{#if failure}
    <FailurePopup />
{/if}
<main>
    <section class="banner-sec">
        <div class="banner-container">
            <div class="info-container">
                {#if currentProfileUser}
                <div class="user-container">
                    <div class="profile-img-container no-overflow">
                        <img
                            src={currentProfileUser.photoUrl || ''}
                            alt={currentProfileUser.username}
                            class="full-img"
                        />
                    </div>

                    <h5 class="username">{currentProfileUser.username || 'loading'}</h5>
                    <div class="status-container flex-center">
                        <h6 class="status">{currentProfileUser.status || ''}</h6>
                    </div>
                </div>
                {/if}
                <div class="misc-container" />
            </div>
        </div>
    </section>
    <div class="body-content">
        <Sidebar />
        <div class="content">
            <nav class="profile-nav">
                <ul class="navlist">
                    <!-- <li>
                        <a
                            href="/profile"
                            class="navlink"
                            class:active={$page.url.pathname === "/profile"}>info</a
                        >
                    </li> -->
                    <!-- <li>
                        <a
                            href="/profile/questions"
                            class="navlink"
                            class:active={$page.url.pathname === "/profile/questions"}
                            >questions</a
                        >
                    </li> -->
                    <!-- <li>
                        <a
                            href="/profile/progression"
                            class="navlink"
                            class:active={$page.url.pathname === "/profile/progression"}
                            >progression</a
                        >
                    </li> -->
                    <!-- <li>
                        <a
                            href="/profile/answers"
                            class="navlink"
                            class:active={$page.url.pathname === "/profile/answers"}
                            >answers</a
                        >
                    </li> -->
                    <!-- <li>
                        <a
                            href="/profile/edit"
                            class="navlink"
                            class:active={$page.url.pathname === "/profile/edit"}
                            >edit profile</a
                        >
                    </li> -->
                </ul>
            </nav>

            <slot />
        </div>
        <Rightbar />
    </div>
</main>
<Footer />

<style lang="scss">
    @import "../../styles.scss";
    main {
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        background-color: #f2f2f2;
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
        @include mqx(900px) {
            flex-direction: column;
        }
    }
    .content {
        width: 64%;
        @include mqx(900px) {
            width: 100%;
        }
    }

    .profile-nav {
        width: 100%;
        background-color: white;
        margin-bottom: 0px;
        overflow: auto;
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
