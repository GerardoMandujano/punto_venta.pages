function startTime() {

    var hoy = new Date();
    var hr = hoy.getHours();
    var min = hoy.getMinutes();
    var sec = hoy.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checarTiempo(hr);
    min = checarTiempo(min);
    sec = checarTiempo(sec);
    document.getElementById("reloj").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

    var meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    // var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // var curWeekDay = days[hoy.getDay()];
    var curDia = hoy.getDate();
    var curMes = meses[hoy.getMonth()];
    console.log(hoy.getMonth());
    var curAnio = hoy.getFullYear();
    var fecha = curDia + "/ " + curMes + "/ " + curAnio;
    document.getElementById("fecha").innerHTML = fecha;

    var time = setTimeout(function() { startTime() }, 500);
}

function checarTiempo(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
console.time('codigo');
var i;
for (i = 1; i <= 100; i++)
    output += i;
console.timeEnd('codigo');