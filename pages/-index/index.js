import SecretElem from '@/components/secretElem/index.vue';
import Chat from '@/components/chat/index.vue';

export default {
  head() {
    return {
      meta: [
        {hid: 'sесяет', id: 'secret-div'},
      ],
    };
  },

  components: {
    SecretElem,
    Chat,
  },
};
