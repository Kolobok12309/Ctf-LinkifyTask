<template>
  <div class="app">
    <NavBar class="navbar" />
    <div class="content">
      <Nuxt />
    </div>
    <ChatFooter class="footer" />
  </div>
</template>

<script>
import NavBar from '@/components/nav';
import ChatFooter from '@/components/footer';

export default {
    components: { NavBar, ChatFooter },
};
</script>

<style lang="scss">
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

body,
html,
#__nuxt,
#__layout {
    height: 100%;
}

.app {
    display: flex;
    flex-direction: column;
    min-height: 100%;

    .content {
        flex: 1 0 auto;
    }
    .footer {
        flex: 0 0 auto;
    }
}
</style>
