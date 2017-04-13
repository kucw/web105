$(function () {
    // get the lenght of each path
    var door_length = document.querySelector('#door').getTotalLength();
    var doorknob_length = document.querySelector('#doorknob').getTotalLength();
    var house_length = document.querySelector('#house').getTotalLength();
    var sun_length = document.querySelector('#sun').getTotalLength();
    
    console.log("door: ", door_length);
    console.log("doorknob: ", doorknob_length);
    console.log("house: ", house_length);
    console.log("sun: ", sun_length);
});