<script>
    export let points;
    export let text;
</script>

<div class="badge-container">
    <h4 class="title"><i class="fas fa-medal"></i><span class="point">{points}</span> Points</h4>
    <p class="txt">{text}</p>
</div>

<style lang="scss">
    .badge-container {
        width: 170px;
        border: 1px solid var(--grayish);
        padding: 20px 20px;
        text-align: left;
        // margin-right: 20px;
        margin-bottom: 20px;
        .title {
            font-size: 1rem;
            margin-bottom: 10px;
            i {
                margin-right: 5px;
                color: #FF6F3D;
            }
            .point {
                font-weight: 800;
            }
        }
        .txt {
            font-size: 0.9rem;
        }
    }
</style>