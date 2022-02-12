<script context="module" lang="ts">
    // export const prerender = true;

    export const router = false;

    import type { Load } from "@sveltejs/kit";
    import {
        get,
        apiUrl,
        Question,
        showErrorPop,
        User,
        appName,
    } from "$lib/utils";
    import BasicSpinner from "$lib/BasicSpinner.svelte";
    export const load: Load = async () => {
        let leaderUrl = apiUrl + "leaderboard";
        const data = await get(leaderUrl);
        const users = data.users;
        const page = data.page;
        const total = data.total;
        const lastPage = data.last_page;
        return {
            props: { users, page, total, lastPage },
        };
    };
</script>

<script lang="ts">
    export let users: User[];
    export let page: number;
    export let lastPage: number;
    export let total: number;

    let spin = false;
    let currentPage = page;
    function moveToPage(nextpage) {
        users = [];
        spin = true;
        let searchUrl =
            apiUrl +
            "leaderboard?" +
            new URLSearchParams([["page", `${nextpage}`]]);
        get(searchUrl)
            .then((value) => {
                spin = false;
                console.log(value);
                users = value.questions;
                page = value.page;
                currentPage = nextpage;
                lastPage = value.last_page;
                total = value.total;
            })
            .catch((err) => {
                spin = false;
                showErrorPop(err);
            });
    }
</script>

<svelte:head>
    <title>Leaderboard</title>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    />
    <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
    />
    <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
    <meta
        name="description"
        content="{appName} is a social questions & Answers Engine which will help you solve exam related questions and permit you to help others answer their questions"
    />
</svelte:head>

<section class="leader-sec">
    <div class="leader-container">
        <h2 class="title">leaderboard</h2>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">status</th>
                    <th scope="col">points</th>
                </tr>
            </thead>
            <tbody>
                {#each users as user, i}
                    <tr>
                        <th scope="row">{i + 1}</th>
                        <td
                            ><a href="/profile/{user._id}">{user.username}</a
                            ></td
                        >
                        <td>{user.status}</td>
                        <td>{user.points}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
    {#if spin}
        <div class="empty-container">
            <BasicSpinner />
        </div>
    {/if}
</section>
<section class="page-btn-sec">
    <div class="btns-container">
        {#each Array(lastPage) as pageBtn, i}
            <button
                class="page-btn"
                class:active-btn={(i+1) === currentPage}
                on:click={() => moveToPage(i + 1)}>{i + 1}</button
            >
        {/each}
    </div>
    current page:{currentPage}
</section>

<style lang="scss">
    section {
        background-color: white;
        padding: 20px 10px;
        .title {
            text-align: center;
            font-size: 1.8rem;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
    }

    .btns-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .page-btn {
            padding: 10px 20px;
            background-color: var(--bluish);
            color: white;
            margin-right: 5px;
            margin-bottom: 10px;
            &:hover {
                background-color: var(--text-color);
            }
        }
        .active-btn {
            background-color: var(--text-color);
        }
    }
</style>
