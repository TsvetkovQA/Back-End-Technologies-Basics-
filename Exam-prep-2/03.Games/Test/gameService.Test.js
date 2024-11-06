import { expect } from "chai";
import { gameService } from "../gameService.js";

describe("gameService Tests", function () {

    describe("getGames()", function () {
        it('Should return a successful response with a list of games', function () {
            const response = gameService.getGames();
            expect(response.status).to.equal(200);
            expect(response.data).is.an('array').and.have.lengthOf(3);
            expect(response.data.at(0)).is.include.keys('id', 'title', 'genre', 'year', 'developer', 'description');
        })
        // Test: Should return a successful response with a list of games
        // 1. Verify the response status is 200.
        // 2. Ensure the data is an array with a length of 3.
        // 3. Check that the first game includes the required keys: 'id', 'title', 'genre', 'year', 'developer', 'description'.
    });

    describe("addGame()", function () {
        it('Should add a new game successfully', function () {
            const newGame = { id: "4", title: "The Legend of Zelda: Breath of the Wild4", genre: "Action-adventure4", year: 20174, developer: "Nintendo4", description: "An action-adventure game in an open world4." };

            const response = gameService.addGame(newGame);
            expect(response.status).to.equal(201);
            expect(response.message).to.equal('Game added successfully.');

            const games = gameService.getGames().data;
            expect(games).to.deep.include(newGame);
        });
        // Test: Should add a new game successfully
        // 1. Create a valid new game object.
        // 2. Verify the response status is 201 and the success message is correct.
        // 3. Check that the newly added game appears in the game list.
        it('Should return an error for invalid game data', function () {
            const invalidGame = { genre: "Action-adventure4", year: 20174, developer: "Nintendo4" };

            const response = gameService.addGame(invalidGame);
            expect(response.status).to.equal(400);
            expect(response.error).to.equal('Invalid Game Data!');
        })
        // Test: Should return an error for invalid game data
        // 1. Create an invalid game object (missing required fields).
        // 2. Check that the response status is 400 and the error message is "Invalid Game Data!".
    });

    describe("deleteGame()", function () {
        it('Should delete an existing game by ID', function() {
            const gameForDelition = gameService.getGames().data.find(game => game.id === '1');
            const response = gameService.deleteGame('1');
            expect(response.status).to.equal(200);
            expect(response.message ).to.equal('Game deleted successfully.');
            
            const games = gameService.getGames().data;
            // const deletedGame = gameService.getGames().data.at(1);
            expect(games).to.not.deep.include(gameForDelition);
        })
        // Test: Should delete an existing game by ID
        // 1. Delete a game by its ID.
        // 2. Verify the response status is 200 and the success message is correct.
        // 3. Ensure the game is successfully removed from the list.

        it('Should return an error if the game is not found', function() {
            const response = gameService.deleteGame('434');
            expect(response.status).to.equal(404);
            expect(response.error).to.equal('Game Not Found!');
        })
        // Test: Should return an error if the game is not found
        // 1. Attempt to delete a game with a non-existent ID.
        // 2. Check that the response status is 404 and the error message is "Game Not Found!".
    });

    describe("updateGame()", function () {

        const newGame = { id: "6", title: "The Legend of Zelda: Breath of the Wild456", genre: "Action-adventure489", year: 20174, developer: "Nintendo4", description: "An action-adventure game in an open world487." };

        it('Should update an existing game with new data', function() {

            console.log(gameService.getGames().data);
            const response = gameService.updateGame('2', newGame);
            
            expect(response.status).to.equal(200);
            expect(response.message).to.equal('Game updated successfully.');
            
            const games = gameService.getGames().data;
            expect(games).to.deep.include(newGame);
        })
        // Test: Should update an existing game with new data
        // 1. Create updated game data and update an existing game by its ID.
        // 2. Verify the response status is 200 and the success message is correct.
        // 3. Ensure the updated game is reflected in the game list.

        it('Should return an error if the game to update is not found', function() {
            const response = gameService.updateGame('890', newGame);
            expect(response.status).to.equal(404);
            expect(response.error).to.equal('Game Not Found!');
        })
        // Test: Should return an error if the game to update is not found
        // 1. Attempt to update a game that doesn't exist.
        // 2. Check that the response status is 404 and the error message is "Game Not Found!".

        it('Should return an error if the new game data is invalid', function() {
            const newGame = { year: 20174, developer: "Nintendo4", description: "An action-adventure game in an open world487." };

            const response = gameService.updateGame('3', newGame);
            expect(response.status).to.equal(400);
            expect(response.error).to.equal('Invalid Game Data!');
        })
        // Test: Should return an error if the new game data is invalid
        // 1. Provide incomplete or invalid data for an existing game.
        // 2. Check that the response status is 400 and the error message is "Invalid Game Data!".
    });
});
