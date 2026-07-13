milj = ("undefined" === typeof milj) ? {} : milj;
milj.Total = ("undefined" === typeof milj.Total) ? {} : milj.Total;

milj.Total.month = $("#month"); // milj.Total.month.val()

milj.Total.k20 = $("#k20");
milj.Total.k30 = $("#k30");
milj.Total.k45 = $("#k45");
milj.Total.k60 = $("#k60");

milj.Total.a20 = $("#a20");
milj.Total.a30 = $("#a30");
milj.Total.a45 = $("#a45");
milj.Total.a60 = $("#a60");

milj.Total.tFahr = $("#tFahr");

milj.Total.bCalc = $("#bCalc");

milj.Total.display = $("#display");

milj.Total.t20 = 0;
milj.Total.t30 = 0;
milj.Total.t45 = 0;
milj.Total.t60 = 0;
milj.Total.summe = 0;
milj.Total.travel = 0;
milj.Total.total = 0;

// -----------------------------

$(document).keypress(function (e) {
	if (e.which == 13) {
		milj.Total.bCalc.click();
	}
});

milj.Total.bCalc.click(function () {
	var month = parseInt(milj.Total.month.val()),
		k20 = parseFloat(milj.Total.k20.val()),
		k30 = parseFloat(milj.Total.k30.val()),
		k45 = parseFloat(milj.Total.k45.val()),
		k60 = parseFloat(milj.Total.k60.val()),
		a20 = parseInt(milj.Total.a20.val()),
		a30 = parseInt(milj.Total.a30.val()),
		a45 = parseInt(milj.Total.a45.val()),
		a60 = parseInt(milj.Total.a60.val()),
		tFahr = parseFloat(milj.Total.tFahr.val());

	if (month < 1 || month > 12) {
		return milj.messi('Monat ist lehr!');
	} else if (!$.isNumeric(k20)) {
		return milj.messi('Kosten 20m ist lehr!');
	} else if (!$.isNumeric(k30)) {
		return milj.messi('Kosten 30m ist lehr!');
	} else if (!$.isNumeric(k45)) {
		return milj.messi('Kosten 45m ist lehr!');
	} else if (!$.isNumeric(k60)) {
		return milj.messi('Kosten 60m ist lehr!');
	} else if (!$.isNumeric(a20)) {
		return milj.messi('Anzahl 20m ist lehr!');
	} else if (!$.isNumeric(a30)) {
		return milj.messi('Anzahl 30m ist lehr!');
	} else if (!$.isNumeric(a45)) {
		return milj.messi('Anzahl 45m ist lehr!');
	} else if (!$.isNumeric(a60)) {
		return milj.messi('Anzahl 60m ist lehr!');
	} else if (!$.isNumeric(tFahr)) {
		return milj.messi('Fahrkosten lehr!');
	}

	milj.Total.travel = new Big(tFahr);

	milj.Total.t20 = new Big(k20).times(new Big(a20));
	milj.Total.t30 = new Big(k30).times(new Big(a30));
	milj.Total.t45 = new Big(k45).times(new Big(a45));
	milj.Total.t60 = new Big(k60).times(new Big(a60));

	milj.Total.summe = milj.Total.t20.plus(milj.Total.t30).plus(milj.Total.t45).plus(milj.Total.t60);

	milj.Total.total = milj.Total.summe.plus(milj.Total.travel);

	milj.log(milj.Total.t20);
	milj.log(milj.Total.t30);
	milj.log(milj.Total.t45);
	milj.log(milj.Total.t60);
	milj.log(milj.Total.summe);
	milj.log(milj.Total.travel);
	milj.log(milj.Total.total);
	milj.log("------------------");

	$("#sTotalMajorLabel").html('<b>Total Kosten:</b>');
	$("#s20Label").html('20m:');
	$("#s30Label").html('30m:');
	$("#s45Label").html('45m:');
	$("#s60Label").html('60m:');
	$("#sSummeLabel").html('Summe:');
	$("#sFahrLabel").html('Fahrkosten:');
	$("#sTotalLabel").html('<b>TOTAL:</b>');

	$("#c20").html(a20 + ' x ' + k20 + ' &#8364; =');
	$("#c30").html(a30 + ' x ' + k30 + ' &#8364; =');
	$("#c45").html(a45 + ' x ' + k45 + ' &#8364; =');
	$("#c60").html(a60 + ' x ' + k60 + ' &#8364; =');
	$("#cTotal").html('<b>' + milj.Total.summe + ' &#8364; + ' + milj.Total.travel + ' &#8364; =</b>');

	$("#s20").html('<b>' + milj.Total.t20 + ' &#8364;</b>');
	$("#s30").html('<b>' + milj.Total.t30 + ' &#8364;</b>');
	$("#s45").html('<b>' + milj.Total.t45 + ' &#8364;</b>');
	$("#s60").html('<b>' + milj.Total.t60 + ' &#8364;</b>');
	$("#sSumme").html('<b>' + milj.Total.summe + ' &#8364;</b>');
	$("#sFahr").html('<b>' + milj.Total.travel + ' &#8364;</b>');
	$("#sTotal").html('<b style="font-size: 26pt; color: red;">' + milj.Total.total + ' &#8364;</b>');
});

milj.Total.table = "";

milj.Total.month.val(0);
milj.Total.k20.val('');
milj.Total.k30.val('');
milj.Total.k45.val('');
milj.Total.k60.val('');
milj.Total.a20.val('');
milj.Total.a30.val('');
milj.Total.a45.val('');
milj.Total.a60.val('');
milj.Total.tFahr.val('');

milj.Total.k20.numeric();
milj.Total.k30.numeric();
milj.Total.k45.numeric();
milj.Total.k60.numeric();
milj.Total.tFahr.numeric();

$(document).on('keyup', 'input[type="number"]', function (event) {
	this.value = this.value.replace(/[^0-9]+/g, '');
	if (this.value < 1) this.value = '';
});

milj.Total.demo = function () {
	milj.Total.month.val(1);
	milj.Total.k20.val(1.11);
	milj.Total.k30.val(2.22);
	milj.Total.k45.val(3.33);
	milj.Total.k60.val(4.44);
	milj.Total.a20.val(1);
	milj.Total.a30.val(2);
	milj.Total.a45.val(3);
	milj.Total.a60.val(4);
	milj.Total.tFahr.val(5);
	milj.Total.bCalc.click();
};
// milj.Total.demo();