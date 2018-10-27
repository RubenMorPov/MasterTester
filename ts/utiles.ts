/**
 * Converts a date to a readable string format.
 * If no date received, takes the actual date.
 * @param {Date} date Date to convert.
 * @returns {String} String formated date.
 */
const dateStringify = (date: Date): String => {
    date = date ? date : new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${year}-${month}-${day} | ${hours}:${minutes}:${seconds}`;
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
