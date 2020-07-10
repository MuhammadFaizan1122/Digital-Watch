function currentTime() {
    var date = new Date;
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";
    if (hour == 12) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    var time = hour + " : " + min + " : " + sec + " " + session;
    document.getElementById("clock").innerHTML = time;

}
setInterval(currentTime, 100);