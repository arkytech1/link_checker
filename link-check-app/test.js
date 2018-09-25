import http from "k6/http";
import { check } from "k6";
var fs = require('fs');
var test = require('./myjsonfile.json');

var arr = Object.values(test);
var ar = ["http://www/google.com", "http://www.google.fr", "http://www.youtube.com"]
let link
export default function() {
  var out,out_arr;
  let responses = http.batch(ar);
  responses.forEach((response,i) => {
    out = i+ '- '+ ' : ' + ar[i] + response;
    out_arr.push(out);
  });
  fs.writeFile('myjsonfile_00000.json', JSON.stringify(out), 'utf8');
  //check(responses[0], {"main page status was 200": res => res.status === 200,});
};
