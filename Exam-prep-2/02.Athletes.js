function solve(athletes) {
    function getAthletesBySport(sport) {
        const filteredAthletes = athletes.filter(athlete => athlete.sport === sport);
        return filteredAthletes;
    }

    function addAthlete(id, name, sport, medals, country) {
        const newAthlete = {id, name, sport, medals, country};
        athletes.push(newAthlete);
        return athletes;
    }

    function getAthleteById(id) {
        const searchedAthlet = athletes.find(athlet => athlet.id === id);
        return searchedAthlet ? searchedAthlet : `Athlete with ID ${id} not found`;
    }

    function removeAthleteById(id) {
        const athletToRemove = athletes.find(athlet => athlet.id === id);
        if (athletToRemove) {
            athletes = athletes.filter(athlet => athlet.id !== id);
            return athletes;
        } else {
            return `Athlete with ID ${id} not found`;
        }
    }

    function updateAthleteMedals(id, newMedals) {
        const searchedAthlet = athletes.find(athlet => athlet.id === id);
        if (searchedAthlet) {
            searchedAthlet.medals = newMedals;
            return athletes;
        } else {
            return `Athlete with ID ${id} not found`;
        }
    }

    function updateAthleteCountry(id, newCountry) {
        const searchedAthlet = athletes.find(athlet => athlet.id === id);
        if (searchedAthlet) {
            searchedAthlet.country = newCountry;
            return athletes;
        } else {
            return `Athlete with ID ${id} not found`;
        }
    }

    return {
        getAthletesBySport,
        addAthlete,
        getAthleteById,
        removeAthleteById,
        updateAthleteMedals,
        updateAthleteCountry
    };
}

let athletes = [
    { id: 1, name: "Usain Bolt", sport: "Sprinting", medals: 8, country: "Jamaica" },
    { id: 2, name: "Michael Phelps", sport: "Swimming", medals: 23, country: "USA" },
    { id: 3, name: "Simone Biles", sport: "Gymnastics", medals: 7, country: "USA" }
];

const olympics = solve(athletes);
// console.log(olympics.getAthletesBySport("Swimming"));

console.log(olympics.addAthlete(4, "Katie Ledecky", "Swimming", 7, "USA"));

// olympics.getAthleteById(1);

// olympics.removeAthleteById(2);

// olympics.updateAthleteMedals(3, 8);

// olympics.updateAthleteCountry(10, "Canada");

