<script>
import { failureMessage, showFailure } from "./store";



    let message = "";
    failureMessage.subscribe((value) => {
        message = value;
    })
    function closePopup() {
        showFailure.set(false);
    }
</script>

<div class="failure-overlay">
    <div class="popup-container">
        <button class="close-btn" on:click={closePopup}>X</button>
        <div class="tick-container">
            <i class="fas fa-bomb"></i>
        </div>
        <h3 class="title">failure</h3>
        <p class="txt">{message}</p>
    </div>
</div>

<style lang="scss">
    .failure-overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.753);
    }
    .popup-container {
        width: 40%;
        margin: 30px auto;
        padding: 20px 40px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
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
            color: var(--redish);
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
