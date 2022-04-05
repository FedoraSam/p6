//importer le package http de node
const http = require('http');

//création du serveur via méthode create server de node avec en argument req et res et la fonction servant de réponse à chaque appel 
//effectué sur ce serveur
const server = http.createServer((req, res)=>{
    res.end('réponse du serveur')
})

server.listen(process.env.PORT || 3000);