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
  },

  computed: {
    boxAClasses() {
      // string (for simple classes)
      return this.boxASelected ? 'active active--red' : '';
    },
    
    boxBClasses() {
      //object
      return {
        'active active--green': this.boxBSelected,
      };
    },

    boxCClasses() {
      //object with difference keys
      return {
        active: this.boxCSelected,
        'active--blue': this.boxCSelected,
      };
    },
  },
})

app.mount('#styling')
