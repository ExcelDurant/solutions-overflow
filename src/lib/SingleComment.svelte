<script lang="ts">
    import { Comment, getReadableDate } from "./utils";
    export let comment:Comment;
</script>

<div class="comment-container">
    <h5 class="commenter">{comment.commenterDetails.username}</h5>
    <p class="comment">{comment.comment}</p>
    <p class="comment">On: {getReadableDate(comment.created_at)}</p>
</div>

<style lang="scss">
    .comment-container {
        width: 100%;
        margin: 5px 0;
        border-bottom: 1px solid rgb(185, 185, 185);

        .commenter {
            font-size: 1rem;
            color: var(--darkgray);
        }

        .comment {
            font-size: 0.8rem;
            margin: 0;
        }
    }
</style>