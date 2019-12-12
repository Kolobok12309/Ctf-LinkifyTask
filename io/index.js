import socketIO from 'socket.io';

import http from 'http';

export default function() {
  this.nuxt.hook('render:before', (renderer) => {
    const server = http.createServer(this.nuxt.renderer.app);
    const io = socketIO(server);

    // overwrite nuxt.server.listen()
    this.nuxt.server.listen = (port, host) =>
      new Promise((resolve) =>
        server.listen(
          port || process.env.CTF_PORT,
          host || process.env.CTF_HOST,
          resolve,
        ),
      );
    // close this server on 'close' event
    this.nuxt.hook('close', () => new Promise(server.close));

    // Add socket.io events
    io.on('connection', (socket) => {
      socket.on('send-message', (message, to) => {
        io.to(to).emit('new-message', {
          from: socket.id,
          message,
        });
      });
      socket.on('get-id', (cb) => {
        cb(socket.id);
      });
    });
  });
}
