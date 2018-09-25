const expect = require('chai').expect;
const fetch = require('node-fetch');
const fs = require('fs');

var da = new Date().toISOString();
d = da.replace(/(\d{4})\-(\d{2})\-(\d{2})T(\d{2}):(\d{2}):(\d{2}).*/, '$3-$2-$1_$4$5$6')
var file = "./reports/LinkChecker/BrokenLinks - Reports_"+ d +".json" ;
var indata ='';
let sync = ()=>{
  fs.appendFileSync(file, indata);
  return
}

describe('Broken Links : PAGE "ABOUT"', function() {
    it('should check the page for broken links', async function () {
      browser.url('/about');
      //sync('{Broken Links : PAGE "ABOUT"},'+'\r\n');
      page = browser.getUrl();
      indata += '{\r\n  "Page": "'+ page +'",\r\n  "Date": "'+da+'",\r\n  ';

      // get all the links on the page
      const links = $$("a[href^='/']");

      const urls = links.map(link => link.getAttribute('href'));

      const requests = urls.map(url => fetch(url));
      const responses = await Promise.all(requests);
      const statusCodes = responses.map(response => response.status);
        statusCodes.forEach((statusCode,i) => {
          indata += '"Links'+i+'": {\r\n    "url": "'+urls[i]+'",\r\n    "Status": "'+statusCode+'"\r\n  },\r\n  ';

	         //sync('{'i+',} '+urls[i]+ ' ==> ' +statusCode +'\r\n');
              expect(statusCode, `ERROR : "${urls[i]}" Page is Broken!`).to.equal(200);
        })
        indata+='\r\n\r\n},';
    });
});


describe('Broken Links : PAGE "JOBS"', function() {
    it('should check the page for broken links', async function () {
      browser.url('/jobs');
      //sync('{Broken Links : PAGE "JOBS"},'+'\r\n');
      page = browser.getUrl();
      indata += '{\r\n  "Page": "'+ page +'",\r\n  "Date": "'+da+'",\r\n  ';
      // get all the links on the page
      const links = $$("a[href^='/']");

      const urls = links.map(link => link.getAttribute('href'));

      const requests = urls.map(url => fetch(url));
      const responses = await Promise.all(requests);
      const statusCodes = responses.map(response => response.status);
        statusCodes.forEach((statusCode,i) => {
	         //sync(i+' - '+urls[i]+ ' ==> ' +statusCode +'\r\n');
           indata += '"Links'+i+'": {\r\n    "url": "'+urls[i]+'",\r\n    "Status": "'+statusCode+'"\r\n  },\r\n  ';
            expect(statusCode, `ERROR : "${urls[i]}" Page is Broken!`).to.equal(200);
        })
        indata+='\r\n\r\n},';
    });
});

describe('REPORTING', function() {
    it('should check the page for broken links', async function () {
        sync();
});
});
