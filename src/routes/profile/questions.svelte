<script lang="ts">
import BasicSpinner from "$lib/BasicSpinner.svelte";
import { apiUrl, authenticatedGet, getReadableDate, Question } from "$lib/utils";

    import { onMount } from "svelte";
    onMount(() => {
		getQuestions();
	});
    let questions = [] as Question[];
	let spin = false;
    function getQuestions() {
		spin = true;
        let questionsUrl = apiUrl+"profile/questions";
        authenticatedGet(questionsUrl).then((value) => {
			spin = false;
            questions = value;
            console.log(value);
        }).catch((err) => {
			spin = false;
            console.log(err);
            // window.alert("an error occured");
        })
    }
</script>
{#if spin}
	<BasicSpinner />
{/if}
{#each questions as question}
<div class="question-container">
    <div class="top-container">
        <div class="basic-container">
            <div class="mini-info-container">
                <h5 class="datetext">Asked on: <span class="date">{getReadableDate(question.created_at)}</span></h5>
                <h5 class="reference">Reference: <span class="ref">{question.reference}</span></h5>
            </div>
            <div class="title-container">
                <a sveltekit:prefetch href="/questions/{question._id}" class="quest-title">
                    {question.name}
                </a>
            </div>
        </div>
    </div>
    <div class="middle-container">
        <div class="quest-details-container">
            <div class="quest-details">
				{@html question.details.html}
			</div>
            <div class="tags-container">
                <div class="tag">{question.subject}</div>
				{#if question.examType == "gce"}
				<div class="tag">GCE</div>
				{/if}
				{#if question.examType == "mock"}
				<div class="tag">MOCK</div>
				<div class="tag">{question.region}</div>
				{/if}
				{#if question.examType == "gce" || question.examType == "mock"}
				<div class="tag">year: {question.year}</div>
				<div class="tag">paper: {question.paper}</div>
				{/if}
                <div class="tag">question number: {question.questionNumber}</div>
            </div>
            <div class="bottom-container">
                <h6 class="answers"><i class="fas fa-book"></i>{question.answers.length} answers</h6>
                <h6 class="answers"><i class="fas fa-comment-dots"></i>{question.comments.length} comments</h6>
                {#if question.answers.length < 1}
                <button type="button" class="btn btn-danger">delete</button>
                {/if}
            </div>
        </div>
    </div>

</div>
{/each}

<style lang="scss">
    @import "../../styles.scss";
    .question-container {
		background-color: white;
		width: 100%;
		padding: 30px;
		margin-bottom: 2px;
		@include mqx(1200px) {
			padding: 30px 5px;
        }
		.top-container {
			display: flex;
			margin-bottom: 10px;
			.basic-container {
				.mini-info-container {
					display: flex;
					align-items: center;
					margin-bottom: 5px;
					.datetext,.reference {
						font-size: 12px;
						.date {
							color: var(--bluish);
						}
					}
					.reference {
						margin-left: 5px;
						color: var(--greenish);
					}
				}
				.title-container {
					.quest-title {
						font-size: 20px;
						font-weight: 700;
						color: black;
						cursor: pointer;
						&:hover {
							color: var(--bluish);
						}
					}
				}
			}
		}

		.middle-container {
			display: flex;
			.actions-container {
				height: 100px;
				margin-right: 10px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.btn {
					background-color: white;
					font-size: 25px;
					color: gray;
					margin: 0;
					&:hover {
						color: var(--bluish);
					}
				}

				.blue {
					color: var(--bluish);
				}
			}
			.quest-details-container {
				.quest-details {
					width: 100%;
					max-height: 150px;
					overflow: auto;
				}
				.tags-container {
					display: flex;
					flex-wrap: wrap;
					margin-bottom: 10px;
					.tag {
						border: 1px solid gray;
						padding: 2px 10px;
						margin-right: 10px;
						margin-bottom: 5px;
					}
				}
				.bottom-container {
					display: flex;
                    align-items: center;
					.answers {
						margin-right: 10px;
						font-weight: 300;
						color: gray;
						cursor: pointer;
						&:hover {
							color: black;
						}
						i {
							margin-right: 5px;
						}
					}
				}
			}
		}
	}
</style>