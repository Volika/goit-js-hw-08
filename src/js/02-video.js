import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

const currentItemTime = JSON.parse(localStorage.getItem(STORAGE_KEY));

console.log(currentItemTime);

player.on('timeupdate', throttle(onPlayCurrentTime, 1000));

function onPlayCurrentTime(event) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(event));
}

if (currentItemTime) {
  player.setCurrentTime(currentItemTime.seconds);
}

