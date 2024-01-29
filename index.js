const http = require("http")

const HOST = "localhost"
const PORT = 3000


const server = http.createServer((rer, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Resposta enviada');
})

server.listen(PORT, HOST, ()=>{
    console.log(`Servidor está rodando em: http://${HOST}:${PORT}`);
})