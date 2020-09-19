<script>
	import Home from './routes/Home.svelte'
	import Bugs from './routes/Bugs.svelte'
	import Fish from './routes/Fish.svelte'
	import Navigation from './components/Navigation.svelte'

	let currentPage = 'Home'
	let pageComponents = { Home, Bugs, Fish }
</script>

<Navigation on:navigate={ next => currentPage = next.detail } />
<svelte:component this={ pageComponents[currentPage] } />
