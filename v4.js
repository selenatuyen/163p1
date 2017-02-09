var margin = {top: 20, right: 20, bottom: 30, left: 60},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

var x  = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

var parseTime = d3.timeParse("%m/%x/%Y %H:%M")

var svg = d3.select("#vis3").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
  .append("g")
  	.attr("transform","translate(" + margin.left + "," + margin.top + ")");

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

		var valueline = d3.line()
			.x(function(d){return x(d.num);})
			.y(function(d){return y(d.count);});

		x.domain(d3.extent(months,function(d){return d.num;}));
		y.domain([0, d3.max(months, function(d){return d.count;})]);

		svg.append("path")
			.data([months])
			.attr("class", "line")
			.attr("d", valueline);

		svg.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));

		svg.append("g")
			.call(d3.axisLeft(y));

		svg.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", -50)
			.attr("x", -70)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.text("Total Number of Crimes");;

		svg.append("text")
			.attr("x", width - 440)
			.attr("y", height + 30)
			.attr("dx", ".71em")
			.style("text-anchor", "end")
			.text("Month");	
});	