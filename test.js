var Nightmare = require('nightmare');
var nightmare = Nightmare({
	show: true, 
	// webPreferences: {
		// webSecurity:false,
		// partition: 'nopersist',
	// }
});
var extract = require('./extractors.js')
var co = require('co');
require('nightmare-iframe-manager')(Nightmare);

nightmare
	.goto("https://www.alibaba.com/")
	.type('.ui-searchbar-keyword', 'chair')
	.click('.ui-searchbar-submit')
	.wait(2000)
	.then(() => {
		console.log('closing nightmare down')
		return nightmare.end()
	})