<script>
    import recognition from '../../lib/recognition-instance'
    import containsWord from '../../lib/contains-word'

    export let placeholder
    export let onResult

    let hasResult = false
    let isListening = false
    let userAnswer = ''

    const enableSpeech = () => {
        isListening = true
        recognition.start()
    }

    const disableSpeech = () => {
        isListening = false
        recognition.stop()
    }

    recognition.onspeechend = () => {
        disableSpeech()
    }

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        const containsWord = (value) => {
            return transcript.includes(value)
        }

        /*
            Very sloppy, this could be done a lot cleaner.
            Works for v0.1 though
        */
        if (containsWord('ja')) {
            userAnswer = 'ja'
            onResult(userAnswer, '')
        } else if (containsWord('nee')) {
            userAnswer = 'nee'
            onResult(userAnswer, '')
        } else {
            userAnswer = 'searchbooks'
            onResult(userAnswer, transcript)
        }
    }
</script>

<div>
    <label for="speech-input">{placeholder}</label>
    <div>
        <input
            type="text"
            id="speech-input"
            value={userAnswer}
            readonly
        >
        <button
            on:click={enableSpeech}
            disabled={isListening}
        >{ isListening ? 'Luisteren...' : 'Luister' }</button>
    </div>
</div>

<style>
    label {
        display: none;
    }

    div > div {
        display: flex;
    }

    input {
        flex-grow: 1;
    }
</style>