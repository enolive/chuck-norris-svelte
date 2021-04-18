<script lang="ts">
  import {fetchRandomJoke} from './api';
  import JokeContent from './JokeContent.svelte';

  let jokeText$ = fetchRandomJoke();
</script>

<header>
  <h1>👊 Chuck Norris App 👊</h1>
</header>

<main>
  <figure><img src="chuck-norris-logo.jpg" alt="Chuck Norris approves!"></figure>
  <div class="joke-content">
    <JokeContent {jokeText$}/>
  </div>
  <button on:click={() => jokeText$ = fetchRandomJoke()} class="btn btn-primary">Refresh</button>
</main>

<style>
  .joke-content {
    min-height: 120px;
    width: 480px;
  }
</style>
