<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let text: string = '';


  onMount(() => {
    // on page load, type the text in the span
    const textTyper = document.querySelector('.text_typer')!;
    let i = 0;
    const speed = 25;

    function typeWriter() {
      if (i < text.length) {
        textTyper.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
  });

</script>

<span class="text_typer"></span>
