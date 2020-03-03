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
		start: 'Hey! Ik ben de OBA werkstukbuddy, heb je zin in je werkstuk?',
		nee: 'Ugh, balen! Waar gaat je werkstuk over?',
		ja: 'Cool! Ik heb er net zoveel zin in als jij. Waar gaat je werkstuk over?',
		searchbooks: 'Okay!',
		unknown: 'Rustig aan, zo slim ben ik ook weer niet'
	}

	const placeholders = {
		start: 'Ja of nee?',
		nee: 'Zeg in één woord waar je werkstuk over gaat',
		ja: 'Zeg in één woord waar je werkstuk over gaat',
		searchbooks: 'Ik ga zoeken naar resultaten',
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
	h1, p {
		text-align: center;
	}

	p {
		font-size: 1.225rem;
	}
</style>