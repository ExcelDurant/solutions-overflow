<script>
    export let points;
    export let text;
</script>

<div class="badge-container">
    <h4 class="title"><span class="point">{points}</span> Points</h4>
    <p class="txt">{text}</p>
</div>

<style lang="scss">
    .badge-container {
        width: 150px;
        border: 1px solid var(--grayish);
        padding: 10px;
        text-align: left;
        // margin-right: 20px;
        margin-bottom: 20px;
        .title {
            font-size: 1rem;
            margin-bottom: 10px;
            .point {
                font-weight: 800;
            }
        }
        .txt {
            font-size: 0.9rem;
        }
    }
</style>