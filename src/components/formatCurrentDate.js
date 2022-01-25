export function formatCurrentDate() {
  let currentDate = new Date();
  let dd = (currentDate.getDate()).toString();
  let mm = (currentDate.getMonth() + 1).toString();
  let yyyy = (currentDate.getFullYear()).toString();
  (dd.length === 1) ? dd = '0' + dd : () => { };
  (mm.length === 1) ? mm = '0' + mm : () => { };
  let formatedDate = yyyy + '-' + mm + '-' + dd;
  return formatedDate;
}