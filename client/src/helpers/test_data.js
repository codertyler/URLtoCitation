import getLastName from "./getLastName.js";
import getInitials from "./getInitials.js";
import getPubDate from "./getPubDate.js";


export default function extractData(arr, arr2) {
  let LastName = "";
  let Initials = "";
  let pubDate = "";
  let publisher = "";
  let title = "";
  let url = "";


  if(arr[0][0] !== undefined && arr[0][0]["@context"] === 'http://schema.org') {
    LastName = getLastName(arr[0][0]);
    Initials = getInitials(arr[0][0]) || "";
    pubDate = getPubDate(arr[0][0]);
    title = arr[0][0].headline;
    publisher = arr[0][0].publisher.name;
    url = (arr2) => {
      if (arr[0][0].url) {
        return arr[0][0].url;
      } else {
        return arr2[0];
      }
    };
  } else if (!Array.isArray(arr)) {
    LastName = getLastName(arr);
    Initials = getInitials(arr) || "";
    pubDate = getPubDate(arr) || "";
    title = arr[0].headline;
    publisher = arr[0].publisher.name || "";
    url = (arr2) => {
      if (arr[0].url) {
        return arr[0].url;
      } else {
        return arr2[0];
      }
    };
  } else {
    LastName = getLastName(arr[0]);
    Initials = getInitials(arr[0]) || "";
    pubDate = getPubDate(arr[0]);
    title = arr[0].headline;
    publisher = arr[0].publisher.name || "";
    url = (arr2) => {
      if (arr[0].url) {
        return arr[0].url;
      } else {
        return arr2[0];
      }
    };
  }

  // return `${LastName}, ${Initials}${pubDate}, ${title}, ${publisher}, ${url(arr2)}`;

  return (
    <>
      {LastName} {Initials}{pubDate}. {title}. <i>{publisher}</i>. <br />{" "}
      {url(arr2)}
    </>
  );
}





