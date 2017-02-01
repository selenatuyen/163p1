d3.csv('Electronic_Police_Report_2015.csv', function(data){
	var numWhite = 0;
	var numBlack = 0;
	var numUnknown = 0;
	var numHispanic = 0;
	var numAsian = 0;
	data.forEach(function(d){
		var race = d.Offender_Race;
		if(race == "BLACK"){
			numBlack++;
		}
		else if(race == "" || race == "UNKNOWN"){
			race = "UNKNOWN";
			numUnknown++;
		}
		else if(race == "WHITE"){
			numWhite++;
		}
		else if(race == "HISPANIC"){
			numHispanic++;
		}
		else if(race == "ASIAN"){
			numAsian++;
		}
	})
	var total = numBlack + numAsian + numHispanic + numWhite;
	
	var canvas = d3.select("#bar").append("svg")
		.attr("width", 500)
		.attr("height", 500);

	canvas
		.append("rect")
		.attr("width", function(d) {return numBlack/100;})
		.attr("height", function(d, i){return i + 50;})
		.attr("y", 10)
		.attr("x", 130)
		.attr("fill", "#b3b3cc");
	canvas
		.append("text")
		.attr("fill", "#262626")
		.attr("y", function(d, i){return i * 50 + 50;})
		.text(function(d){return "Blacks " + (numBlack/total*100).toFixed(2) + "%";})
	canvas
		.append("rect")
		.attr("width", function(d) {return numWhite/100;})
		.attr("height", function(d, i){return i + 50;})
		.attr("y", 70)
		.attr("x", 130)
		.attr("fill", "#b3b3cc");
	canvas
		.append("text")
		.attr("fill", "#262626")
		.attr("y", function(d, i){return i * 50 + 110;})
		.text(function(d){return "Whites " + (numWhite/total*100).toFixed(2) + "%";})
	canvas
		.append("rect")
		.attr("width", function(d) {return numHispanic/100;})
		.attr("height", function(d, i){return i + 50;})
		.attr("y", 130)	
		.attr("x", 130)
		.attr("fill", "#b3b3cc");
	canvas
		.append("text")
		.attr("fill", "#262626")
		.attr("y", function(d, i){return i * 50 + 170;})
		.text(function(d){return "Hispanics " + (numHispanic/total*100).toFixed(2) + "%";})
	canvas
		.append("rect")
		.attr("width", function(d) {return numAsian/100;})
		.attr("height", function(d, i){return i + 50;})
		.attr("y", 190)
		.attr("x", 130)
		.attr("fill", "#b3b3cc");
	canvas
		.append("text")
		.attr("fill", "#262626")
		.attr("y", function(d, i){return i * 50 + 230;})
		.text(function(d){return "Asians " + (numAsian/total*100).toFixed(2) + "%";})
});