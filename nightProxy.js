
// Test Proxy is working ------------------------------------------------------

var Nightmare = require('nightmare');
var proxyNightmare = Nightmare({
  switches: {
    'proxy-server': 'fr.proxymesh.com:31280' // set the proxy server here ...
  },
  show: true
});
proxyNightmare
  .authentication('jammie', 'jameso01') // ... and authenticate here before `goto`
  .goto('http://www.ipchicken.com')
  .evaluate(function() {
    return document.querySelector('b').innerText.replace(/[^\d\.]/g, '');
  })
  .end()
  .then(function(ip) { // This will log the Proxy's IP
    console.log('proxy IP:', ip);
  });


// Regular nightmare for reference ---------------------------------------------
var regularNightmare = Nightmare({ show: true });
regularNightmare
  .goto('http://www.ipchicken.com')
  .evaluate(function() {
    return document.querySelector('b').innerText.replace(/[^\d\.]/g, '');
  })
  .end()
  .then(function(ip) { // This will log the your local IP
    console.log('local IP:', ip);
  });