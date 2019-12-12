import ChatPreview from './chat-preview/index.vue';

export default {
  components: { ChatPreview },

  props: {
    value: {
      type: Object,
      default: null,
    },
    receivers: {
      default: () => [],
      type: Array,
    },
  },

  data() {
    return {
      search: '',
      newId: '',
    };
  },

  computed: {
    compValue: {
      set(newVal) {
        this.$emit('input', newVal);
      },
      get() {
        return this.value;
      },
    },

    sorted() {
      return this.receivers.sort((a, b) => b.lastAction - a.lastAction);
    },
  },

  methods: {
    selectReceiver(receiver) {
      this.compValue = receiver;
    },
    addChat() {
      this.$emit('addChat', this.newId);
      this.newId = '';
    },
  },
};
