<script>
    import {goto} from '$app/navigation';
    import { showSignup } from "$lib/store.js";
    import { post,apiUrl } from "$lib/utils.js";
    import {appUser,bearerToken, isLoggedIn, setAuth} from "$lib/auth.js";
    function closeSignup() {
        showSignup.set(false);
    }
    let signupUrl = apiUrl+"auth/register";
    let username;
    let email;
    let password;
    let confirmedPass;
    function signUp() {
        if(confirmedPass === password) {
            let formData = {
                username,
                email,
                password
            }
            console.log(formData);
            post(signupUrl, formData).then((value) => {
                console.log(value);
                setAuth(value.user, true, value.token);
                closeSignup();
                goto("/profile");
            }).catch((err) => {
                console.log(err);
                window.alert("an error occured");
            })
        }
    }
</script>

<div class="form-overlay">
    <form action="" class="signup-form" on:submit|preventDefault={signUp}>
        <button class="close-btn" on:click={closeSignup}>X</button>
        <div class="form-head flex-center">
            <h2 class="title">Sign Up</h2>
        </div>
        <div class="inputs-container">
            <div class="mb-3">
                <label for="username" class="form-label"
                    >Username</label
                >
                <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="John Doe"
                    bind:value={username}
                    required
                />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com" bind:value={email} required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">password</label>
                <input type="password" class="form-control" id="password" placeholder="" bind:value={password} required>
              </div>
            <div class="mb-3">
                <label for="password-confirm" class="form-label">Confirm password</label>
                <input type="password" class="form-control" id="password-confirm" placeholder="" bind:value={confirmedPass} required>
              </div>
              <button class="signup-btn" type="submit">Signup</button>
        </div>
    </form>
</div>

<style lang="scss">
    .form-overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.753);
    }
    .signup-form {
        width: 40%;
        margin: 30px auto;
        background-color: white;
        position: relative;
        .close-btn {
            position: absolute;
            top: 0;
            right: -10%;
            color: white;
            background-color: transparent;
            font-weight: 900;
            font-size: 1.5rem;
        }
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
            padding: 20px 10px;
            display: flex;
            flex-direction: column;
            .signup-btn {
                background-color: var(--bluish);
                padding: 5px 0;
                width: 200px;
                color: white;
                margin: 0 auto;
            }
        }
    }
</style>
