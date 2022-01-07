async function execute() {
    try {
        const firstPromise = majeur("31/01/2010");
        console.log(firstPromise);
    } catch (e) {
        console.log(e);
    }
};

const majeur = (date) => {
    return new Promise((resolve, failure) => {
        var from = date.split("/");
        var birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
        var cur = new Date();
        var diff = cur - birthdateTimeStamp;
        var age = Math.floor(diff / 31557600000);
        console.log(age);

        if (age > 17) {
            resolve("La personne est majeure");
        } else {
            failure("La personne est mineure");
        }
    });
};


execute();

function majeur(date) {
    return new Promise((succesMajeur, failureMajeur) => {
        var diff = Date.now() - date.getTime();
        var age = new Date(diff);
        if (age > 18) {
            succesMajeur();
        } else {
            failureMajeur();
        }
    })
}

function succesMajeur() {
    return true;
}

function failureMajeur() {
    console.error("La personne n'est pas majeur");
}

const promiseAge = age();
age.then(succesMajeur, failureMajeur);