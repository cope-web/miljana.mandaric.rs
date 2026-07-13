milj = ("undefined" === typeof milj) ? {} : milj;

milj.messi = function (msg) {
	return new Messi('<b style="color: red; font-size: 22pt;">' + msg + '</b>', {
		buttons: [{
			id: 0,
			label: 'OK',
			val: 'X'
		}],
		modal: true
	});
};

milj.prZ = function (x) { // prepends 0 to make it two digits, for dates and time and so on
	if (x > 9) {
		return x;
	}
	return '0' + x;
};

milj.prZz = function (x) { // prepends 0 or 00 to make it three digits, for miliseconds and so on
	if (x > 99) {
		return x;
	}
	if (x > 9) {
		return '0' + x;
	}
	return '00' + x;
};

milj.timestampMillis = function (d) {
	if (!d) {
		d = new Date();
	}
	return milj.prZ(d.getHours()) + ':' + //
	milj.prZ(d.getMinutes()) + ':' + //
	milj.prZ(d.getSeconds()) + '.' + //
	milj.prZz(d.getMilliseconds());
};

milj.log = function (msg) { // logger
	if (typeof console !== "undefined") {
		if (!(msg instanceof String)) {
			try {
				console.log(milj.timestampMillis() + ': ' + JSON.stringify(msg));
			} catch (err) {
				console.log(milj.timestampMillis() + ':');
				console.log(msg);
			}
		} else {
			console.log(milj.timestampMillis() + ': ' + msg);
		}
	}
};