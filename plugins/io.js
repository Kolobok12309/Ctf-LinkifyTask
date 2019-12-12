import io from 'socket.io-client';

const socket = io();

export default (context, inject) => {
  socket.promise = new Promise((resolve) => socket.on('connect', resolve));

  window.socket = socket;
  inject('socket', socket);
};
