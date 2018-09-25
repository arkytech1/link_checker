var webdriverio = require ('webdriverio');
var client = webdriverio.remote({ desiredCapabilities: { browserName: 'chrome' } });

let linky =  function(){
client.url('http://www.google.com');
const links = $$('a');
const urls = links.map(link => link.getAttribute('href'));
  //return urls
  console.log(urls);
}
linky();
//module.exports = links_extract();
