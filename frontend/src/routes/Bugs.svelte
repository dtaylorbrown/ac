<script>
  import { onMount } from 'svelte'
  import Title from '../components/Title.svelte'
  import { post } from '../utils/post.js'
  import { get } from '../utils/get.js'

  const endpoint = 'http://localhost:5555/bugs'
  let bugs

  // const testData = {
  //   "ids": [
  //     "5f65110a91ba911fe0b3cc4a",
  //     "5f65052e964a307f201ca372"
  //   ]
  // }

  onMount(() => get(endpoint, res => bugs = res))

  $: console.log('bugs', bugs)

</script>

<Title>Bugs Collection</Title>

{#if bugs}
  <ul>
    {#each bugs as bug}
      <li>
        <h4>{bug.name}</h4>
        {#if bug.icon}
          <img src="{bug.icon}" alt="{bug.name}">
        {/if}
        <table>
          <tr>
            <td>Hey</td>
            <td>Hey</td>
          </tr>
          <tr>
            <td>Hey</td>
            <td>Hey</td>
          </tr>
        </table>
      </li>
    {/each}
  </ul>
{:else}
  <p>Loading bugs...</p>
{/if}

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 20px;
  }
  ul li {
    padding: 20px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.05);
  }
</style>
