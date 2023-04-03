import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});


const CURRENT_TIME_KEY = 'videoplayer-current-time';

const getCurrentTime = function ({seconds}) {
  localStorage.setItem(CURRENT_TIME_KEY, seconds) ;
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY) || 0);