const { expect } = require("chai");
const bookService = require("./bookService");

describe("Book Service Tests", function() {

    describe("getBooks()", function() {
        it("should return a status 200 and an array of books", function() {
            const response = bookService.getBooks();
            expect(response).to.have.property("status", 200);
            expect(response).to.have.property("data").that.is.an("array");

            
            if (response.data.length > 0) {
                const book = response.data[0];
                expect(book).to.include.all.keys("id", "title", "author", "year", "genre");
            }
        });
    });

    describe("addBook()", function() {
        it("should add a new book successfully", function() {
            const newBook = { id: "4", title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Dystopian" };
            const response = bookService.addBook(newBook);
            expect(response).to.have.property("status", 201);
            expect(response).to.have.property("message", "Book added successfully.");

            
            const addedBook = bookService.books.find(b => b.id === "4");
            expect(addedBook).to.deep.equal(newBook);
        });

        it("should return status 400 when adding a book with missing fields", function() {
            const invalidBook = { id: "5", title: "Incomplete Book" };
            const response = bookService.addBook(invalidBook);
            expect(response).to.have.property("status", 400);
            expect(response).to.have.property("error", "Invalid Book Data!");
        });
    });

    describe("deleteBook()", function() {
        it("should delete a book by id successfully", function() {
            const newBook = { id: "6", title: "Test Book", author: "Test Author", year: 2021, genre: "Test" };
            bookService.addBook(newBook);
            const response = bookService.deleteBook("6");
            expect(response).to.have.property("status", 200);
            expect(response).to.have.property("message", "Book deleted successfully.");

            
            const deletedBook = bookService.books.find(b => b.id === "6");
            expect(deletedBook).to.be.undefined;
        });

        it("should return status 404 when deleting a book with a non-existent id", function() {
            const response = bookService.deleteBook("999");
            expect(response).to.have.property("status", 404);
            expect(response).to.have.property("error", "Book Not Found!");
        });
    });

    describe("updateBook()", function() {
        it("should update a book successfully", function() {
            const updatedData = { id: "1", title: "1984", author: "George Orwell", year: 1949, genre: "Political Fiction" };
            const response = bookService.updateBook("1", updatedData);
            expect(response).to.have.property("status", 200);
            expect(response).to.have.property("message", "Book updated successfully.");

            
            const updatedBook = bookService.books.find(b => b.id === "1");
            expect(updatedBook).to.deep.equal(updatedData);
        });

        it("should return status 404 when updating a non-existent book", function() {
            const nonExistentData = { id: "999", title: "Nonexistent Book", author: "Unknown", year: 2020, genre: "Fiction" };
            const response = bookService.updateBook("999", nonExistentData);
            expect(response).to.have.property("status", 404);
            expect(response).to.have.property("error", "Book Not Found!");
        });

        it("should return status 400 when updating with incomplete book data", function() {
            const incompleteData = { id: "1", title: "", author: "George Orwell", year: 1949, genre: "Dystopian" };
            const response = bookService.updateBook("1", incompleteData);
            expect(response).to.have.property("status", 400);
            expect(response).to.have.property("error", "Invalid Book Data!");
        });
    });
});
