import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(CURRENT_TIME_KEY);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
