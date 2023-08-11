function showTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();

let alarmTime = null;
        let alarmTimeout = null;

        function setAlarm() {
            alarmTime = document.getElementById('alarmTime').value;
            if (alarmTime) {
                if (alarmTimeout) {
                    clearTimeout(alarmTimeout);
                }
                var now = new Date();
                let alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmTime.split(':')[0], alarmTime.split(':')[1]);
                if (now > alarmDate) {
                    alarmDate.setDate(alarmDate.getDate() + 1);
                }
                var timeToAlarm = alarmDate - now;
                alarmTimeout = setTimeout(() => alert('Wake up!'), timeToAlarm);
            }
        }