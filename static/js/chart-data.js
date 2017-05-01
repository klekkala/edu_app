var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var lineChartData = {
			labels : ["Bihar(male,female)","Tamil Nadu(male,female)","Karnataka(male,female)","AndhraPradesh(male,female)"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [549,608,485,455,564]				},
				{
					label: "My Second dataset",
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [509,648,425,435,664]}
			]

		}
		
	var barChartData = {
			labels : ["Bihar(Aptitdue,maths,english)","Tamil NaduBihar(Aptitdue,maths,english)","KarnatakaBihar(Aptitdue,maths,english)","AndhraPradeshBihar(Aptitdue,maths,english)"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [145,256,333,233]

				},
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [345,556,233,345]
				},
			
				{
					fillColor : "rgba(0,0,0,0.5)",
					strokeColor : "rgba(333,444,555,0.8)",
					highlightFill: "rgba(333,444,555,0.75)",
					highlightStroke: "rgba(333,444,555,1)",
					data : [845,456,543,445]
				}
			]
	
		}

	var pieData = [
				{
					value: 300,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "AndhraPradesh"
				},
				{
					value: 50,
					color: "#ffb53e",
					highlight: "#fac878",
					label: "TamilNadu"
				},
				{
					value: 100,
					color: "#1ebfae",
					highlight: "#3cdfce",
					label: "Bihar"
				},
				{
					value: 120,
					color: "#f9243f",
					highlight: "#f6495f",
					label: "Karnataka"
				}

			];
			
	var doughnutData = [
					{
						value: 300,
						color:"#30a5ff",
						highlight: "#62b9fb",
						label: "AndhraPradesh"
					},
					{
						value: 50,
						color: "#ffb53e",
						highlight: "#fac878",
						label: "TamilNadu"
					},
					{
						value: 100,
						color: "#1ebfae",
						highlight: "#3cdfce",
						label: "Bihar"
					},
					{
						value: 120,
						color: "#f9243f",
						highlight: "#f6495f",
						label: "Karnataka"
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
