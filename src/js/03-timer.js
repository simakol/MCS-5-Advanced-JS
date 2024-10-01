const timer = {
  deadline: new Date('2024-10-07'),
  elements: {
    days: document.querySelector('.js-timer__days'),
    hours: document.querySelector('.js-timer__hours'),
    minutes: document.querySelector('.js-timer__minutes'),
    seconds: document.querySelector('.js-timer__seconds'),
  },
  intervalId: null,
};

timer.start();
