<script>
    // @ts-ignore
import { onMount } from "svelte";
import { onDestroy } from 'svelte';
  
    export let editor;
      
      export let toolbarOptions = [
          [{ header: 1 }, { header: 2 }, "blockquote", "link", "image","formula", "video"],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "ordered" }],
          [{ align: [] }],
          ["clean"]
      ];
      
    onMount(async () => {
          // @ts-ignore
          const { default: Quill } = await import("quill");
      
      let quill = new Quill(editor, {
        modules: {
          toolbar: toolbarOptions
        },
        theme: "snow",
        placeholder: "",
        contenteditable:false
      });
    });

    // onDestroy(() => quill.disable());
  </script>
  
  <style>
    @import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
  </style>
  
  <div class="editor-wrapper">
    <div bind:this={editor} />
  </div>