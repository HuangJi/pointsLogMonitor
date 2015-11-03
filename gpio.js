var gpio = require("gpio");

// Calling export with a pin number will export that header and return a gpio header instance
var gpio22 = gpio.export(22, {
	direction: 'out',
	interval: 500,

	ready: function() {
		console.log('Ready!');
		setInterval(function() {
			gpio22.set();
			console.log('set!');
			console.log(gpio22.value);
			setTimeout(function() { gpio22.reset(); console.log('reset!');console.log(gpio22.value);}, 500);
		}, 1000);
	}
});
