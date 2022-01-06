<script>
    import { showLogin } from "$lib/store.js";
    function closeLogin() {
        showLogin.set(false);
    }
</script>

<div class="form-overlay">
    <form action="" class="login-form">
        <button class="close-btn" on:click={closeLogin}>X</button>
        <div class="form-head flex-center">
            <h2 class="title">Login</h2>
        </div>
        <div class="inputs-container">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">password</label>
                <input type="password" class="form-control" id="password" placeholder="">
              </div>
              <button class="login-btn">login</button>
        </div>
    </form>
</div>

<style lang="scss">
    .form-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.753);
    }
    .login-form {
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
            padding: 30px 10px;
            display: flex;
            flex-direction: column;
            .login-btn {
                background-color: var(--bluish);
                padding: 5px 0;
                width: 200px;
                color: white;
                margin: 0 auto;
            }
        }
    }
</style>
