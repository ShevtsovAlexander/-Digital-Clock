function createDate() {
    var objDate = new Date();
    var day = objDate.getDay();
    var hour = objDate.getHours();
    var minute = objDate.getMinutes();
    var sec = objDate.getSeconds()
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    sec = sec < 10 ? '0' + sec : sec;


    document.querySelector('#day').textContent = dayNames[day];
    document.querySelector('#hour').textContent = hour;
    document.querySelector('#minute').textContent = minute;
    document.querySelector("#sec").textContent = sec;
    document.querySelector('#ampm').textContent = ampm;

   setTimeout(createDate, 1000);
}
window.addEventListener('load', createDate)
