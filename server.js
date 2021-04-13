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
        var { alpha, beta } = req.query
        if (!alpha) {
            //res.send(`attenzione mi serve alpha`)//res.send è come il return di una funzione e ce ne solo uno per ogni app.get 
            //per mandare un errore uso throw e non uso res.send introdotto nella riga prima
            throw new Error(`mi manca alpha`)
        } else {
            res.send(`hello world: ${alpha} e ${beta}`)
        }
    } catch (e) {
        //struttura per gestire l'errore, è bene pensare negativo, cioè tenere conto del possibile non funzionamento del servizio e fare in modo che il nostro servizio sia ingrado di comunicarci direttamente il malfunzionamento
        res.status(404).send(`errore: ${e.message}`)
    }
    // per vederlo scriver sul browser localhost:3000/?alpha=11&beta=dinamico
})
//sul browser si risponde localhost:3000/ciao
app.get('/ciao', (req, res) => {
    res.send('ciao mondo')
})

//l'applicazione deve mettersi in ascolto nella porta 3000, localhost:3000 sul browser
app.listen(3000, () => {
    console.log(`il server è partito sulla porta 3000`)
})