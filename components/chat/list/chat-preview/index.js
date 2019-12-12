export default {
  props: {
    receiver: {
      type: Object,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    lastMessage() {
      if (!this.receiver.messages.length) return 'Пусто';

      return this.receiver.messages.slice(-1)[0].text;
    },
  },
};
