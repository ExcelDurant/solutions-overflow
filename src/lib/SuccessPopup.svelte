<script>
import { showSuccess, successMessage } from "./store";


    let message = "";
    successMessage.subscribe((value) => {
        message = value;
    });
    function closePopup() {
        showSuccess.set(false);
    }
</script>

<div class="success-overlay">
    <div class="popup-container">
        <button class="close-btn" on:click={closePopup}>X</button>
        <div class="tick-container">
            <i class="fas fa-check-circle"></i>
        </div>
        <h3 class="title">success</h3>
        <p class="txt">{message}</p>
    </div>
</div>

<style lang="scss">
    @import "../styles";
    .success-overlay {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.753);
    }
    .popup-container {
        width: 40%;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 10%;
        left: 30%;
        @include mqx(700px) {
            width: 95%;
        }
    }
    .close-btn {
        align-self: flex-end;
        background-color: transparent;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 40px;
    }
    .tick-container {
        margin-bottom: 20px;
        i {
            font-size: 4rem;
            color: var(--greenish);
        }
    }
    .title {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }
    .txt {
        font-size: 1rem;
    }
</style>