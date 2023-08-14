import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const KEY_FORM = 'feedback-form-state';

const onPlay = function (data) {
  localStorage.setItem(KEY_FORM, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem(KEY_FORM));
