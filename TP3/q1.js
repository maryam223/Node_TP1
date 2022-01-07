async function execute() {
    try {
        const firstPromise = motVingt("test");
        console.log(firstPromise);
    } catch (e) {
        console.log(e);
    }
};

const motVingt = (mot) => {
    return new Promise((resolve, failure) => {
        if (mot.length > 20) {
            failure("La chaine fait plus de 20 caractères");
        } else {
            resolve("La chaine ne fait pas plus de 20 caractères");
        }
    });
};


execute();

// // function succesmotVingt(){
// //     return true;
// // }

// // function failuremotVingt(){
// //     console.error("La chaine ne fait pas plus de 20 caractères");
// // }

// const promiseMotVingt = motVingt();
// motVingt.then(succesmotVingt, failuremotVingt);