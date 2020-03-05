export default {
    start: {
        feedback: 'Heb je zin in je werkstuk?',
        subtitle: 'Ja of nee?',
        possibleAnswers: ['ja', 'nee'],
        nextSteps: ['ja', 'nee']
    },
    nee: {
        feedback: 'Ugh, balen! Je zou toch moeten beginnen... Hoe wil je je werkstuk noemen?',
        subtitle: 'Noem een titel voor je werkstuk',
        possibleAnswers: ['all'],
        nextSteps: ['assignmenttitle']
    },
    ja: {
        feedback: 'Awesome! Laten we snel beginnen. Hoe wil je je werkstuk noemen?',
        subtitle: 'Noem een titel voor je werkstuk',
        possibleAnswers: ['all'],
        nextSteps: ['assignmenttitle']
    },
    assignmenttitle: {
        feedback: 'Dat is een leuke titel! Heb je ook nog een korte inleiding?',
        subtitle: 'Beschrijf in het kort waar je werkstuk over gaat',
        possibleAnswers: ['all'],
        nextSteps: ['assignmentdescription']
    },
    assignmentdescription: {
        feedback: 'Wauw! Welke boeken heb je nodig voor je werkstuk?',
        subtitle: 'Geef één onderwerp waarover je boeken wilt zoeken',
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