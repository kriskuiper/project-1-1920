<script>
	import api from '../lib/api-instance'
	import Book from './components/Book.svelte'
	import SpeechInput from './components/SpeechInput.svelte'

	let userAnswer = 'start'
	let userTranscript = ''

	const handleResult = (value, transcript) => {
		userAnswer = value
		userTranscript = transcript.trim()
	}

	const questions = {
		start: 'Heb je zin in je werkstuk?',
		nee: 'Ugh, balen! Waar gaat je werkstuk over?',
		ja: 'Awesome! Laten we snel beginnen. Waar gaat je werkstuk over?',
		searchbooks: 'Cool! Ik ga meteen voor je op zoek',
		unknown: 'Rustig aan, zo slim ben ik ook weer niet'
	}

	const placeholders = {
		start: 'Ja of nee?',
		nee: 'Zeg in één woord waar je werkstuk over gaat',
		ja: 'Zeg in één woord waar je werkstuk over gaat',
		searchbooks: 'Dit kan even duren...',
		unknown: 'Ik vergeet ook nog eens alles, waar ging je werkstuk ook alweer over?'
	}
</script>

<main>
	<h1>{questions[userAnswer]}</h1>
	<p>{placeholders[userAnswer]}</p>

	<SpeechInput
		placeholder={placeholders[userAnswer]}
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

	p {
		font-size: 1.225rem;
	}
</style>