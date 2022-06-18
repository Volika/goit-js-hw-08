import throttle from 'lodash.throttle';

import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);
//  CurrentTime to localStorage
player.on('timeupdate', throttle(onPlayCurrentTime, 1000));

function onPlayCurrentTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
