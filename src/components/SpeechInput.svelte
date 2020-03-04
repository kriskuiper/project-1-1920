<script>
    import { createEventDispatcher } from 'svelte'
    import recognition from '../../lib/recognition-instance'
    import RecordButton from './RecordButton.svelte'

    export let transcript = 'Klik op het microfoontje'

    let hasResult = false
    let isListening = false

    const dispatch = createEventDispatcher()

    const startRecognition = () => {
        isListening = true
        recognition.start()
    }

    const stopRecognition = () => {
        isListening = false
        recognition.stop()
    }

    recognition.onspeechend = () => {
        stopRecognition()
    }

    recognition.onresult = (event) => {
        const { transcript } = event.results[0][0]
        
        dispatch('result', transcript)
    }
</script>

<div>
    <label for="speech-input">Jouw antwoord: {transcript}</label>
    <div>
        <input
            type="text"
            id="speech-input"
            readonly
            value={transcript}
        >
        <RecordButton
            isListening={isListening}
            on:record={startRecognition}
        />
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