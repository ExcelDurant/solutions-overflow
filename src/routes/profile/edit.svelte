<script lang="ts">
    import { appUser, setUser } from "$lib/auth";
    import BasicSpinner from "$lib/BasicSpinner.svelte";
    import {
        apiUrl,
        authenticatedPost,
        showErrorPop,
        showSuccessPop,
        User,
    } from "$lib/utils";

    let user: User;
    appUser.subscribe((value) => {
        user = value;
    });

    let spin = false;
    function editProfile() {
        spin = true;
        let editUrl = apiUrl + "profile/update";
        // console.log(user)
        authenticatedPost(editUrl, user)
            .then((value) => {
                spin = false;
                console.log(value.user);
                setUser(value.user);
                showSuccessPop(value.message);
            })
            .catch((err) => {
                spin = false;
                showErrorPop(err);
            });
    }
</script>

<section class="edit-sec">
    <div class="edit-sec-container">
        <div class="form-container">
            <form
                action=""
                class="edit-form"
                on:submit|preventDefault={editProfile}
            >
                <h3 class="title">
                    <i class="fas fa-info-circle" />Basic Information
                </h3>
                <label for="username">username</label>
                <input
                    type="text"
                    name="username"
                    id=""
                    class="in username-in"
                    bind:value={user.username}
                    required
                />
                <label for="email">email</label>
                <input
                    type="email"
                    name="email"
                    id=""
                    class="in email-in"
                    bind:value={user.email}
                    required
                />
                <label for="phone">Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    id=""
                    class="in phone-in"
                    bind:value={user.phoneNumber}
                />
                <label for="city">city</label>
                <input
                    type="text"
                    name="city"
                    id=""
                    class="in city-in"
                    bind:value={user.city}
                />
                <label for="birthday">Birthday</label>
                <input
                    type="date"
                    name="birthday"
                    id=""
                    class="in birth-in"
                    bind:value={user.birthday}
                />
                <div class="seperator" />
                <h3 class="title">
                    <i class="fas fa-info-circle" />Social Profiles
                </h3>
                <label for="facbook">Facebook (put the full URL)</label>
                <input
                    type="text"
                    name="facebook"
                    id=""
                    class="in face-in"
                    bind:value={user.facebookUrl}
                />
                <label for="twitter">twitter (put the full URL)</label>
                <input
                    type="text"
                    name="twitter"
                    id=""
                    class="in twitter-in"
                    bind:value={user.twitterUrl}
                />
                <label for="instagram">instagram (put the full URL)</label>
                <input
                    type="text"
                    name="instagram"
                    id=""
                    class="in instagram-in"
                    bind:value={user.instagramUrl}
                />
                <label for="youtube">youtube (put the full URL)</label>
                <input
                    type="text"
                    name="youtube"
                    id=""
                    class="in youtube-in"
                    bind:value={user.youtubeUrl}
                />
                {#if spin}
                    <BasicSpinner />
                {/if}
                <button type="submit" class="submit-btn">save</button>
            </form>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        width: 100%;
        background-color: white;
    }
    .edit-sec-container {
        width: 100%;
        padding: 10px 0;
    }
    .form-container {
        width: 80%;
        margin: 0 auto;
    }
    .edit-form {
        width: 100%;
        display: flex;
        flex-direction: column;

        .title {
            margin: 20px 0;
            font-size: 1rem;
            display: flex;
            align-items: center;
            i {
                margin-right: 10px;
                font-size: 2rem;
            }
        }

        label {
            font-size: 0.8rem;
            color: gray;
            margin-bottom: 5px;
        }
        .in {
            border: 1px solid var(--grayish);
            padding: 0 10px;
            height: 35px;
            font-size: 0.9rem;
            margin-bottom: 10px;
        }
        .submit-btn {
            width: 100%;
            color: white;
            padding: 10px 0;
            background-color: var(--bluish);
            font-weight: 600;
            text-transform: capitalize;
            margin-bottom: 20px;
            margin-top: 20px;
        }
    }
</style>
