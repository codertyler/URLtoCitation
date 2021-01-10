/* eslint-disable default-case */
const getPubDate  = (str) => {
  const strToArray = str.split("-");

  let pubMonth;
  switch (parseInt(strToArray[1])) {
    case 1:
      pubMonth = "January";
      break;
    case 2:
      pubMonth = "February";
      break;
    case 3:
      pubMonth = "March";
      break;
    case 4:
      pubMonth = "April";
      break;
    case 5:
      pubMonth = "May";
      break;
    case 6:
      pubMonth = "June";
      break;
    case 7:
      pubMonth = "July";
      break;
    case 8:
      pubMonth = "August";
      break;
    case 9:
      pubMonth = "September";
      break;
    case 10:
      pubMonth = "October";
      break;
    case 11:
      pubMonth = "November";
      break;
    case 12:
      pubMonth = "December";
  }

  return `(${strToArray[0]}, ${pubMonth} ${strToArray[2].slice(0,2)})`;
}

exports.getPubDate = getPubDate;