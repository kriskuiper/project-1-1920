<script>
	import { Router, Route } from 'svelte-routing'

	import Navigation from './components/Navigation.svelte'
	import Home from './pages/Home.svelte'
	import Assignment from './pages/Assignment.svelte'
</script>

<Router>
	<Navigation />

	<Route path="/" component={Home} />
	<Route path="werkstuk" component={Assignment} />
</Router>

