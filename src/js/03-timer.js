const timer = {
  deadline: new Date('2025-10-10'),
  elements: {
    days: document.querySelector('.js-timer__days'),
    hours: document.querySelector('.js-timer__hours'),
    minutes: document.querySelector('.js-timer__minutes'),
    seconds: document.querySelector('.js-timer__seconds'),
  },
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      // const diff = this.deadline.getTime() - Date.now();
      const diff = this.deadline - new Date();

      if (diff <= 0) {
        this.stop();
        console.log('Timer has stopped!');

        return;
      }

      const { days, hours, minutes, seconds } = this.getTimeObject(diff);

      this.elements.days.textContent = days;
      this.elements.hours.textContent = this.pad(hours);
      this.elements.minutes.textContent = this.pad(minutes);
      this.elements.seconds.textContent = this.pad(seconds);
    }, 1000);
  },
  stop() {
    if (this.intervalId === null) return;

    clearInterval(this.intervalId);
  },
  getTimeObject(diff) {
    return {
      days: Math.floor(diff / 1000 / 60 / 60 / 24),
      hours: Math.floor(diff / 1000 / 60 / 60) % 24,
      minutes: Math.floor(diff / 1000 / 60) % 60,
      seconds: Math.floor(diff / 1000) % 60,
    };
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },
};

timer.start();
