import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);

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
