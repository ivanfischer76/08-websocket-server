
// referencias del html
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    //console.log('conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';
});

socket.on('disconnect', () => {
    //console.log('desconectado del servidor');

    lblOffline.style.display = '';
    lblOnline.style.display  = 'none';
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123asd',
        fecha: new Date().getTime()
    }
    //enviar el mensaje al seridor
    socket.emit('enviar-mensaje', payload, (id) => {
        // el id es el callback de retroalimentación del servidor
        console.log('desde el server', id);
    });

});