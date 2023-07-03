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

      // this['box' + box + 'Selected'] = !this['box' + box + 'Selected'];

      // switch (box) {
      //   case 'A':
      //     this.boxASelected = !this.boxASelected;
      //     break;
      //   case 'B':
      //     this.boxBSelected = !this.boxBSelected;
      //     break;
      //   case 'C':
      //     this.boxCSelected = !this.boxCSelected;
      //     break;
      //   default:
      //     break;
      // }
    }
  }
})

app.mount('#styling')
