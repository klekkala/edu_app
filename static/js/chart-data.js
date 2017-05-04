var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var lineChartData = {
			labels : ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir',	'Jharkhand','Karnataka','Kerala','Madya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Orissa','Punjab','Rajasthan','Sikkim','Tamil Nadu','Tripura','Uttaranchal','Uttar Pradesh',	'West Bengal'],
			datasets : [
				
				

				{
					label: "My third dataset",
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [40,38,43,31,40,28,44,20,25,29,37,45,50,55,34,45,56,34,22,21,15,50,22,19,16,42,20,30]}
			]

		}
	
	var barChartData = {
			labels : ['Andhra Pradesh(Aptitude,Maths,English)','Arunachal Pradesh(A,M,E)','Assam(A,M,E)','Bihar(A,M,E)','Chhattisgarh(A,M,E)','Goa(A,M,E)','Gujarat(A,M,E)','Haryana(A,M,E)','Himachal Pradesh(A,M,E)','Jammu and Kashmir(A,M,E)',	'Jharkhand(A,M,E)','Karnataka(A,M,E)','Kerala(A,M,E)','Madya Pradesh(A,M,E)','Maharashtra(A,M,E)','Manipur(A,M,E)','Meghalaya(A,M,E)','Mizoram(A,M,E)','Nagaland(A,M,E)','Orissa(A,M,E)','Punjab(A,M,E)','Rajasthan(A,M,E)','Sikkim(A,M,E)','Tamil Nadu(A,M,E)','Tripura(A,M,E)','Uttaranchal(A,M,E)','Uttar Pradesh(A,M,E)','West Bengal(A,M,E)'],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [13,10,15,8,14,9,12,13,14,8,7,6,13,15,17,11,10,7,13,15,6,14.5,5,15,8,9,17,9]

				},
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [13,18,15,12,19,11,10,9,9,14,11,9,13,11,14,9,11,10,9,12,9,12,9,13,15,6,15,12]
				},
			
				{
					fillColor : "rgba(0,0,0,0.5)",
					strokeColor : "rgba(333,444,555,0.8)",
					highlightFill: "rgba(333,444,555,0.75)",
					highlightStroke: "rgba(333,444,555,1)",
					data : [13,10,13,11,7,9,10,9,12,8,15,17,19,18,17,19,19,13,11,10,6,8,19,15,8,19,8,9]
				}
			]
	
		}

	var pieData = [
				{
					value: 49,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "AndhraPradesh"
				},
				{
					value: 47,
					color: "#ffb53e",
					highlight: "#fac878",
					label: "ArunachalPradesh"
				},
				{
					value: 52,
					color: "#1ebfae",
					highlight: "#3cdfce",
					label: "Assam"
				},
				{
					value: 40,
					color: "#698B22",
					highlight: "#f6495f",
					label: "Bihar"
				},
				{
					value: 37,
					color:"#F0F8FF",
					highlight: "#62b9fb",
					label: "Chhattisgarh"
				},
				{
					value: 53,
					color:"#8FBC8F",
					highlight: "#62b9fb",
					label: "Goa"
				},
				{
					value: 29,
					color:"#FF1493",
					highlight: "#62b9fb",
					label: "Gujarat"
				},
				{
					value: 34,
					color:"#1E90FF",
					highlight: "#62b9fb",
					label: "Haryana"
				},
				{
					value: 38,
					color:"#228B22",
					highlight: "#62b9fb",
					label: "HimachalPradesh"
				},
				{
					value: 46,
					color:"#008000",
					highlight: "#62b9fb",
					label: "Jammu and Kashmir"
				},
				{
					value: 54,
					color:"#ADFF2F",
					highlight: "#62b9fb",
					label: "Jharkhand"
				},
				{
					value: 58,
					color:"#FF69B4",
					highlight: "#62b9fb",
					label: "Karnataka"
				},
				{
					value: 43,
					color:"#4B0082",
					highlight: "#62b9fb",
					label: "Kerala"
				},
				{
					value: 31,
					color:"#4B0082",
					highlight: "#62b9fb",
					label: "MadhyaPradesh"
				},
				{
					value: 30,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "Maharashtra"
				},
				{
					value: 24,
					color:"#F08080",
					highlight: "#62b9fb",
					label: "Manipur"
				},
				{
					value: 52,
					color:"#20B2AA",
					highlight: "#62b9fb",
					label: "Meghalaya"
				},
				{
					value: 31,
					color:"#800000",
					highlight: "#62b9fb",
					label: "Mizoram"
				},
				{
					value: 28,
					color:"#C71585",
					highlight: "#62b9fb",
					label: "Nagaland"
				},
				{
					value: 25,
					color:"#FF4500",
					highlight: "#62b9fb",
					label: "Orissa"
				},
				{
					value: 51,
					color:"#800080",
					highlight: "#62b9fb",
					label: "Punjab"
				},
				{
					value: 29,
					color:"#FF0000",
					highlight: "#62b9fb",
					label: "Rajasthan"
				},
				{
					value: 34,
					color:"#6A5ACD",
					highlight: "#62b9fb",
					label: "Sikkim"
				},
				{
					value: 45,
					color:"#00FF7F",
					highlight: "#62b9fb",
					label: "Tamilnadu"
				},
				{
					value: 30,
					color:"#FFFF00",
					highlight: "#62b9fb",
					label: "Tripura"
				},
				{
					value: 29,
					color:"#40E0D0",
					highlight: "#62b9fb",
					label: "Uttaranchal"
				},
				{
					value: 35,
					color:"#708090",
					highlight: "#62b9fb",
					label: "Uttar Pradesh"
				},
				{
					value: 40,
					color:"#A0522D",
					highlight: "#62b9fb",
					label: "West Bengal"
				}

					
			];
			
	var doughnutData = [
					{
					value: 40,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "AndhraPradesh"
				},
				{
					value: 38,
					color: "#ffb53e",
					highlight: "#fac878",
					label: "ArunachalPradesh"
				},
				{
					value: 49,
					color: "#1ebfae",
					highlight: "#3cdfce",
					label: "Assam"
				},
				{
					value: 31,
					color: "#f9243f",
					highlight: "#f6495f",
					label: "Bihar"
				},
				{
					value: 28,
					color:"#000000",
					highlight: "#62b9fb",
					label: "Chhattisgarh"
				},
				{
					value: 44,
					color:"#A52A2A",
					highlight: "#62b9fb",
					label: "Goa"
				},
				{
					value: 20,
					color:"#7FFF00",
					highlight: "#62b9fb",
					label: "Gujarat"
				},
				{
					value: 25,
					color:"#FF7F50",
					highlight: "#62b9fb",
					label: "Haryana"
				},
				{
					value: 29,
					color:"#8A2BE2",
					highlight: "#62b9fb",
					label: "HimachalPradesh"
				},
				{
					value: 37,
					color:"#DC143C",
					highlight: "#62b9fb",
					label: "Jammu and Kashmir"
				},
				{
					value: 45,
					color:"#0000FF",
					highlight: "#62b9fb",
					label: "Jharkhand"
				},
				{
					value: 54,
					color:"#8B0000",
					highlight: "#62b9fb",
					label: "Karnataka"
				},
				{
					value: 36,
					color:"#2F4F4F",
					highlight: "#62b9fb",
					label: "Kerala"
				},
				{
					value: 22,
					color:"#556B2F",
					highlight: "#62b9fb",
					label: "MadhyaPradesh"
				},
				{
					value: 21,
					color:"#1E90FF",
					highlight: "#62b9fb",
					label: "Maharashtra"
				},
				{
					value: 15,
					color:"#9400D3",
					highlight: "#62b9fb",
					label: "Manipur"
				},
				{
					value: 48,
					color:"#FFFAF0",
					highlight: "#62b9fb",
					label: "Meghalaya"
				},
				{
					value: 22,
					color:"#808080",
					highlight: "#62b9fb",
					label: "Mizoram"
				},
				{
					value: 19,
					color:"#008000",
					highlight: "#62b9fb",
					label: "Nagaland"
				},
				{
					value: 16,
					color:"#228B22",
					highlight: "#62b9fb",
					label: "Orissa"
				},
				{
					value: 42,
					color:"#FFD700",
					highlight: "#62b9fb",
					label: "Punjab"
				},
				{
					value: 20,
					color:"#4B0082",
					highlight: "#62b9fb",
					label: "Rajasthan"
				},
				{
					value: 25,
					color:"#7CFC00",
					highlight: "#62b9fb",
					label: "Sikkim"
				},
				{
					value: 36,
					color:"#FFFACD",
					highlight: "#62b9fb",
					label: "Tamilnadu"
				},
				{
					value: 22,
					color:"#FF00FF",
					highlight: "#62b9fb",
					label: "Tripura"
				},
				{
					value: 20,
					color:"#FFD700",
					highlight: "#62b9fb",
					label: "Uttaranchal"
				},
				{
					value: 26,
					color:"#4B0082",
					highlight: "#62b9fb",
					label: "Uttar Pradesh"
				},
				{
					value: 31,
					color:"#FFA07A",
					highlight: "#62b9fb",
					label: "West Bengal"
				}
	
				];

window.onload = function(){
	var chart1 = document.getElementById("line-chart").getContext("2d");
	window.myLine = new Chart(chart1).Line(lineChartData, {
		responsive: true
	});
	var chart2 = document.getElementById("bar-chart").getContext("2d");
	window.myBar = new Chart(chart2).Bar(barChartData, {
		responsive : true
	});
	var chart3 = document.getElementById("doughnut-chart").getContext("2d");
	window.myDoughnut = new Chart(chart3).Doughnut(doughnutData, {responsive : true
	});
	var chart4 = document.getElementById("pie-chart").getContext("2d");
	window.myPie = new Chart(chart4).Pie(pieData, {responsive : true
	});
	
};
