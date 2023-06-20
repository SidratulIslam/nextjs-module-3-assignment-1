const days = [
    "Sunday",
    "Monday",
    "Tuesday", 
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
function dayOfTheWeek(date) {
    const d = new Date(date);
    return d.getDay() // can be 0 - 6. total 7 days
}

function dayNameOfTheWeek(date) {
    const d = new Date(date);
    return days[d.getDay()] // can be 0 - 6. total 7 days
}

function dayOfTheWeekCurrentDate() {
    const d = new Date();
    return d.getDay() // can be 0 - 6. total 7 days
}

function dayNameOfTheWeekCurrentDate() {
    const d = new Date();
    
    return days[d.getDay()]
}

let day = dayOfTheWeek("2023-06-20") // can be 0 - 6. total 7 days
let dayName = dayNameOfTheWeek("2023-06-20")
let currentDay = dayOfTheWeekCurrentDate() // can be 0 - 6. total 7 days
let currentDayName = dayNameOfTheWeekCurrentDate()

console.log(day);
console.log(dayName);

console.log(currentDay);
console.log(currentDayName);