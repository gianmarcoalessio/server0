//src(source): cartella dei sorgenti lato server dove mettiamo tutti i nostri moduli, dividiamo i file js lato server dai file lato client
//Un altro nome per indicare la cartella src è lib(per libreria)
//stiamo costruendo la libreria locale da dovre richiamiamo le funzioni,e in realtà è dove sono definite tutte le funzioni della nostra libreria 


//costruzione file system per aver accesso ai file del sistema, la richiamo su questo file perchè viene utilizzata da mandaErrore
const fs = require('fs')


//costruzione funzione mandaErrore
function mandaErrore(e, res) {
    //istruzioni per la pagina html not found 404 utilizzando file system e readFile

    fs.readFile("dist/404.html", (err, data) => { //i parametri sono obbligatori, anche se non vengono utilizzati all'interno della lambda expression
        if (data) {
            res.writeHeader(404, { "Content-Type": "text/html" }) //bisogna specificare il tipo di contenuto sta arriavndo al client
            res.write(data)
            res.end()
        } else {
            res.send(`errore: ${e.message}`)//dentro il catch non si può mandare un error
        }
    })
}

function getMainPage(req, res) {
    var { alpha, beta } = req.query
    if (!alpha) {
        //res.send(`attenzione mi serve alpha`)//res.send è come il return di una funzione e ce ne solo uno per ogni app.get 
        //per mandare un errore uso throw e non uso res.send introdotto nella riga prima
        throw new Error(`mi manca alpha`)
    } else {
        res.send(`hello world: ${alpha} e ${beta}`)
    }
}

//per usare mandaErrore, getMainPage,... in altri file devo ricordarmi di esportarle anche, con il codice scritto sotto
module.exports = {getMainPage,mandaErrore}
