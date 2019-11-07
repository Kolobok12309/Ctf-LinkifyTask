<template>
  <BJumbotron
    tag="footer"
    bg-variant="danger"
    text-variant="white"
    header="CTF Chat"
    lead="Chat with admins Chat with rivals Chat with everyone"
    class="footer"
    fluid
  >
    <h6>P.S. Chat only with peoples which in chat</h6>

    <hr class="my-4">

    <BButton
      variant="warning"
      @click="scrollToChat"
    >
      Start chat
    </BButton>
  </BJumbotron>
</template>

<script>
import scrollToElem from '@/utils/scrollToElem';

export default {
    methods: {
        scrollToChat() {
            const chat = document.getElementById('chat');
            if (!chat) {
                this.$router.push('/');
            } else {
                scrollToElem(chat);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.footer {
    margin: 0;
}
</style>
