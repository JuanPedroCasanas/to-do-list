export function hideOverflow (string, maxLenght) {
  if (string.length > maxLenght) {
    return string.slice(0, maxLenght) + ' (...)';
  } else {
    return string;
  }
}