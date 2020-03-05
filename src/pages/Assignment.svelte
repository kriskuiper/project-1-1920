<script>
    import {
        assignmentTitle,
        assignmentDescription,
        assignmentBooks
    } from '../store'

    import Book from '../components/Book.svelte'
</script>

<main>
    <h1>{$assignmentTitle}</h1>
    <p>{$assignmentDescription}</p>
    <ul>
        {#each $assignmentBooks as book}
            <Book book={book} />
        {/each}
    </ul>
</main>