const expect = require('chai').expect;
const fetch = require('node-fetch');
var fs = require('fs');

describe('broken link test', function() {
    it('should check the page for broken links', async function () {
        browser.url('/news');

        // get all the links on the page
        const links = $$("a[href^='/']");

        const urls = links.map(link => link.getAttribute('href'));
        var json_urls = JSON.stringify(urls);
        fs.writeFile('myjsonfile.json', json_urls, 'utf8');
    });
});
