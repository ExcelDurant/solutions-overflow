<script>
    import { showLogin } from "$lib/store.js";
    import { post, apiUrl, gotoUserProfile, showSuccessPop } from "$lib/utils";
    import {goto} from '$app/navigation';
    import {setAuth} from "$lib/auth";
import BasicSpinner from "./BasicSpinner.svelte";
    function closeLogin() {
        showLogin.set(false);
    }
    let spin = false;
    let loginUrl = apiUrl + "auth/login";
    let email;
    let password;
    function login() {
        spin = true;
        let formData = {
            email,
            password,
        };
        console.log(formData);
        post(loginUrl, formData).then((value) => {
            spin = false;
                console.log(value);
                setAuth(value.user, true, value.token);
                showSuccessPop("you have successfully logged in");
                closeLogin();
                gotoUserProfile(value.user);
            }).catch((err) => {
                spin = false;
                console.log(err);
            })
    }
</script>

<div class="form-overlay">
    <form action="" class="login-form" on:submit|preventDefault={login}>
        <div class="form-head flex-center">
            <h2 class="title">Login</h2>
        </div>
        <div class="inputs-container">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                    bind:value={email}
                    required
                />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">password</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder=""
                    bind:value={password}
                    required
                />
            </div>
            {#if spin}
                <BasicSpinner />
            {/if}
            <button class="login-btn" type="submit">login</button>
            <button class="btn btn-danger" on:click={closeLogin}>close</button>
        </div>
    </form>
</div>

<style lang="scss">
    @import "../styles";
    .form-overlay {
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.753);
        z-index: 100;
        top: 0;
    }
    .login-form {
        width: 40%;
        margin: 30px auto;
        background-color: white;
        position: relative;
        z-index: 100;
        .form-head {
            width: 100%;
            height: 200px;
            background-color: var(--bluish);
            .title {
                font-size: 2rem;
                color: white;
                font-weight: 600;
            }
        }
        .inputs-container {
            width: 100%;
            padding: 30px 10px;
            display: flex;
            flex-direction: column;
            .login-btn {
                background-color: var(--bluish);
                padding: 5px 0;
                width: 200px;
                color: white;
                margin: 10px auto;
            }
            .btn-danger {
                padding: 5px 0;
                width: 200px;
                color: white;
                margin: 0 auto;
            }
        }

        @include mqx(700px) {
            width: 95%;
        }
    }
</style>
