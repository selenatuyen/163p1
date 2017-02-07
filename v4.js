var margins = {top: 50, right: 20, bottom: 50, left: 50},
	widths = 960 - margins.left - margins.right,
	heights = 500 - margins.top - margins.bottom;

var xx  = d3.scaleLinear().range([0, widths]);
var yy = d3.scaleLinear().range([heights, 0]);

var parseTime = d3.timeParse("%m/%x/%Y %H:%M")

var valueline = d3.line()
    .x(function(d) { return xx(d.date); })
    .y(function(d) { return yy(d.ct); });

var svg = d3.select("#vis3").append("svg")
	.attr("width", widths + margins.left + margins.right)
	.attr("height", heights + margins.top + margins.bottom)
  .append("g")
  	.attr("transform","translate(" + margins.left + "," + margins.top + ")");

	var jan = 0;
	var feb = 0;
	var mar = 0;
	var apr = 0;
	var may = 0;
	var jun = 0;
	var jul = 0;
	var aug = 0;
	var sep = 0;
	var oct = 0;
	var nov = 0;
	var dec = 0;

d3.csv('Electronic_Police_Report_2015.csv', function(err, data){
	if(err){
		console.log(err);
	}
	data.forEach(function(d){
		var dt = new Date(d.Occurred_Date_Time);
		var mth = dt.getMonth();
		if(d.District == 7){
			if(mth == 0){
				jan++;
			}
			else if(mth == 1){
				feb++;
			}
			else if(mth == 2){
				mar++;
			}
			else if(mth == 3){
				apr++;
			}
			else if(mth == 4){
				may++;
			}
			else if(mth == 5){
				jun++;
			}
			else if(mth == 6){
				jul++;
			}
			else if(mth == 7){
				aug++;
			}
			else if(mth == 8){
				sep++;
			}
			else if(mth == 9){
				oct++;
			}
			else if (mth == 10){
				nov++;
			}
			else if(mth == 11){
				dec++;
			}
		}
	})
		var months = [];
		months.push({m : "January", count : jan, num : 1});
		months.push({m : "Febuary", count : feb, num : 2});
		months.push({m : "March", count : mar, num : 3});
		months.push({m : "April", count : apr, num : 4});
		months.push({m : "May", count : may, num : 5});
		months.push({m : "June", count : jun, num : 6});
		months.push({m : "July", count : jul, num : 7});
		months.push({m : "August", count : aug, num : 8});
		months.push({m : "September", count : sep, num : 9});
		months.push({m : "October", count : oct, num : 10});
		months.push({m : "November", count : nov, num : 11});
		months.push({m : "December", count : dec, num : 12});
console.log(months);

		// var valuelines = d3.line()
		// 	.x(function(d){return xx(d.num);})
		// 	.y(function(d){return yy(d.count);});

		// xx.domain(months.map(function(d){return d.num;}));
		// yy.domain([0, d3.max(months, function(d){return d.count;})]);

		// svg.append("path")
		// 	.data([months])
		// 	.attr("class", "line")
		// 	.attr("d", valuelines);

		// svg.append("g")
		// 	.attr("transform", "translate(0," + heights + ")")
		// 	.call(d3.axisBottom(xx));

		// svg.append("g")
		// 	.call(d3.axisLeft(yy));

		data.forEach(function(d){
			d.date = parseTime(data.Occurred_Date_Time);
			d.ct = + d.ct;
		});

		xx.domain(d3.extent(data, function(d) { return d.date; }));
		yy.domain([0, d3.max(data, function(d) { return d.ct; })]);

		// Add the valueline path.
		svg.append("path")
		  .data([data])
		  .attr("class", "line")
		  .attr("d", valueline);

		// Add the X Axis
		svg.append("g")
		  .attr("transform", "translate(0," + heights + ")")
		  .call(d3.axisBottom(xx));

		// Add the Y Axis
		svg.append("g")
		  .call(d3.axisLeft(yy));
});	