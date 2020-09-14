//GIVEN I am using a daily planner to create a schedule
const  today  = new Date();
const day = today.getDay();
const dayList =  ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("today is:"+dayList[day]+".");
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const dailySchedule = {
    "time8": "",
    "time9": "",
    "time10": "",
    "time11": "",
    "time12": "",
    "time1": "",
    "time2": "",
    "time3": "",
    "time4": "",
    "time5": "",
};
//$(function)(dailySchedule/information); {

};

//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
let dayDisp = currentDay
$()
//WHEN I scroll down
function scroll()
//THEN I am presented with timeblocks for standard business hours
//How do I add timeblocks?
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist