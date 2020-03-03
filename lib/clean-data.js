const getAuthors = book => book.authors.join(', ')
const getTitle = book => book.titles[0]
const cleanISBN = book => book.isbn[0].replace('=', '')
const getFormats = book => book.formats.map(format => format.text)

export const cleanBooks = (books) => {
    return books.map(book => ({
        id: book.id,
        isbn: book.isbn[0] && cleanISBN(book),
        title: book.titles[0] && getTitle(book),
        images: book.coverimages,
        formats: book.formats && getFormats(book),
        year: book.year,
        summary: book.summaries && book.summaries[0],
        authors: book.authors && getAuthors(book)
    }))
}