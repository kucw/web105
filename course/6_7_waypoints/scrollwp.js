$(function () {
    console.log("loading jquery successfully!");

    var waypoint = new Waypoint({
        element: document.getElementById('basic-waypoint'),
        handler: function () {
            notify('Basic waypoint triggered')
        }
    })



    $('#video1').waypoint(function () {
        $('#video1')[0].play();
    }, {
        offset: '10%', // middle of the page
        triggerOnce: true // just my preference...
    });

    $('#video2').waypoint(function () {
        $('#video2')[0].play();
    }, {
        offset: '50%', // middle of the page
        triggerOnce: true // just my preference...
    });
});