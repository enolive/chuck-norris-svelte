<script lang="ts">
  export let jokeText$: Promise<string>;
</script>

<div role="status">
  {#await jokeText$}
    <div class="spinner-border"><span class="invisible">Loading...</span></div>
  {:then jokeText}
    Did you know?
    <br>
    {jokeText}
  {:catch error}
    <div class="alert alert-danger">Unable to fetch joke: {error}</div>
  {/await}
</div>
