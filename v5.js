var margin = {top: 20, right: 20, bottom: 30, left: 40},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

var xValue = function(d){return d.month;},
	xScale = d3.scaleLinear().range([0, width]),
	xMap = function(d){return xScale(xValue(d));},
	xAxis = d3.axis().scale(xScale)

d3.csv('Electronic_Police_Report_2015.csv', function(err, data){
	if(err){
		console.log(err);
	}

});	