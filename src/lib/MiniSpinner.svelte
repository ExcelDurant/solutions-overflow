<div class="lds-dual-ring" />

<style lang="scss">
    .lds-dual-ring {
        display: inline-block;
        width: 20px;
        height: 20px;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 24px;
        height: 24px;
        margin: 0px;
        border-radius: 50%;
        border: 3px solid var(--bluish);
        border-color: var(--bluish) transparent var(--bluish) transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
