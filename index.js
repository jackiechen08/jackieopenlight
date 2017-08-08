var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1529176349,
  channelSecret: 75d686a9bc689dfefc6e2d6705f737a1,
  channelAccessToken: 4lnx4dYVthDYPN4bhUNgwau03amqEsyaqNCTyt9tByTIzHqgBLjolH4p4fPefVCwpZncYhisKZ56GI/v0r9ur3UYXdc5GPaOABATlLqxrqo4/RS1Q4elC4l7b+6/Of099F6qZn6GaW/E3TSnVSEBsQdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
   //////repet what U said//////
   if (event.message.type = 'text') {
    var msg = event.message.text;
    event.reply(msg).then(function(data) {
      // success 
      console.log(msg);
    }).catch(function(error) {
      // error 
      console.log('error');
    });
  }
 
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});