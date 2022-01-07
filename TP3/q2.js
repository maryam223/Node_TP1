async function execute() {
    try {
        const firstPromise = difference(2, 1);
        console.log(firstPromise);
    } catch (e) {
        console.log(e);
    }
};

const difference = (nbr1, nbr2) => {
    return new Promise((resolve, failure) => {
        if (nbr1 > nbr2) {
            resolve(nbr1 - nbr2);
        } else {
            failure(nbr1 + " est inférieur à " + nbr2);
        }
    });
};

execute();

// function succesDifference(nbr1, nbr2){
//     return nbr1 - nbr2;
// }

// function failureDifference(nbr1, nbr2){
//     console.error(nbr1 + " est inférieur à " + nbr2);
// }

// const promiseDifference = difference();
// difference.then(succesDifference, failureDifference);