/**
 * Function which pads at the begining of a given string, to aproach the specified length, with the character received.
 * @param {String} str String to pad.
 * @param {String} char Character to add.
 * @param {Number} count Lenght to aproach.
 */
const padStart = (str: String, char: String, count: Number): String => {
    for (let i = str.length; i < count; i++) {
        str = `${char}${str}`;
    }
    return str;
};

/**
 * Converts a date to a readable string format.
 * If no date received, takes the actual date.
 * @param {Date} date Date to convert.
 * @returns {String} String formated date.
 */
const dateStringify = (date: Date): String => {
    // If no date received we create a default date based in the actual one.
    date = date ? date : new Date();
    // We obtain al lthe data we need form the date.
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // Stringify and return all the data.
    return [
        `${year}-`,
        `${padStart(month.toString(), '0', 2)}-`,
        `${padStart(day.toString(), '0', 2)}-`,
        `${padStart(hours.toString(), '0', 2)}:`,
        `${padStart(minutes.toString(), '0', 2)}:`,
        `${padStart(seconds.toString(), '0', 2)}`,
    ].join();
};

/**
 * Initiates all the App.
 */
const initApp = () => {
    setInterval('justClockIt()', 250);
};

/**
 * It's just a clock.
 */
const justClockIt = () => {
    const clock = dateStringify(new Date());
    console.log(`The time is: ${clock}`);
};
