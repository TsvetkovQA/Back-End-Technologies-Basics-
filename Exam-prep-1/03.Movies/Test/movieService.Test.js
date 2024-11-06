import { expect } from "chai";
import { movieService } from "../movieService.js";

describe("movieService Tests", function () {

    describe("getMovies()", function () {
        it('Should return all movies with status 200', function () {
            const response = movieService.getMovies();
            expect(response.status).to.equal(200);
            expect(response.data).to.be.an('array').that.has.lengthOf(3);
            //expect(response.data.length).to.equal(3);
            expect(response.data.at(0)).to.include.keys('id', 'name', 'genre', 'year', 'director', 'rating', 'duration', 'language', 'desc');
        });

        //// Test: Should return all movies with status 200
        // 1. Check if the response status is 200.
        // 2. Ensure the data is an array with a length of 3.
        // 3. Verify the first item contains the required keys: 'id', 'name', 'genre', 'year', 'director', 'rating', 'duration', 'language', 'desc'.
    });

    describe("addMovie()", function () {
        it('Should successfully add a new movie', function () {
            const newMovie = {
                id: "4",
                name: "Inception2",
                genre: "Sci-Fi",
                year: 2011,
                director: "Christopher Nolan",
                rating: 8.9,
                duration: 149,
                language: "English",
                desc: "A thief who steals corporate secrets through the use of dream-sharing technology."
            };

            const response = movieService.addMovie(newMovie);
            expect(response.status).to.equal(201);
            expect(response.message).to.equal('Movie added successfully.');

            const movies = movieService.getMovies().data;
            expect(movies).to.deep.include(newMovie);

        });
        // Test: Should successfully add a new movie
        // 1. Create a new movie object with valid data.
        // 2. Check if the response status is 201 and the success message is correct.
        // 3. Verify that the newly added movie is present in the movie list.

        it('Should return an error for invalid movie data', function () {
            const invalidMovie = {
                genre: "Sci-Fi",
                year: 2011,
                director: "Christopher Nolan",
                rating: 8.9,
                desc: "A thief who steals corporate secrets through the use of dream-sharing technology."
            };

            const response = movieService.addMovie(invalidMovie);
            expect(response.status).is.equal(400);
            expect(response.error).to.equal("Invalid Movie Data!");
        });
        // Test: Should return an error for invalid movie data
        // 1. Create a movie object with incomplete or invalid data.
        // 2. Check if the response status is 400 and the error message is correct.
    });

    describe('deleteMovie()', function () {
        it('Should delete a movie by id successfully', function () {
            const addedMovie = {
                id: "5",
                name: "Inception3",
                genre: "Sci-Fi",
                year: 2030,
                director: "Christopher Nolan",
                rating: 8.9,
                duration: 149,
                language: "English",
                desc: "A thief who steals corporate secrets through the use of dream-sharing technology."
            };

            const responseForAddedMovie = movieService.addMovie(addedMovie);
            expect(responseForAddedMovie.status).to.equal(201);

            const response = movieService.deleteMovie('5');
            expect(response.status).to.equal(200);
            expect(response.message).to.equal('Movie deleted successfully.');

            const movies = movieService.getMovies().data;
            expect(movies).to.not.deep.include(addedMovie);
        });

        // Test: Should delete a movie by id successfully
        // 1. Add a movie to ensure there is one to delete.
        // 2. Delete the movie by its id and check if the response status is 200.
        // 3. Verify that the success message is correct.
        // 4. Ensure that the movie is no longer in the list.

        it('Should return 404 for a non-existent movie id', function () {
            const response = movieService.deleteMovie('569');
            expect(response.status).to.equal(404);
            expect(response.error).to.equal('Movie Not Found!');
        });
        // Test: Should return 404 for a non-existent movie id
        // 1. Attempt to delete a movie with an id that doesn't exist.
        // 2. Check if the response status is 404 and the error message is correct.
    });

    describe("updateMovie()", function () {
        const newMovieForUpdate = {
            id: "7",
            name: "Inception444",
            genre: "Sci-Fi",
            year: 2011,
            director: "Christopher Nolan",
            rating: 8.9,
            duration: 149,
            language: "English",
            desc: "A thief who steals corporate secrets through the use of dream-sharing technology."
        };

        it('Should update an existing movie successfully', function () {
            const response = movieService.updateMovie('The Matrix', newMovieForUpdate);
            expect(response.status).to.equal(200);
            expect(response.message).to.equal('Movie updated successfully.');

            const movies = movieService.getMovies().data;
            expect(movies).to.deep.include(newMovieForUpdate);

        });
        // Test: Should update an existing movie successfully
        // 1. Create an updated movie object with valid data.
        // 2. Update the movie by its name and check if the response status is 200.
        // 3. Verify that the success message is correct.
        // 4. Ensure that the updated movie is present in the movie list.

        it('Should return an error if the movie to update does not exist', function () {

            const newMovieForUpdate = {
                id: "8",
                name: "Inception888",
                genre: "Sci-Fi",
                year: 2011,
                director: "Christopher Nolan",
                rating: 8.9,
                duration: 149,
                language: "English",
                desc: "A thief who steals corporate secrets through the use of dream-sharing technology."
            };

            const response = movieService.updateMovie('tra-la-la', newMovieForUpdate);
            expect(response.status).to.equal(404);
            expect(response.error).to.equal('Movie Not Found!');
        });
        // Test: Should return an error if the movie to update does not exist
        // 1. Attempt to update a movie that doesn't exist.
        // 2. Check if the response status is 404 and the error message is correct.

        it('Should return an error if the new movie data is invalid', function () {
            const incompletedMovie = {
                year: 2011,
                director: "Christopher Nolan",
                rating: 8.9,
            };

            const response = movieService.updateMovie('Interstellar', incompletedMovie);
            expect(response.status).to.equal(400);
            expect(response.error).to.equal('Invalid Movie Data!');
        });
        // Test: Should return an error if the new movie data is invalid
        // 1. Provide incomplete or invalid data for an existing movie.
        // 2. Check if the response status is 400 and the error message is correct.
    });
});