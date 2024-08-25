const express = require("express");

const app = express();
app.use(express.json());

interface Book {
    id: string,
    title: string,
    description: string,
    authors: string,
    favorite: string,
    fileCover: string,
    fileName: string,
    fileBook: string,    
}

abstract class BooksRepository {
    createBook(book: Book){}
    getBook(id: string){}
    getBooks(){} 
    updateBook(id: string){}
    deleteBook(id: string){}
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is started on port ${PORT}`));
