//GIVEN I am using a daily planner to create a schedule

const dailySchedule = {
    "time8": "",
    "time9": "",
    "time10": "",
    "time11": "",
    "time12": "",
    "time13": "",
    "time14": "",
    "time15": "",
    "time16": "",
    "time17": "",
};

//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
console.log(moment().format('MMM Do YY'))
document.getElementById("currentDay").append(moment().format('MMM Do YY'));

// window.onscroll = function () { myFunction() };

// function myFunction() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById("myBar").style.width = scrolled + "%";

//THEN I am presented with timeblocks for standard business hours
// in HTML
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//Red present/green future/ black past 
//We need to create 9 conditionals for every hour that compare the current hour to a timblocks hour selected from the HTML
//if time has passed , the timeblock will change to black color. If the time is current, the 
//program will the timeblock will change to a red color. if a future time ,the timeblock will change to a green color 
// getElementById "time8"

//WHEN I click into a timeblock
//add on click function
//THEN I can enter an event

//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//add 9 event listers for each save button to store information
document.getElementById("8AMbtn").addEventListener("click", function () {
    let eightAMtext = document.getElementById("8AMtext").value
    localStorage.setItem("8AM", eightAMtext)
    console.log(event.target.previousElementSibling.previousElementSibling.value)
})
//WHEN I refresh the page
//THEN the saved events persist