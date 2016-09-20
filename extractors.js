var co = require('co')
// var actions = require('./actions1.js')

exports.co99 = function() {
	const nm = 'ListingItem-title title text-nn-primary--bright text-overflow';
	const pr = '.ListingItem-price span:nth-child(2)';
	const sq = '.sqft span:nth-child(1) span:nth-child(1)';
	const ty = '.ListingItem-addressDetails.main-details.ut-iblock div:nth-child(3)';
	const ys = '.ListingItem-addressDetails.main-details.ut-iblock div:nth-child(4)';
	const adr = '.ListingItem-addressDetails.main-details.ut-iblock div:nth-child(2)';
	const rm = 'bedrooms ut-mr-5';
	const bath = 'bathrooms';
	const ag = 'ListingItem-listerName ut-xs-hide'
	// add more selectors if necessary
	const name = Array.from(document.getElementsByClassName(nm));
	const price = Array.from(document.querySelectorAll(pr));
	const sqft = Array.from(document.querySelectorAll(sq));
	const type = Array.from(document.querySelectorAll(ty));
	const yrStatus = Array.from(document.querySelectorAll(ys));
	const addr = Array.from(document.querySelectorAll(adr));
	const noRooms = Array.from(document.getElementsByClassName(rm));
	const noBath = Array.from(document.getElementsByClassName(bath));
	const agent = Array.from(document.getElementsByClassName(ag))
	// add more variables to match selectors
	return name.map((x, y) => {
		// add more in return statements
		console.log('Analysing page .......................................................')
		// try {
		// console.log('')
		object1 = {"Name":name[y].innerText, "price":price[y].innerText, "sqft":sqft[y].innerText, 
					"type": type[y].innerText, "address": addr[y].innerText, "yrStatus": yrStatus[y].innerText,
					"rooms": noRooms[y].innerText, "bath": noBath[y].innerText, "agent": agent[y].innerText}
			console.log('analysing page........................................');
			return JSON.parse(JSON.stringify(object1));
		// } catch (e) {
			//do nothing
		// }
	})
}


exports.yahooFinTitles = function() {
		const t = Array.from(document.querySelectorAll("h3.Mb\\(5px\\)"));
		return t.map((x) => 
			{return {"title": x.innerText} 
		})
	}

exports.amphasisdesign = function() {
	function tryit(x) {
		try {
			return x()
		} catch(e) {
			// just continue
			console.log('there was error. just do nothing')
		}
	}
	var obj = {}
	tryit(() => {
		const productImg = document.getElementsByTagName('img')[0].src
		obj['productImg'] = productImg;
	})
	tryit(() => {
		const productDesc = document.getElementsByTagName('img')[0].alt
		obj['productDesc'] = productDesc
	})
	const productDetails = document.getElementsByTagName('div');
	for (let x of productDetails) {
		var string = x.innerText.split(':');
		strs = string[0].trim()
		try {
			obj[strs] = string[1].trim();
		} catch(e) {};
	}
	return obj;
}

exports.alibaba = function() {
	const years = Array.from(document.querySelectorAll('.stitle.util-ellipsis a i'));
	const factoryUrl = Array.from(document.querySelectorAll('.stitle.util-ellipsis a:nth-child(2)'));

	function yr(string) {
		var digits = parseInt(string.slice(-2));
		if (isNaN(digits) == true ) {
			if (string.slice(-1) == '1') {
				return null;
			} else {
				return string.slice(-1);
			}
		} else {
			return digits;
		}
	}

	return years.map((x, y) => {
		return {
			"year": yr(x.className),
			"url": factoryUrl[y].href,
		}
	})
}

exports.factoryProfile = function() {
	const mainProducts = Array.from(document.querySelectorAll('tr[data-role="supplierMainProducts"] td'));
	return mainProducts[0].innerText;
	}


// function co991(selectors) {
// 	  zip = (...arrays) => arrays[0].map((_, n) => arrays.map(a => a[n]));
// 	  merge = (x, y) => Object.assign(x, y);
// 	  zipMerge = (...arrays) => zip(...arrays).map(props => props.reduce(merge, {}))
// 	  var toZip = Object.keys(selectors).map(key =>Array.from((document.querySelectorAll(selectors[key]).map(element => { title: element.innerText, url: element.innerText})));
// 	  return zipMerge(toZip);
// }

// function co991(selectors) {
//     zip = (...arrays) => arrays[0].map((_, n) => arrays.map(a => a[n]));
//     merge = (x, y) => Object.assign(x, y);
//     zipMerge = (...arrays) => zip(...arrays).map(props => props.reduce(merge, {}))
//     var toZip = Object.keys(selectors).map(key => Array.from(document.querySelectorAll(selectors[key])).map(element => {
//             title: element.innerText,
//             url: element.innerText
//         }))
//     return zipMerge(toZip);
//     };


// Ross Hinkley functional code writeup ================================================================
// exports.sel = {
// 	 r : 'ListingItem-title title text-nn-primary--bright text-overflow',  //  not recording this
// 	 p : '.ListingItem-price span:nth-child(2)',   // only gets this
// }

// exports.co991 = function(selectors) {
//     zip = (...arrays) => arrays[0].map((_, n) => arrays.map(a => a[n]));
//     merge = (x, y) => Object.assign(x, y);
//     zipMerge = (...arrays) => zip(...arrays).map(props => props.reduce(merge, {}))
//     var toZip = Object.keys(selectors)
//         .map(key => Array.from(document.querySelectorAll(selectors[key]))
//             .map(element => {
//                 return {
//                     title: element.innerText,
//                     price: element.innerText
//                 };
//             }));
//     return zipMerge(toZip);
// }

// exports.runCo = co991();

// =======================================================================================================