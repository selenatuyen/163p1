var margin = {top: 20, right: 20, bottom: 30, left: 40},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

var x = d3.scaleBand()
			.range([0, width])
			.padding(0.1);
var y = d3.scaleLinear()
			.range([height, 0]);

var svg = d3.select("#vis2").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv('Electronic_Police_Report_2015.csv', function(err, data){
	if(err){
		console.log(err);
	}
				var dist1 = 0;
				var dist2 = 0;
				var dist3 = 0;
				var dist4 = 0;
				var dist5 = 0;
				var dist6 = 0;
				var dist7 = 0;
				var dist8 = 0;
				var aslt1 = 0;
				var aslt2 = 0;
				var aslt3 = 0;
				var aslt4 = 0;
				var aslt5 = 0;				
				var aslt6 = 0;
				var aslt7 = 0;			
				var aslt8 = 0;	
				data.forEach(function(d){
					var dist = d.District;
					var crime = d.Charge_Description;
					if(dist == 1){
						dist1++;
						if(crime.includes("ASSAULT")){
							aslt1++;
						}
					}
					else if(dist == 2){
						dist2++;
						if(crime.includes("ASSAULT")){
							aslt2++;
						}	
					}
					else if(dist == 3){
						dist3++;
						if(crime.includes("ASSAULT")){
							aslt3++;
						}
					}
					else if(dist == 4){
						dist4++;
						if(crime.includes("ASSAULT")){
							aslt4++;
						}
					}
					else if(dist == 5){
						dist5++;
						if(crime.includes("ASSAULT")){
							aslt5++;
						}
					}
					else if(dist == 6){
						dist6++;
						if(crime.includes("ASSAULT")){
							aslt6++;
						}
					}
					else if(dist == 7){
						dist7++;
						if(crime.includes("ASSAULT")){
							aslt7++;
						}
					}
					else if(dist == 8){
						dist8++;
						if(crime.includes("ASSAULT")){
							aslt8++;
						}
					}
				})
 
				console.log(aslt1 + " " + aslt2 + " " + aslt3 + " " + aslt4 + " " + aslt5 + " " + aslt6 + " " + aslt7 + " " + aslt8);
				var burgTot = aslt1 + aslt2 + aslt3 + aslt4 + aslt5 + aslt6 + aslt7 + aslt8;
				var tot = dist1 + dist2 + dist3 + dist4 + dist5 + dist6 + dist7 + dist8;

				var val =[];
				val.push({dst : dist1, dnum : "District 1",  aslts: aslt1});
				val.push({dst : dist2, dnum : "District 2",  aslts: aslt2});
				val.push({dst : dist3, dnum : "District 3",  aslts: aslt3});
				val.push({dst : dist4, dnum : "District 4",  aslts: aslt4});
				val.push({dst : dist5, dnum : "District 5",  aslts: aslt5});
				val.push({dst : dist6, dnum : "District 6",  aslts: aslt6});
				val.push({dst : dist7, dnum : "District 7",  aslts: aslt7});
				val.push({dst : dist8, dnum : "District 8",  aslts: aslt8});

				x.domain(val.map(function(d){return d.dnum;}));
				y.domain([0, d3.max(val, function(d){return d.aslts;})]);

				svg.selectAll(".bar")
					.data(val)
					.enter().append("rect")
						.attr("class", "bar")
						.attr("fill", "#800000")
						.attr("x", function(d){return x(d.dnum);})
						.attr("width", x.bandwidth())
						.attr("y",  function(d){return y(d.aslts);})
						.attr("height", function(d) {return height - y(d.aslts);});
				//x axis
				svg.append("g")
					.attr("transform", "translate(0," + height + ")")
					.call(d3.axisBottom(x));
				//y axis
				svg.append("g")
					.call(d3.axisLeft(y));
});					