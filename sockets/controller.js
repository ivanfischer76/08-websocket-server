
const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('enviar-mensaje', (payload, callback) =>{
        const id =1234567;
        //retroalimentación del servidor
        callback({id, fecha: new Date().getTime()});
        socket.broadcast.emit('enviar-mensaje', payload);
        //console.log(payload);
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });
}

module.exports = {
    socketController
}