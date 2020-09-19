<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let menu = [
    { active: true, label: 'Home' },
    { active: false, label: 'Bugs' },
    { active: false, label: 'Fish' }
  ]

  const handleNavigation = label => {
    menu = menu.map(item => ({ ...item, active: label === item.label }))
    dispatch('navigate', label)
  }
</script>

<nav>
  <ul>
  {#each menu as { active, label }}
    <li class:active on:click={ _ => handleNavigation(label) }>
      { label }
    </li>
  {/each}
  </ul>
</nav>

<style>
  nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: #6abf73;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  ul li {
    color: #fff;
    margin: 0 20px;
    padding: 5px 0 2px 0;
    border-bottom: 3px solid transparent;
    cursor: pointer;
  }
  ul li.active {
    border-color: #fff;
  }
</style>
