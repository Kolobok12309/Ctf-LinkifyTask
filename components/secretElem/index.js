export default {
  data() {
    return {
      secretValue: '',
      show: true,
    };
  },
  methods: {
    onSubmit() {
      try {
        document.getElementById('secret-div').textContent = this.secretValue;
      } catch (err) {
        console.error(err);
      } finally {
        this.show = false;
      }
    },
  },
};
