const axios = require("axios");

async function getShip(id) {
    try {
        const response = await axios.get(`https://swapi.py4e.com/api/starships/${id}`);
        console.log(response);
    } catch (e) {
        console.log(e);
    }
};



async function getNumberPlanet() {
    try {
        const response = await axios.get('https://swapi.py4e.com/api/planets/');
        console.log(response.data.count);
    } catch (e) {
        console.log(e);
    }
}

async function getDarkVadorBirthDate() {
    try {
        const response = await axios.get('https://swapi.py4e.com/api/people/?search=Darth%20%20Vader');
        console.log(response.data.results[0].birth_year);
    } catch (e) {
        console.log(e);
    }
}

async function getInWookie() {
    try {
        const response = await axios.get('https://swapi.py4e.com/api/people/1?format=wookiee');
        console.log(response.data);
    } catch (e) {
        console.log(e);
    }
};

async function getPlanet(url) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (e) {
        console.log(e);
    }
};

async function getR2D2Planet() {
    try {
        const response = await axios.get('https://swapi.py4e.com/api/people/?search=R2');
        console.log(response.data.results[0].homeworld);
    } catch (e) {
        console.log(e);
    }
};

async function getPeopleFromR2D2Planet() {
    try {
        getR2D2Planet().then((response) => {
            var people = response.people;
            console.log(people);
        })
    } catch (e) {
        console.log(e);
    }
};


getShip(10);
getNumberPlanet();
getDarkVadorBirthDate();
getInWookie();
getPeopleFromR2D2Planet();