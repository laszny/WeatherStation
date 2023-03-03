//some nodes I used 





//#1 prepare data from Arduino to Raspberry database

var msg433 = {};
var msglength = {};
msg433.name = "DKW2012";
msg.payload = msg.payload.toString();
msglength.length = msg.payload.length;
if (msglength.length > 4) {
    const myArray = msg.payload.split(",");
    msg433.a1 = myArray[1];
    msg433.a2 = myArray[3];
    msg433.a3 = myArray[6];
    msg433.a1 = parseInt(msg433.a1)
    msg433.a2 = parseInt(msg433.a2)
    msg433.a3 = parseInt(msg433.a3)
    msg.msg433 = msg433;
    msg.length = msglength;
    return msg;
}


//#2 prepare temp and hum data and parse

var msg123 = {};
msg123.temp = msg.payload;
msg123.hum = msg.humidity;
msg123.temp = parseInt(msg123.temp)
msg123.hum = parseInt(msg123.hum)
msg.msg123 = msg123;
return msg;
