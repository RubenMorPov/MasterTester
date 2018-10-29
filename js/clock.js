/**
 * Function which pads at the begining of a given string, to aproach the specified length, with the character received.
 * @param {String} str String to pad.
 * @param {String} char Character to add.
 * @param {Number} count Lenght to aproach.
 */
var padStart = function (str, char, count) {
    for (var i = str.length; i < count; i++) {
        str = "" + char + str;
    }
    return str;
};
/**
 * Converts a date to a readable string format.
 * If no date received, takes the actual date.
 * @param {Date} date Date to convert.
 * @returns {String} String formated date.
 */
var dateStringify = function (date) {
    // If no date received we create a default date based in the actual one.
    date = date ? date : new Date();
    // We obtain al lthe data we need form the date.
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    // Stringify and return all the data.
    return [
        year + "-",
        padStart(month.toString(), '0', 2) + "-",
        padStart(day.toString(), '0', 2) + "-",
        padStart(hours.toString(), '0', 2) + ":",
        padStart(minutes.toString(), '0', 2) + ":",
        "" + padStart(seconds.toString(), '0', 2),
    ].join();
};
/**
 * Initiates all the App.
 */
var initApp = function () {
    setInterval('justClockIt()', 250);
};
/**
 * It's just a clock.
 */
var justClockIt = function () {
    var clock = dateStringify(new Date());
    console.log("The time is: " + clock);
};
