hello
<script>
  import { Router, Route } from 'svelte-routing'
	import Navigation from './components/Navigation.svelte'
	import Home from './routes/Home.svelte'
	import Bugs from './routes/Bugs.svelte'
	import Fish from './routes/Fish.svelte'
	export let url = ''
</script>

<Router url="{ url }">
  <Navigation />
  <Route path="/" component={ Home } />
  <Route path="/bugs" component={ Bugs } />
  <Route path="/fish" component={ Fish } />
</Router>

