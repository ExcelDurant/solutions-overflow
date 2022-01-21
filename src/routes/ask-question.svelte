<!-- <script context="module">
    export const prerender = true;
</script> -->
<script>
    import { onMount } from "svelte";
    import { quill } from "svelte-quill";
    const options = {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike","script"],
      ["link", "code-block","header","blockquote","list"],
      ["image","formula"]
    ]
  },
  placeholder: "Type something...",
  theme: "snow"
}
 
  let content;
    // import Header from "@editorjs/header";
    // import List from "@editorjs/list";
    // import { createEditor } from "svelte-editorjs";

    // const { editor, data, isReady } = createEditor({
    //     tools: {
    //         header: {
    //             class: Header,
    //             inlineToolbar: ["link"],
    //         },
    //         list: {
    //             class: List,
    //             inlineToolbar: true,
    //         },
    //         // header:Header,
    //         // list:List
    //         // headers: {
    //         //     inlineToolbar: true,
    //         // }
    //     },
    // });
    let subjects = [
        "mathematics",
        "english",
        "french",
        "geography",
        "chemistry",
        "physics",
    ];
    let levels = ["ordinary level", "advanced level"];
    let examTypes = ["gce", "mock", "miscellaneous"];
    let mocks = ["south-west", "north-west", "west", "littoral", "central"];
    let papers = [1, 2, 3, 4, 5];
    let selectedType = "";
    let years = [];
    let isGce = true;
    let isMock = false;
    let isMisc = false;
    function generateYears() {
        let years = [];
        for (let index = 1970; index < 2023; index++) {
            years.push(index);
        }
        return years;
    }
    function generateQuestionNumbers() {
        let numbers = [];
        for (let index = 1; index < 300; index++) {
            numbers.push(index);
        }
        return numbers;
    }
    function showResults() {
        console.log(content);
    }
</script>

<svelte:head>
    <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</svelte:head>

<div class="question-page">
    <section class="top-sec flex-center">
        <h2 class="title">Ask question</h2>
    </section>
    <section class="quest-sec">
        <div class="form-container">
            <form
                action=""
                class="quest-form"
                on:submit|preventDefault={showResults}
            >
                <!-- question name -->
                <div class="mb-4 in-container">
                    <label for="name" class="form-label">question name</label>
                    <textarea
                        class="form-control in"
                        id="name"
                        rows="2"
                        placeholder="name a dinausor type"
                    />
                    <h6 class="hint">
                        please enter an appropriate name for the question so it
                        can be answered easily
                    </h6>
                </div>

                <!-- question subject -->
                <div class="mb-4 in-container">
                    <label for="subject" class="form-label">subject</label>
                    <select
                        class="form-select"
                        name="subject"
                        aria-label="Default select example"
                    >
                        {#each subjects as subject}
                            <option value={subject}>{subject}</option>
                        {/each}
                    </select>
                    <h6 class="hint">
                        please enter an appropriate subject so that the question
                        can be found easily
                    </h6>
                </div>

                <!-- question level -->
                <div class="mb-4 in-container">
                    <label for="level" class="form-label">level</label>
                    <select
                        class="form-select"
                        name="level"
                        aria-label="Default select example"
                    >
                        {#each levels as level}
                            <option value={level}>{level}</option>
                        {/each}
                    </select>
                    <h6 class="hint">select the examination level</h6>
                </div>

                <!-- examination type -->
                <div class="mb-4 in-container">
                    <label for="flexRadioDefault" class="form-label"
                        >examination type</label
                    >
                    {#each examTypes as type}
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id={type}
                                bind:value={type}
                                on:change={() => (selectedType = type)}
                            />
                            <label class="form-check-label" for={type}>
                                {type}
                            </label>
                        </div>
                    {/each}
                </div>

                <!-- question reference -->
                {#if selectedType !== "miscellaneous"}
                    <div class="mb-4 in-container reference">
                        <h5 class="in-label">reference</h5>
                        <div class="select-containers flex-center">
                            {#if selectedType === "mock"}
                                <div class="select-container">
                                    <label for="mock" class="form-label"
                                        >region</label
                                    >
                                    <select
                                        class="form-select"
                                        name="mock"
                                        aria-label="Default select example"
                                    >
                                        {#each mocks as mock}
                                            <option value={mock}>{mock}</option>
                                        {/each}
                                    </select>
                                </div>
                            {/if}
                            <div class="select-container">
                                <label for="years" class="form-label"
                                    >year</label
                                >
                                <select
                                    class="form-select"
                                    name="years"
                                    aria-label="Default select example"
                                >
                                    {#each generateYears() as year}
                                        <option value={year}>{year}</option>
                                    {/each}
                                </select>
                            </div>
                            <div class="select-container">
                                <label for="paper" class="form-label"
                                    >paper</label
                                >
                                <select
                                    class="form-select"
                                    name="paper"
                                    aria-label="Default select example"
                                >
                                    {#each papers as paper}
                                        <option value={paper}>{paper}</option>
                                    {/each}
                                </select>
                            </div>
                            <div class="select-container">
                                <label for="number" class="form-label"
                                    >question number</label
                                >
                                <select
                                    class="form-select"
                                    name="number"
                                    aria-label="Default select example"
                                >
                                    {#each generateQuestionNumbers() as number}
                                        <option value={number}>{number}</option>
                                    {/each}
                                </select>
                            </div>
                        </div>
                        <h6 class="hint">
                            please choose a reference that is nearest to the
                            question as possible
                        </h6>
                    </div>
                {/if}

                <div class="mb-4 in-container">
                    <label for="reference" class="form-label"
                        >question reference</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        name="reference"
                        id="reference"
                        placeholder="GCE O-level 2009 paper 1 question 10 b"
                    />
                    <h6 class="hint">
                        please enter the accurate question reference
                    </h6>
                </div>
                <div class="mb-3 in-container">
                    <h5 class="in-label">question details</h5>
                    <div class="editor" use:quill={options} on:text-change={e => content =
                        e.detail}/>
                </div>
                <button class="submit-btn" type="submit"
                    >publish your question</button
                >
            </form>
        </div>
    </section>
</div>

<style lang="scss">
    section {
        background-color: white;
    }
    .top-sec {
        width: 100%;
        height: 80px;
        margin-bottom: 2px;
        justify-content: flex-start;
        padding: 0 10px;
    }
    .quest-sec {
        width: 100%;
    }
    .form-container {
        width: 100%;
        padding: 5px 20px;
    }
    .quest-form {
        width: 100%;
        label,
        .in-label {
            text-transform: capitalize;
            font-size: 18px;
            font-weight: 600;
        }
        .form-check-label {
            font-weight: 400;
            font-size: 16px;
        }
        .in-container {
            margin-bottom: 50px;
        }

        .hint {
            font-weight: 400;
            color: gray;
        }
        .reference {
            width: 100%;
            .select-containers {
                justify-content: space-evenly;
                .select-container {
                    width: 24%;
                    .form-select {
                        width: 100%;
                    }
                }
            }
        }
        .submit-btn {
            width: 100%;
            color: white;
            padding: 10px 0;
            background-color: var(--bluish);
            font-weight: 600;
            text-transform: capitalize;
            margin-bottom: 20px;
        }
    }
</style>
