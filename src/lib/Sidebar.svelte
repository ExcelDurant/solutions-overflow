<script lang="ts">
    import { page } from '$app/stores';
</script>

<aside class="sidebar">
    <div class="sidelist-container">
        <ul class="sidelist">
            <li><a href="/" class="sidelink" class:active={$page.path === '/'}><i class="fas fa-home"></i>home</a></li>
            <li><a href="/" class="sidelink"><i class="fas fa-rss-square"></i>Add post</a></li>
            <li><a href="/profile" class="sidelink" class:active={$page.path === '/profile'}><i class="fas fa-id-badge"></i>user profile</a></li>
            <li><a href="/" class="sidelink"><i class="fas fa-users"></i>communities</a></li>
            <li><a href="/" class="sidelink"><i class="fas fa-question-circle"></i>questions</a></li>
        </ul>
    </div>
</aside>

<style lang="scss">
    .sidebar {
        width: 18%;
        background-color: #F2F2F2;
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