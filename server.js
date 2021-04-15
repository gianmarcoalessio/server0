
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

//la porta 80 è la porta di default, quindi basta indiciare sul web con localhost, per esempio nel caso della porta 3000 si usa localhost:3000
//COMMANDI TERMINALE CONTROLLO PROCESSI IN ESECUZIONE CON NODE SERVER
// + node server &
// + ps
// + kill "codice processo"

app.listen(80)