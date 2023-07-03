const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },

  methods: {
    boxSelected(box) {
      const boxNameValue = 'box' + box + 'Selected';

      this[boxNameValue] = !this[boxNameValue];
    }
  }
})

app.mount('#styling')
