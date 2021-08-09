const express = require('express');
var request = require('request');
var cors = require("cors");
const app = express();
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/Killua_Blast', (req, res) => {
  request(
    'https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=Killua_blast',
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/t', (req, res) => {
  const { hiscores } = require('osrs-json-api');
  //hiscores.getPlayer('Killua_Blast').then(console.log).catch(console.error);
  
  var result;

  hiscores.getPlayer('Killua_Blast')
  //.then((message) => { console.log(message);})
  .then((message) => { res.send(message);})
  .catch(console.error);
  
  //console.log(result);
  //res.send(result);
});

app.get('/p', function(req, res) {
  console.log(req.query.tagId);
  res.send("tagId is set to " + req.query.tagId);
});

app.get('/player', function(req, res) {
  const { hiscores } = require('osrs-json-api');
  playerName = "" + req.query.pid;

  hiscores.getPlayer(playerName)
  .then((message) => { res.send(message);})
  .catch(console.error);

  //res.send("No user found!");
});
