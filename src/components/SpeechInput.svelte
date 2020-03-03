<script>
    import recognition from '../../lib/recognition-instance'

    export let onResult
    export let placeholder

    let hasResult = false
    let isListening = false
    let userAnswer = ''

    const startRecognition = () => {
        isListening = true
        recognition.start()
    }

    const stopRecognition = () => {
        isListening = false
        recognition.stop()
    }

    const handleRecognitionResult = (transcript) => {
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

    recognition.onspeechend = () => {
        stopRecognition()
    }

    recognition.onresult = (event) => {
        const { transcript } = event.results[0][0]
        
        handleRecognitionResult(transcript)
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
            on:click={startRecognition}
            disabled={isListening}
        >
            { isListening ? 'Luisteren...' : 'Neem op'}
        </button>
    </div>
</div>

<style>
    label {
        position: absolute;
        transform: translateX(-9999px);
    }

    div > div {
        display: flex;
    }

    input {
        flex-grow: 1;
        padding: 1rem;
        margin-right: 1rem;
    }
</style>