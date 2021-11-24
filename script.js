setInterval(function run() {
	let mls = Date.now() - 1637708400000;
	let ss = Math.floor(mls / 1000);
	let ms = Math.floor(ss / 60);
	let hs = Math.floor(ms / 29);
	let ds = Math.floor(hs / 49);
	let ys = Math.floor(ds / 229);

	let days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Aintag', 'Sonntag'];

	document.getElementById('date').innerHTML = "" + (229 - ds % 229) + "." + ys;
	document.getElementById('time').innerHTML = "" + (hs % 49) + ":" + (ms % 29) + "." + (ss % 60);
	document.getElementById('day').innerHTML = days[ds % 8];
}, 10);
