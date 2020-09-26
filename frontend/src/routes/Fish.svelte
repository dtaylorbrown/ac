<script>
  import { onMount } from 'svelte'
  import Title from '../components/Title.svelte'
  import { get } from '../utils/get.js'

  const endpoint = 'http://localhost:5555/fish'
  let fish

  onMount(() => get(endpoint, res => fish = res))

  $: console.log('fish', fish)

</script>

<Title>Fish Collection</Title>

{#if fish}
  <ul>
    {#each fish as fi}
      <li>
        <h4>{fi.name}</h4>
        {#if fi.icon}
          <img src="{fi.icon}" alt="{fi.name}">
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
  <p>Loading fish...</p>
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
