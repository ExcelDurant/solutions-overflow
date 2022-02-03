<script lang="ts">
    import { page } from "$app/stores";
    import { appUser, isLoggedIn } from "$lib/auth";
import { gotoUserProfile, User } from "./utils";
    let isLogged = false;
    let user:User;
	isLoggedIn.subscribe((value) => {
		isLogged = value;
	});
    appUser.subscribe((value) => {
        user = value;
    });
</script>

<aside class="sidebar">
    <div class="sidelist-container">
        <ul class="sidelist">
            <li>
                <a href="/" class="sidelink" class:active={$page.path === "/"}
                    ><i class="fas fa-home" />home</a
                >
            </li>
            <li>
                <a href="/posts" class="sidelink" class:active={$page.path === "/posts"}
                    ><i class="fas fa-rss-square" />Add post</a
                >
            </li>
            {#if isLogged}
            <li>
                <a
                    href={"/profile/"+user._id}
                    on:click={() => gotoUserProfile(user)}
                    class="sidelink"
                    class:active={$page.path === "/profile/"+user._id}
                    ><i class="fas fa-id-badge" />user profile</a
                >
            </li>
            {/if}
            
            <li>
                <a href="/communities" class="sidelink" class:active={$page.path === "/communities"}
                    ><i class="fas fa-users" />communities</a
                >
            </li>
            <li>
                <a href="/" class="sidelink"
                    ><i class="fas fa-question-circle" />questions</a
                >
            </li>
            <li>
                <a href="/badges" class="sidelink" class:active={$page.path === "/badges"}
                    ><i class="fas fa-medal"></i>badges</a
                >
            </li>
            <li>
                <a href="/leaderboard" class="sidelink" class:active={$page.path === "/leaderboard"}
                    ><i class="fas fa-clipboard-list"></i>leaderboard</a
                >
            </li>
            <h4 class="beta-txt"><i class="fas fa-grin-beam-sweat"></i> currently in BETA....</h4>
        </ul>
    </div>
</aside>

<style lang="scss">
    @import "../styles.scss";
    .sidebar {
        width: 18%;
        background-color: #f2f2f2;
        @include mqx(1200px) {
            display: none;
        }
    }

    .sidelist-container {
        margin-top: 20px;
        .sidelist {
            li {
                margin-bottom: 18px;
            }
            .sidelink {
                color: rgb(48, 48, 48);
                font-weight: 600;
                text-transform: capitalize;
                i {
                    margin-right: 10px;
                    font-size: 20px;
                    color: rgb(48, 48, 48);
                }
                &:hover {
                    text-decoration: none;
                    color: var(--bluish);
                }
            }
            .active {
                text-decoration: none;
                color: var(--bluish);
            }
            .beta-txt {
                text-align: left;
                color: var(--redish);
            }
        }
    }
</style>
