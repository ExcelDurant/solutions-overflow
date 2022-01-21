<script lang="ts">
    import { page } from "$app/stores";
    import { isLoggedIn } from "$lib/auth.js";
    let isLogged = false;
	isLoggedIn.subscribe((value) => {
		isLogged = value;
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
                <a href="/" class="sidelink"
                    ><i class="fas fa-rss-square" />Add post</a
                >
            </li>
            {#if isLogged}
            <li>
                <a
                    href="/profile"
                    class="sidelink"
                    class:active={$page.path === "/profile"}
                    ><i class="fas fa-id-badge" />user profile</a
                >
            </li>
            {/if}
            
            <li>
                <a href="/" class="sidelink"
                    ><i class="fas fa-users" />communities</a
                >
            </li>
            <li>
                <a href="/" class="sidelink"
                    ><i class="fas fa-question-circle" />questions</a
                >
            </li>
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
        }
    }
</style>
