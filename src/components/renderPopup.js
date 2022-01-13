import { renderTask } from './renderTask';
import { createButton } from './createButton';
import { closePopup } from './closePopup';

export function renderPopup(task) {
  const popup = document.createElement('div');
  const popupBg = document.createElement('div');
  const domBody = document.getElementById('body');
  const closePopupBtn = createButton('X', 'closePopupBtn', () => { closePopup() });

  popup.classList.add('popup');
  popupBg.classList.add('popupBg');
  popup.appendChild(closePopupBtn)
  popupBg.appendChild(popup);

  renderTask(task, popup, true);

  domBody.appendChild(popupBg);
}