import DateManager from "./services/DateManager.js";

const addDay = DateManager.format(Date.now(), "addDay", 1);
const subtractDay = DateManager.format(Date.now(), "subtractDay", 1);

const addMonth = DateManager.format(Date.now(), "addMonth", 1);
const subtractMonth = DateManager.format(Date.now(), "subtractMonth", 1);

const addYear = DateManager.format(Date.now(), "addYear", 1);
const subtractYear = DateManager.format(Date.now(), "subtractYear", 1);

const mmddyyyy = DateManager.format(Date.now(), "mm/dd/yyyy");
const mmddyyyy2 = DateManager.format(Date.now(), "mm-dd-yyyy");

const mmddyy = DateManager.format(Date.now(), "mm/dd/yy");
const mmddyy2 = DateManager.format(Date.now(), "mm-dd-yy");

console.log("now", new Date());
console.log("addDay", addDay);
console.log("subtractDay", subtractDay);
console.log("addMonth", addMonth);
console.log("subtractMonth", subtractMonth);
console.log("addYear", addYear);
console.log("subtractYear", subtractYear);
console.log("mm/dd/yyyy", mmddyyyy);
console.log("mm-dd-yyyy", mmddyyyy2);
console.log("mm-dd-yyyy", mmddyy);
console.log("mm-dd-yyyy", mmddyy2);
