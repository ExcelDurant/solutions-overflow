<script>
    export let points;
    export let status;
    export let text;
</script>

<div class="reward-container">
    <div class="colu-1 colu">
        <h5 class="status">{status}</h5>
        <h4 class="points"><i class="fas fa-medal"></i>{points} Points</h4>
    </div>
    <div class="colu-2 colu">
        <p class="txt">{text}</p>
    </div>
</div>

<style lang="scss">
    @import "../styles.scss";
    .reward-container {
        width: 100%;
        display: flex;
        border: 1px solid var(--grayish);
        margin-bottom: 20px;
        .colu-1 {
            width: 20%;
            border-right: 1px solid var(--grayish);
            padding: 20px;
            .status {
                width: fit-content;
                font-size: 1rem;
                color: white;
                background-color: black;
                padding: 3px;
                text-align: center;
                margin-bottom: 10px;
            }
            .points {
                font-size: 0.8rem;
                i {
                margin-right: 5px;
                color: #FF6F3D;
            }
            }
        }
        .colu-2 {
            width: 80%;
            padding: 20px;
            .txt {
                font-size: 0.9rem;
            }
        }
        @include mqx(800px) {
            flex-direction: column;
            .colu-1 {
                border: none;
                border-bottom: 1px solid var(--grayish);
            }
            .colu-1,.colu-2 {
                width: 100%;
            }
        }
    }
</style>