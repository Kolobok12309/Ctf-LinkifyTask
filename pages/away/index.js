export default {
  head() {
    return {
      meta: [{ hid: 'noindex', name: 'robots', content: 'noindex, nofollow' }],
    };
  },

  computed: {
    href() {
      return this.$route.query.url;
    },
  },
};
