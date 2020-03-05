<script>
    import recognition from '../../lib/recognition-instance'
    import { assignmentBooks } from '../store'

    export let book

    const addToAssignment = () => {
        recognition.start()

        recognition.onresult = (event) => {
            const { transcript } = event.results[0][0]
            
            if (transcript === 'voeg toe') {
                console.log('Toegevoegd')

                addBookToAssignment(book)
            }
            
            recognition.stop()
        }
    }

    const addBookToAssignment = (bookToAdd) => {
        assignmentBooks.set([...$assignmentBooks, bookToAdd])
    }

    $: isAdded = $assignmentBooks.some(assignmentBook => {
        return assignmentBook.isbn === book.isbn
    })
</script>

<article
    on:click={addToAssignment}
    class={isAdded ? 'is-added' : null}
>
    {#if book.images}
        <img src={book.images[0]} alt="">
    {/if}

    <h3>{book.title}</h3>
    
    {#each book.formats as format}
        <p>{format}</p>
    {/each}

    {#if book.isbn}
        <p>{book.isbn}</p>
    {/if}
</article>

<style>
    article {
        cursor: pointer;
    }

    .is-added {
        border: 2px solid greenyellow;
    }
</style>