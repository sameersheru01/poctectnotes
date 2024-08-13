function GetInitials(name){
    const words = name.split(/\s+/);
  const initials = words.slice(0, 2).map(word => word.charAt(0).toUpperCase()).join('');
  return initials;
}
function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strMinutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${strMinutes} ${ampm}`;
}

function formatDate(date) {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return `${day} ${monthNames[monthIndex]} ${year}`;
}

function getFormattedDateTime() {
  const now = new Date();
  const time = formatTime(now);
  const date = formatDate(now);
  return {date,time};
}





export {GetInitials,getFormattedDateTime};