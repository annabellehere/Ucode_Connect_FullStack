function getFormattedDate(dateObject) {
  const day = dateObject.getDate();
  const month = (dateObject.getMonth() + 1);
  const year = dateObject.getFullYear();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const dayOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ][dateObject.getDay()];

  return `${check(day)}.${check(month)}.${year} ${check(hours)}:${check(minutes)} ${dayOfWeek}`;
}

function check(str) {
  return String(str).length === 1 ? '0' + str : str
}
