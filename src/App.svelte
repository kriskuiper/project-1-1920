<script>
	import api from '../lib/api-instance'
	import userSteps from './user-steps'

	import Book from './components/Book.svelte'
	import SpeechInput from './components/SpeechInput.svelte'

	/*
		TODO: create a stepped flow where every step expects
		different responses to accomodate more complicated flows.

		If response is not known we can then show the unknown response,
		something we're not able to do now.
	*/

	let step = 'start'
	let userAnswer = ''
	let userTranscript = ''

	const isPossibleAnswer = (userAnswer) => {
		const { possibleAnswers } = userSteps[step]
		const allAnswersPossible = possibleAnswers.some(answer => answer === 'all')

		if (allAnswersPossible) {
			return true
		}

		return possibleAnswers.find(answer => answer === userAnswer)
	}

	const changeSteps = (value) => {
		let { detail } = value

		const containsWord = (value) => {
			return detail.includes(value)
		}

		if (containsWord('ja')) {
			userAnswer = 'ja'
		} else if (containsWord('nee')) {
			userAnswer = 'nee'
		} else {
			userAnswer = detail
		}

		if (isPossibleAnswer(userAnswer)) {
			step = userSteps[step].nextSteps.find(nextStep => nextStep === userAnswer)
				|| userSteps[step].nextSteps[0]
		} else {
			step = 'unknown'
		}
	}
</script>

<main>
	<h1>{userSteps[step].feedback}</h1>
	<p>{userSteps[step].subtitle}</p>

	<SpeechInput
		transcript={userAnswer}
		on:result={changeSteps}
	/>

	{#if step === 'searchbooks'}
		{#await api.search(userAnswer)}
			<p>Op zoek naar boeken met "{userAnswer}"...</p>

			{:then books}
				<p>{books.total} boeken gevonden met "{userAnswer}"</p>
				{#each books.results as book}
					<Book book={book} />
				{/each}
			{:catch}
				<p>Kon geen boeken vinden met {userAnswer}</p>
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