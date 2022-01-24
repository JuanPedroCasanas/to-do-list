import { renderTask } from './renderTask';
import { createButton } from './createButton';
import { closePopup } from './closePopup';
import { renderEditionFields } from './renderEditionFields';

export function renderPopup(task, existingTask = true) {
  const popup = document.createElement('div');
  const popupBg = document.createElement('div');
  const domBody = document.getElementById('body');
  const closePopupBtn = createButton('X', 'closePopupBtn', () => { closePopup() });

  popup.classList.add('popup');
  popupBg.classList.add('popupBg');
  popup.appendChild(closePopupBtn)
  popupBg.appendChild(popup);
  domBody.appendChild(popupBg);

  if (existingTask) {
    renderTask(task, popup, true);
  } else {
    renderEditionFields({}, true);
  }

}