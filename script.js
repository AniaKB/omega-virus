console.clear();

const app = Vue.createApp({
  data: function () {
    return {
      started: false,
      amountToAdd: 'Add',
      minutes: 30,
      remainingSeconds: 0,
      interval: null,
      buttons: ['a', 'c', 'e', 'b', 'd'],
      lastPressed: []
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
    addTime: function (time) {
        this.remainingSeconds = this.remainingSeconds + time;
    },
    pressButton: function (button) {
      this.lastPressed.push(button);
      if (this.lastPressed.length > 9) {
        this.lastPressed.shift();
      }
    }
  },
  created: function () {
    this.initialize();
  }
}).mount('#app');
