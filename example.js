var soap = require('soap');
var url = 'https://webservice.kareo.com/services/soap/2.1/KareoServices.svc?singleWsdl';
var args = {name: 'value'};
soap.createClient(url, function(err, client) {
  client.GetPatients(args, function(err, result) {
      console.log(result);
  });
});