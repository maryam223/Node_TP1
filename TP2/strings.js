function string_to_slug(str) {

    return slug(str);
}

function capitalize(string) {


    const arr = string.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }

    const string2 = arr.join(" ");
    return string2;

}

module.exports = {
    string_to_slug,
    capitalize
}