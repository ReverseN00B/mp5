var net = require('net');
var clients = 0;

function isPrime(num) {

    if (num == 2) {
      return num +' is prime';
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return num+' is prime';
        } else if (num === i * i) {
          return num+' is not Prime';
        } else {
          return num+' not prime';
        }
      }
    } else {
      return 'not prime';
    }
  
  }
  


var server = net.createServer(function(client) {

    console.log('Client Connected');

    client.on('end', function() {
        console.log('Client disconnected:');
    })

    client.on('data', function(data) {
        client.write(isPrime(data.toString()));
    })
});

server.listen(8000, function() {
    console.log('Server Started on port 8000');
})