import { safetyText } from '@/utils/safe';

export default {
  props: {
    receiver: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      text: '',
    };
  },

  computed: {
    disabled() {
      return !this.receiver;
    },

    messages() {
      if (!this.receiver) return [];

      return this.receiver.messages;
    },

    titleText() {
      if (!this.receiver) return 'Не выбран диалог';

      return `Диалог с ${this.receiver.id}`;
    },
  },

  methods: {
    onSubmit() {
      this.$emit('sendMessage', this.text);
      this.text = '';
    },

    sanitize(text) {
      return safetyText(text);
    },
  },
};
