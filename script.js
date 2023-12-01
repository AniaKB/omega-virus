console.clear();

const app = Vue.createApp({
  data: function () {
    return {
      started: false,
      amountToAdd: 'Add',
      minutes: 30,
      remainingSeconds: 0,
      interval: null
    };
  },
  methods: {
    initialize: function () {
      this.remainingSeconds = this.minutes * 60 * 1000;
    },
    formatTime: function (seconds) {
      let date = new Date(0);
      date.setSeconds(seconds / 1000);
      let timeString = date.toISOString().substring(11, 19);
      return timeString;
    },
    start: function () {
      this.started = true;
      this.interval = setInterval(this.countDown, 1000);
    },
    pause: function () {
      this.started = false;
      clearInterval(this.interval);
    },
    countDown: function () {
      this.remainingSeconds = this.remainingSeconds - 1000;
      if (this.remainingSeconds <= 0) {
        clearInterval(this.interval);
      }
    },
    addTime: function () {
      if (this.amountToAdd === 'Add 30 Sec') {
        this.remainingSeconds = this.remainingSeconds + 30 * 1000;
      }
      if (this.amountToAdd === 'Add 3 Min') {
        this.remainingSeconds = this.remainingSeconds + 3 * 60 * 1000;
      }
    }
  },
  created: function () {
    this.initialize();
  }
}).mount('#app');
