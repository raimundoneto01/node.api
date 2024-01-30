

const fastify = require('fastify')({
    logger: false
})


const PORT = 5005


fastify.get("/", (request, reply)=>{
    reply.send('Servidor Rodando')
})

fastify.listen({ port: PORT}, (err, address)=>{
    if(err) throw err
    console.log(`Servidor is now ${address}`);
 })


