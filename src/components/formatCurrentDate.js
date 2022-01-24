export function formatCurrentDate(){
  let currentDate = new Date();
  let dd = currentDate.getDate();
  let mm = currentDate.getMonth() + 1;
  let yyyy = currentDate.getFullYear();
  let formatedDate = yyyy.toString() + '-' + '0' + mm.toString() + '-' + dd.toString();
  return formatedDate;  
}