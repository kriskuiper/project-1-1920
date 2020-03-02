<script>
	import api from '../lib/api-instance'

	import Book from './components/Book.svelte'
</script>

<main>
	<h1>Great success ¯\_(ツ)_/¯</h1>
	
	{#await api.search('hamster')}
		<p>Loading books...</p>
	{:then books}
		{#each books as book}
			<Book book={book} />
		{/each}
	{:catch error}
		<p>Error happened: {error}</p>
	{/await}
</main>

<style>
	
</style>