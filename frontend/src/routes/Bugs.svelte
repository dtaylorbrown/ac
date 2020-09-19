<script>
  import { onMount } from 'svelte'
  import Title from '../components/Title.svelte'
  import { post } from '../utils/post.js'

  let data

  const endpoint = 'http://localhost:5555/getBugsCollection'
  const testData = {
    "ids": [
      "5f65110a91ba911fe0b3cc4a",
      "5f65052e964a307f201ca372"
    ]
  }

  onMount(() => post(endpoint, testData, res => data = res))

</script>

<Title>Bugs Collection</Title>

{#if data }
  <pre>{ JSON.stringify(data, null, 2) }</pre>
{:else}
  <p>Loading...</p>
{/if}
