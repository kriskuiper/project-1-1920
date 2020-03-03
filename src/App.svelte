<script>
	import api from '../lib/api-instance'
	import { questions, placeholders } from './voice-config'

	import Book from './components/Book.svelte'
	import SpeechInput from './components/SpeechInput.svelte'

	/*
		TODO: create a stepped flow where every step expects
		different responses to accomodate more complicated flows.

		If response is not known we can then show the unknown response,
		something we're not able to do now.
	*/
	let step = 'start'
	let userTranscript = ''

	const handleResult = (value, transcript) => {
		step = value
		userTranscript = transcript.trim()
	}
</script>

<main>
	<h1>{questions[step]}</h1>
	<p>{placeholders[step]}</p>

	<SpeechInput
		placeholder={placeholders[step]}
		onResult={handleResult}
	/>

	{#if userTranscript}
		{#await api.search(userTranscript)}
			<p>Op zoek naar boeken met "{userTranscript}"...</p>

			{:then books}
				<p>{books.total} boeken gevonden met "{userTranscript}"</p>
				{#each books.results as book}
					<Book book={book} />
				{/each}
			{:catch}
				<p>Kon geen boeken vinden met {userTranscript}</p>
		{/await}
	{/if}
</main>

<style>
	h1 { font-size: 1.85rem; }

	@media (min-width: 330px) {
		h1 { font-size: 2.25rem }
	}

	@media (min-width: 987px) {
		h1 { font-size: 3rem }
	}
</style>