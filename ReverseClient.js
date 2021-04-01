var net = require('net');
var client = net.connect(8000);
console.log('Connected to Server !!!')

client.write('hello all');

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function() {
    console.log('I have disconnected !!!')
});