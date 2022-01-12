export function closePopup(){
  const domBody = document.getElementById('body');
  const popup = document.getElementsByClassName('popupBg')[0];
  domBody.removeChild(popup);
  return;
}