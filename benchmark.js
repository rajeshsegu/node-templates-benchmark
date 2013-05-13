var data = require('./data'),
    prettyjson = require("prettyjson");

var count = 100000;
var ect = require('./ect/ect.js');
var ejs = require('./ejs/ejs.js');
var jade = require('./jade/jade.js');
var eco = require('./eco/eco.js');
var swig = require('./swig/swig.js');
var hogan = require('./hogan/hogan.js');
var dust = require('./dust/dust.js');
var fest = require('./fest/fest.js');
var dot = require('./dot/dot.js');
var handlebars = require('./handlebars/handlebars.js');
var coffeekup = require('./coffeekup/coffeekup.js');
var underscore = require('./underscore/underscore.js');
var gaikan = require('./gaikan/gaikan.js');

var test = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	}
	sample.prepare(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var testUnescaped = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	}
	sample.prepareUnescaped(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var samples = [

	{ name : 'Jade', sample : jade },
	{ name : 'CoffeeKup', sample : coffeekup },
	{ name : 'Handlebars.js', sample : handlebars },
	{ name : 'EJS', sample : ejs },
	{ name : 'Eco', sample : eco },
	{ name : 'Underscore', sample : underscore },
	{ name : 'Swig', sample : swig },
	{ name : 'doT', sample : dot },
	{ name : 'Fest', sample : fest },
	{ name : 'Hogan.js', sample : hogan },
	{ name : 'Dust', sample : dust },
	{ name : 'Gaikan', sample: gaikan },
	{ name : 'ECT', sample : ect },
];
    
var testResults = [];    
    
var runTests = function () {    
	if (samples.length) {
		var sample = samples.pop();
        console.log("Generating " + sample.name + " templates....");
		test(sample.name, sample.sample, function (err, name, result) {
			testUnescaped(sample.name, sample.sample, function (err, name, resultUnescaped) {
                console.log( ( result+resultUnescaped ) + "ms");
                testResults.push({
                    name: name,
                    escaped: result,
                    unescaped: resultUnescaped,
                    total: ( result+resultUnescaped )
                });                
				runTests();
			});
		});
	
    }else{            
        
        console.log("\n SORTED ( by total ): \n");
        
        //Sort by "total"
        testResults.sort(function(a, b){
            return (a.total < b.total ) 
                ? -1
                : 1;
        });
    
        //Display Results
        console.log( prettyjson.render(testResults) );
    
    }
};

console.log('Rendering ' + count + ' templates:\n');
runTests();    