d3.select("body").append("h3").append("text").text("District with the most burgalries");
d3.csv('Electronic_Police_Report_2015.csv', function(data){
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

				var canvas = d3.select("#circ").append("svg")
					.attr("width", 5000)
					.attr("height", 500);
				canvas.append("")				
});					