// The data/time we want to count down to
let countDownDate = new Date("Jan 11, 2023 18:00:00").getTime();

function time() {
    // Run myfunc every second
    let now = new Date().getTime();
    let time_left = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    let days = Math.floor(time_left / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time_left % (1000 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + "j "
    document.getElementById("hours").innerHTML = hours + "h "
    document.getElementById("mins").innerHTML = minutes + "m "
    document.getElementById("secs").innerHTML = seconds + "s "

    // Display the message when countdown is over
    if (time_left < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = "0"
        document.getElementById("hours").innerHTML = "0"
        document.getElementById("mins").innerHTML = "0"
        document.getElementById("secs").innerHTML = "0"
    }
}

time();
setInterval(time, 1000);
