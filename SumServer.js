var net = require('net');
var clients = 0;

function getSum(n)
{
    var sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    }
    return 'Sum = ' +sum;
}


var server = net.createServer(function(client) {

    console.log('Client Connected');

    client.on('end', function() {
        console.log('Client disconnected:');
    })

    client.on('data', function(data) {
        client.write(getSum(data.toString()));
    })
});

server.listen(8000, function() {
    console.log('Server Started on port 8000');
})