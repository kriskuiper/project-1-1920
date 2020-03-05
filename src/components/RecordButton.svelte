<script>
    import { createEventDispatcher } from 'svelte'
    import AppIcon from './AppIcon.svelte'

    export let isListening
    const dispatch = createEventDispatcher()
</script>

<button
    on:click={() => dispatch('record')}
    disabled={isListening}
    class={ isListening ? 'is-loading' : null }
>
    <AppIcon name={ isListening ? 'voice-recorder-filled' : 'voice-recorder' } />
</button>

<style>
    button {
        position: relative;
        font-size: 1.5rem;
        height: 60px;
        width: 60px;
        border: none;
        border-radius: 50%;
        background: #eee;
        mix-blend-mode: screen;
    }

    button:before,
    button:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        mix-blend-mode: screen;
        filter: blur(1px);
        animation: aura 20s ease-in-out infinite alternate;
        border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
    }

    button:before {
        background: lightgreen;
        animation-direction: reverse;
    }

    button:after {
        background: magenta;
    }

    button.is-loading {
        animation: pulse 1s linear infinite;
    }
    
    button.is-loading:before,
    button.is-loading:after {
        animation-duration: 10s;
    }

    @keyframes aura {
        25%,
        75% {
            border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
        }
        50% {
            border-radius: 40% 60% 60% 40% / 40% 60% 40% 60%;
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(0.90);
        }

        100% {
            transform: scale(1);
        }
    }
</style>