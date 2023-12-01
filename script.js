console.clear();

const app = Vue.createApp({
  data: function () {
    return {
      started: false,
      minutes: 1,
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
    }
  },
  created: function () {
    this.initialize();
  }
}).mount('#app');
