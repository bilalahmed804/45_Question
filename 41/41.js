// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
var magician = [
    "Harry potter",
    "Harmione",
    "Dumble Door",
    "Ron Weasly",
];
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
show_magicians(magician);
