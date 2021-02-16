const date = document.getElementById('countdown-date');
const days = document.getElementById('countdown-days');
const hrs = document.getElementById('countdown-hrs');
const mins = document.getElementById('countdown-mins');
const secs = document.getElementById('countdown-secs');

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const newDate = new Date();
const todaysDate = newDate.getDate();
const todaysMonth = months[newDate.getMonth()];
const todaysYear = newDate.getFullYear();

const cdDate = new Date();
cdDate.setDate(cdDate.getDate() + 30);

const cdDay = cdDate.getDate();
const cdMonth = months[cdDate.getMonth()];
const cdYear = cdDate.getFullYear();

console.log(cdDate);
console.log(cdDay);
console.log(cdMonth);
console.log(cdYear);
// date.innerHTML = today;


date.innerHTML = `${cdDay} ${cdMonth} ${cdYear}`;

