<script>
  import { Link } from 'svelte-routing'

  let links = [
    { label: 'Home', to: '/' },
    { label: 'Bugs', to: '/bugs' },
    { label: 'Fish', to: '/fish' }
  ]

  const getProps = () => ({ location, href, isPartiallyCurrent, isCurrent }) => {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent
    return isActive ? { class: 'active' } : {}
  }
</script>

<nav>
  {#each links as { label, to }}
    <Link to="{ to }" getProps="{ getProps }">
      { label }
    </Link>
  {/each}
</nav>

<style>
  nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6abf73;
  }
  nav a {
    display: inline-block;
    color: #fff;
    margin: 0 20px;
    padding: 5px 0 2px 0;
    border-bottom: 3px solid transparent;
    cursor: pointer;
  }
  nav a.active {
    border-color: #fff;
  }
</style>
