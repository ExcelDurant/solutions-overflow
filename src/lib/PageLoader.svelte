<script>
</script>

<div class="success-overlay">
    <div class="popup-container">
        <div class="lds-circle"><div /></div>
    </div>
</div>

<style lang="scss">
    .success-overlay {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.753);
    }
    .popup-container {
        width: 40%;
        padding: 20px 40px;
        background-color: rgb(0, 0, 0);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 10%;
        left: 30%;
        .lds-circle {
            display: inline-block;
            transform: translateZ(1px);
        }
        .lds-circle > div {
            display: inline-block;
            width: 64px;
            height: 64px;
            margin: 8px;
            border-radius: 50%;
            background: rgb(0, 0, 0);
            animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        @keyframes lds-circle {
            0%,
            100% {
                animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
            }
            0% {
                transform: rotateY(0deg);
            }
            50% {
                transform: rotateY(1800deg);
                animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
            }
            100% {
                transform: rotateY(3600deg);
            }
        }
    }

</style>
