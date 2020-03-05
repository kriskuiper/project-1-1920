<script>
    import recognition from '../../lib/recognition-instance'
    import { assignmentBooks } from '../store'

    export let book

    const addToAssignment = () => {
        recognition.start()

        recognition.onresult = (event) => {
            const { transcript } = event.results[0][0]
            
            if (transcript === 'voeg toe') {
                addBookToAssignment(book)
            }
            
            recognition.stop()
        }
    }

    const removeFromAssignment = () => {
        recognition.start()

        recognition.onresult = (event) => {
            const { transcript } = event.results[0][0]
            
            if (transcript.toLowerCase().includes('ver')) {
                removeBookFromAssignment(book)
            }
            
            recognition.stop()
        }
    }

    const addBookToAssignment = (bookToAdd) => {
        assignmentBooks.set([...$assignmentBooks, bookToAdd])
    }

    const removeBookFromAssignment = (bookToRemove) => {
        const filtered = $assignmentBooks.filter(assignmentBook => {
            return assignmentBook.isbn !== book.isbn
        })
        
        assignmentBooks.set(filtered)
    }

    $: isAdded = $assignmentBooks.some(assignmentBook => {
        return assignmentBook.isbn === book.isbn
    })
</script>

<article
    on:click={isAdded ? removeFromAssignment : addToAssignment}
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
        text-align: left;
        position: relative;
        padding-top: 5px;
    }

    article:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 5px;
        background: lightgreen;
        transition: width .4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        background-color: #eee;
    }

    article.is-added:before {
        width: 100%;
    }
</style>