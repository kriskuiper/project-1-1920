export default {
    start: {
        feedback: 'Heb je zin in je werkstuk?',
        subtitle: 'Ja of nee?',
        possibleAnswers: ['ja', 'nee'],
        nextSteps: ['ja', 'nee']
    },
    nee: {
        feedback: 'Ugh, balen! Waar gaat je werkstuk over?',
        subtitle: 'Zeg in één woord waar je werkstuk over gaat',
        possibleAnswers: ['all'],
        nextSteps: ['searchbooks']
    },
    ja: {
        feedback: 'Awesome! Laten we snel beginnen. Waar gaat je werkstuk over?',
        subtitle: 'Zeg in één woord waar je werkstuk over gaat',
        possibleAnswers: ['all'],
        nextSteps: ['searchbooks']
    },
    searchbooks: {
        feedback: 'Cool! Ik ga meteen voor je op zoek',
        subtitle: 'Dit kan even duren...',
        possibleAnswers: ['opnieuw'],
        nextSteps: ['start']
    },
    unknown: {
        feedback: 'Rustig aan, zo slim ben ik ook weer niet',
        subtitle: 'Ik vergeet ook nog eens alles, waar ging je werkstuk ook alweer over?',
        possibleAnswers: ['all'],
        nextSteps: ['searchbooks']
    }
}