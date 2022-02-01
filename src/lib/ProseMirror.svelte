<script>
    // import the core component
   import ProsemirrorEditor from 'prosemirror-svelte';
 
   // import helpers to work with prosemirror state
   import { createSingleLineEditor, toPlainText,toHTML, createRichTextEditor  } from 'prosemirror-svelte/state';  
   export let textContent;
   export let htmlContent;
 
   // create the initial editor state
   let editorState = createRichTextEditor(textContent); 
 
   function handleChange(event) {
     // get the new editor state from event.detail
     editorState = event.detail.editorState;
   }
 
   // log the text content of the editor state, just for fun
   $: textContent = toPlainText(editorState); 
   $: htmlContent = toHTML(editorState); 
 
 </script>

<div class="editor-container">
    <ProsemirrorEditor
placeholder={textContent} 
{editorState} 
on:change={handleChange}
/>
</div>

<style>
    .editor-container {
        width: 100%;
        border: 1px solid gray;
        overflow: hidden;
    }
</style>