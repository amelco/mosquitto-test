var mqtt=require('mqtt');
var client = mqtt.connect("mqtt://localhost:1884",{clientId:"mqttjs01"})

var topic = "report";
client.subscribe(topic, {qos:0});

client.on('message',function(topic, message){
	console.log("topic is   : " + topic);
	console.log("message is : " + message);
});