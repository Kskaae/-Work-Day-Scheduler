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
//THEN I am presented with timeblocks for standard business hours
// in HTMl
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//Red present/green future/ black past 
if (moment().format("HH") == $(eightAMtext).attr("data-time"))
    $(nineAmElement).css("backgroundColor", "lightgray");
else if (moment().format("HH") > $(eightAMtext).attr("data-time"))
    $(eightAMtext).css("backgroundColor", "red");
{
    // if (this.moment === "past") {
    //   this.style.color = "black";
    // }
    // else if (this.moment === "present") {
    //   this.style.color = "red";
    //}
    //else (this.moment === "Future") 
    //  this.style.color = "green";
    //}
    //});


    //We need to create 9 conditionals for every hour that compare the current hour to a timblocks hour selected from the HTML
    //if time has passed , the timeblock will change to black color. If the time is current, the 
    //program will the timeblock will change to a red color. if a future time ,the timeblock will change to a green color 
    // getElementById "time8"

    //WHEN I click into a timeblock,add on click function:
    $("button").on("click", function () {
        value = $(this).siblings("textarea").val();
        hourString = $(this).siblings("div").text();
        saveSchedule(hourString, value);
        //THEN I can enter an event

        let dailyScheduleArray = dailySchedule
        //WHEN I click the save button for that timeblock
        //THEN the text for that event is saved in local storage
        localStorage.setItem("time8", JSON.stringify(eightAMtext));
        localStorage.setItem("time9", JSON.stringify(nineAMtext));
        localStorage.setItem("time10", JSON.stringify(tenAMtext));
        localStorage.setItem("time11", JSON.stringify(elevenAMtext));
        localStorage.setItem("time12", JSON.stringify(twelvePMtext));
        localStorage.setItem("time13", JSON.stringify(onePMtext));
        localStorage.setItem("time14", JSON.stringify(twoPMtext));
        localStorage.setItem("time15", JSON.stringify(threePMtext));
        localStorage.setItem("time16", JSON.stringify(fourPMtext));
        localStorage.setItem("time17", JSON.stringify(fivePMtext));
    });
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("textarea");
//add 9 event listers for each save button to store information
//document.getElementById("8AMbtn").addEventListener("click", function () {
    //let eightAMtext = document.getElementById("8AMtext").value
    //localStorage.setItem("8AM", eightAMtext)
    //console.log(event.target.previousElementSibling.previousElementSibling.value)
//})
//WHEN I refresh the page
//THEN the saved events persist.
