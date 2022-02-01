<script>
    import { onMount } from 'svelte';
    import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core';
    import { commonmark } from '@milkdown/preset-commonmark';
    import { tooltip } from '@milkdown/plugin-tooltip';
    import { nord } from '@milkdown/theme-nord';

    export let defaultValue;

    function editor(dom) {
        Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, dom);
                ctx.set(defaultValueCtx, defaultValue);
            })
            .use(nord)
            .use(tooltip)
            .use(commonmark)
            .create();
    }
</script>

<div use:editor />

<style></style>

