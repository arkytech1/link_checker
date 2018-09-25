import http from "k6/http";
import { check } from "k6";
var test = require('./myjsonfile.json');
var arr = Object.values(test);

var out:
let checker = function() {
  console.log(arr);
  let responses = http.batch(arr);
  responses.forEach((response,i) => {
    out[i] = i + '- 'arr[i]+ ' : ' response;
  });
  console.log(out);
  //check(responses[0], {"main page status was 200": res => res.status === 200,});
};
checker();
