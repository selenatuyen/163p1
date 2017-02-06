// d3.select("body").append("h3").append("text").text("District with the most burgalries");
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
				data.forEach(function(d){
					var dist = d.District;
					if(dist == 1){
						dist1++;
					}
					else if(dist == 2){
						dist2++;
					}
					else if(dist == 3){
						dist3++;
					}
					else if(dist == 4){
						dist4++;
					}
					else if(dist == 5){
						dist5++;
					}
					else if(dist == 6){
						dist6++;
					}
					else if(dist == 7){
						dist7++;
					}
					else if(dist == 8){
						dist8++;
					}
				})

				var tot = dist1+dist2+dist3+dist4+dist5+dist6+dist7+dist8;

				var val =[];
				val.push({dst : dist1, dnum : 1, num : (dist1/tot*100).toFixed(2) + "%"});
				val.push({dst : dist2, dnum : 2, num : (dist2/tot*100).toFixed(2) + "%"});
				val.push({dst : dist3, dnum : 3, num : (dist3/tot*100).toFixed(2) + "%"});
				val.push({dst : dist4, dnum : 4, num : (dist4/tot*100).toFixed(2) + "%"});
				val.push({dst : dist5, dnum : 5, num : (dist5/tot*100).toFixed(2) + "%"});
				val.push({dst : dist6, dnum : 6, num : (dist6/tot*100).toFixed(2) + "%"});
				val.push({dst : dist7, dnum : 7, num : (dist7/tot*100).toFixed(2) + "%"});
				val.push({dst : dist8, dnum : 8, num : (dist8/tot*100).toFixed(2) + "%"});

				var r = 300;

				var color = d3.scaleOrdinal()
					.range(["#ff6666", "#ffbb33", "#ffff80", "#aaff80", "#99e6ff", "#b3b3ff", "#ff99cc", "#99ffe6"]);

				var canvas = d3.select("#circ").append("svg")
					.attr("width", 1200)
					.attr("height", 1200);

				var group = canvas.append("g")
					.attr("transform", "translate(350,400)");

				var arc = d3.arc()
					.innerRadius(200)	
					.outerRadius(r);

				var pie = d3.pie()
					.value(function (d){
						return d.dst;});

				var arcs = group.selectAll(".arc")
					.data(pie(val))
					.enter()
					.append("g")
					.attr("class", "arc");

				arcs.append("path")
					.attr("d", arc)
					.attr("fill", function(d){return color(d.data.dst);});	

				arcs.append("text")
					.attr("transform", function(d){return "translate(" + arc.centroid(d) + ")";})
					.attr("text-anchor", "middle")
					.attr("font-size", "1.5em")
					.text(function(d){return d.data.num;});
				var legend = canvas.append("g")
					.attr("class", "legend")
					.attr("x", 800)
					.attr("y", 500)
					.style("margin-top", "25%")
					.attr("height", 500)
					.attr("width", 100);
				legend.selectAll("g").data(val)
					.enter()
					.append("g")
					.each(function(d, i){
						var g = d3.select(this);
						g.append("rect")
							.attr("x", 800)
							.attr("y", i*25)
							.attr("width", 10)
							.attr("height", 10)
							.style("fill", function(d){return color(d.dst);});

						g.append("text")
							.attr("x", 825)
							.attr("y", i*25+10)
							.attr("height", 10)
							.text(function(d){return "District" + d.dnum});	
				});
});					