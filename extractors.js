var co = require('co')

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

