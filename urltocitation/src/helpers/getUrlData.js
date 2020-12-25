
import axios from 'axios';

export default function getUrlData (string) {
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

  for(const url of string) {
    axios
    .get(url)
    .then((html)=> {
      let parser = new DOMParser();
      let doc = parser.parseFromString(html.data, 'text/html');
      console.log(doc);
    })  
    .catch(error => {
      console.log(error);
    })
  }

};


