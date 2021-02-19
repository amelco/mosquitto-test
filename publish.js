var mqtt = require('mqtt');
const port = 1884;
var client  = mqtt.connect('mqtt://localhost:'+ port);

var topic = "report";

// colocar aqui o JSON quer o broker manda como resposta
var json_resposta = {
  tag: '868583555',
  cmd: 'on'
};

client.on('connect', () => {
  client.subscribe(topic, (err) => {
    if (!err) {
      client.publish(topic, JSON.stringify(json_resposta));
      client.end();
    }
    else {
      console.log("Erro no subscribe.")
    }
  });
});