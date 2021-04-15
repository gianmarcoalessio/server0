//Per usare mandaErrore e getMainPage su server js devo usare require, non deve essere per forza legato all'ordine dell'export su errore404.js
const {mandaErrore,getMainPage}= require("./src/errore404.js")

//richiedo la libreria express con la funzione require su nodejs
const ex = require('express')
//express ritorna una funzione, l'applicazione di ex che è express la chiamiamo app
const app = ex()
//viene chiamato SERVIZIO la lambda expression legata allo '/' dentro app.get, vengono chiamati servizi in get
//se l'indirizzo è 'localhost:3000/' mi devi ritornare hello world
// per vederlo scriver sul browser localhost:3000/?alpha=11&beta=dinamico
app.get('/', (req, res) => {
    //console.log(req.query)
    try {
        //richiamo la funzione getMainPage
        getMainPage(req,res)
    } catch (e) {
        //struttura per gestire l'errore, è bene pensare negativo, cioè tenere conto del possibile non funzionamento del servizio e fare in modo che il nostro servizio sia ingrado di comunicarci direttamente il malfunzionamento
        //richiamo funzione mandaErrore dentro il catch
        mandaErrore(e,res)
        //res.status(404).send(`errore: ${e.message}`)
    }
    // per vederlo scriver sul browser localhost:3000/?alpha=11&beta=dinamico
})
//sul browser si risponde localhost:3000/ciao
app.get('/ciao', (req, res) => {
    try {
        res.send('ciao mondo')
    } catch (error) {
        mandaErrore(error,res)
    }
})

//l'applicazione deve mettersi in ascolto nella porta 3000, localhost:3000 sul browser
app.listen(3000, () => {
    console.log(`il server è partito sulla porta 3000`)
})
