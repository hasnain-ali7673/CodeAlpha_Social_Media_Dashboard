$(document).ready(function () {
  // Configuration for the area chart
  var areaChartOptions = {
    series: [
      {
        name: "series1",
        data: [101, 64, 78, 191, 42, 109, 100, 230],
      },
      {
        name: "series2",
        data: [41, 32, 85, 42, 124, 52, 71, 120],
      },
    ],
    chart: {
      height: 300,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1a73e8", "#e91e63"], // Corrected to 'colors'
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.66,
        opacityTo: 0.8,
      },
    },
    tooltip: {
      theme: "white",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          color: "black",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          color: "black",
        },
      },
    },
    legend: {
      labels: {
        style: {
          color: "black",
        },
      },
    },
  };

  var areaChart = new ApexCharts(
    document.querySelector("#chart_line"),
    areaChartOptions
  );
  areaChart.render();

  // Configuration for the donut chart
  var donutChartOptions = {
    series: [44, 55, 17, 34],
    labels: ["Impressions", "Followers", "Engagements", "Likes"], // Ensured this array matches the donut chart data
    chart: {
      type: "donut",
      height: 250,
      plotOptions: {
        pie: {
          expandOnClick: true,
        },
      },
    },
    colors: ["#3a86ff", "#3d348b", "#ff006e", "#ffbe0b"],
    legend: {
      show: false,
    },
  };

  var donutChart = new ApexCharts(
    document.querySelector("#donut_chart"),
    donutChartOptions
  );
  donutChart.render();
});
