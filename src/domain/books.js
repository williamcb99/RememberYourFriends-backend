let books = [
    {
        id: 1,
        title: "Example Book 1",
        author: "Author 1"
    },
    {
        id: 2,
        title: "Example Book 2",
        author: "Author 2"
    }
    // ... other books ...
];

function listAllBooks() {
    return books;
}

function getBookById(bookId) {
    return books.find(b => b.id === bookId);
}

function createBook(newBook) {
    newBook.id = books.length + 1;  // Simple ID generation
    books.push(newBook);
    return newBook;
}

function updateBook(bookId, updatedBook) {
    const index = books.findIndex(b => b.id === bookId);

    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };
        return books[index];
    }
    return null;
}

function deleteBook(bookId) {
    const index = books.findIndex(b => b.id === bookId);
    
    if (index !== -1) {
        return books.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    listAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};
