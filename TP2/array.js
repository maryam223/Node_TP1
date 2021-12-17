function sortAlpha(tab) {
    tab.sort();
    return tab;
}

function randomItem(tab) {
    return tab[Math.floor(Math.random() * tab.length)];
}

module.exports = {
    sortAlpha,
    randomItem
};