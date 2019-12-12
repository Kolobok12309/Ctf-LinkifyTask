import List from './list/index.vue';
import Dialog from './dialog/index.vue';

export default {
  components: {
    List,
    Dialog,
  },
  data() {
    return {
      receivers: [],
      myId: null,
      timer: null,

      nowReceiver: null,
    };
  },
  computed: {
    nowMsgs() {
      if (!this.nowReceiver) return null;

      return this.nowReceiver.messages;
    },
  },
  beforeMount() {
    this.getMyId();
    this.$socket.on('new-message', this.onNewMsg);
    this.$socket.on('connect', this.getMyId);

    this.timer = setInterval(this.getMyId, 5000);
  },

  beforeDestroy() {
    this.$socket.removeListener('new-message', this.onNewMsg);
    this.$socket.removeListener('connect', this.getMyId);

    clearInterval(this.timer);
  },

  methods: {
    getMyId() {
      this.$socket.emit('get-id', this.setMyId);
    },
    setMyId(id) {
      this.myId = id;
    },
    onNewMsg({ message, from }) {
      let findedReceiver = this.receivers.find((user) => user.id === from);
      if (!findedReceiver) {
        findedReceiver = { id: from, messages: [] };
        this.receivers.push(findedReceiver);
      }

      findedReceiver.messages.push(message);
      findedReceiver.lastAction = Date.now();
    },
    addMyMsg(message, receiver) {
      receiver.messages.push({ ...message, myMessage: true });
      receiver.lastAction = Date.now();
    },
    addChat(id) {
      const findedReceiver = this.receivers.find((user) => user.id === id);
      if (findedReceiver) return;

      const newReceiver = { id, messages: [], lastAction: Date.now() };

      this.receivers.push(newReceiver);
      this.nowReceiver = newReceiver;
    },
    sendMessage(text) {
      if (!text.trim()) {
        return;
      }
      const message = {
        date: new Date().toJSON(),
        text: text.trim(),
      };
      this.addMyMsg(message, this.nowReceiver);
      this.message = '';
      this.$socket.emit('send-message', message, this.nowReceiver.id);
    },
  },
};
