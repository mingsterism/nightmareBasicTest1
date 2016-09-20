var Rx = require('rxjs/Rx')

// var r1 = Rx.Observable.of(1, 2, 3)
// r1.map((x) => {console.log(x)})

// var r2 = Rx.Observable.fromPromise(Promise.resolve(10))
// r2.subscribe({
// 	next: y => console.log(y + 10),
// 	complete: () => console.log('done'),
// }).subscribe({
// 	n
// })


// 1-------------------------------------------------------------------
// Test rxJs Working
// 1-------------------------------------------------------------------

// var Nightmare = require('nightmare');
// var nightmare = Nightmare({
// 	show: true, 
// 	})



// var night1 = function() {
// 	return Promise.resolve(
// 	nightmare
// 		.goto("https://www.alibaba.com/")
// 		.type('.ui-searchbar-keyword', 'chair')
// 		.click('.ui-searchbar-submit')
// 		.wait(2000)
// 		.then(() => {
// 			console.log('closing nightmare down')
// 			return nightmare.end()
// 		})
// 		.then(() => {
// 			return 'hello my friend from the other side';
// 		})
// 		)
// 	}

// var rxNight = Rx.Observable.fromPromise(night1());
// rxNight.subscribe({
// 	next: x => console.log('got value ' + x),
// 	error: err => console.error('something wrong occurred: ' + err),
// 	complete: () => console.log('done'),
// });

// 2-------------------------------------------------------------------



var Nightmare = require('nightmare');
var extract = require('./extractors.js');
var proxyNightmare = Nightmare({
  switches: {
    'proxy-server': 'fr.proxymesh.com:31280' // set the proxy server here ...
  },
  // webPreferences: {
  	// partition: 'nopersist',  // causes errors. page does not load fully
  // 	session:clearCache(() => {console.log('cache cleared')}),  // does not work...
  // },
  show: true
});

Nightmare.action('clearCache',
  function(name, options, parent, win, renderer, done) {
    parent.respondTo('clearCache', function(done) {
      win.webContents.session.clearCache(done);
    });
    done();
  },
  function(message, done) {
    this.child.call('clearCache', done);
  });

var night1 = function() {
	return Promise.resolve(
	proxyNightmare	
		// .clearCache()  // page fails to render. just a blank white screen appears.
		.authentication('jammie', 'jameso01')
		.useragent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36")  
		.goto("https://www.alibaba.com/")
		.type('.ui-searchbar-keyword', 'marker pen')
		.wait(1000)
		.click('.ui-searchbar-submit')
		.wait(2000)
		.evaluate(extract.alibaba)
		.then((x) => {
			console.log('printing out list of results now...');
			console.log(x)
			return nightmare.end()
		}).catch((err) => {console.log(err)})
		.then(() => {
			return 'hello my friend from the other side';
		}).catch((err) => {console.log(err)})
	)
}

var rxNight = Rx.Observable.fromPromise(night1());
rxNight.subscribe({
	next: x => console.log('got value ' + x),
	error: err => console.error('something wrong occurred: ' + err),
	complete: () => console.log('done'),
});