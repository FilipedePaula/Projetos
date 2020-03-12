var chartSales = document.getElementById("lineChart").getContext('2d');
var lineChart = new Chart(chartSales, {
  type: 'line',
  data: {
    labels: ["", "", "", "", "", "", ""],
    datasets: [{
        label: "laptops",
        data: [80, 65, 78, 61, 71, 63, 79],
        backgroundColor: [
          'rgba(179, 177, 177, 0.31)',
        ],
        borderColor: [
          'rgba(179, 177, 177, 0.31)',
        ],
        borderWidth: 1
      },
      {
        label: "Headsets",
        data: [41, 56, 40, 54, 50, 42, 57],
        backgroundColor: [
          'rgba(153, 153, 153, 0.86)',
        ],
        borderColor: [
          'rgba(153, 153, 153, 0.86)',
        ],
        borderWidth: 1
      },
      {
        label: "Monitors",
        data: [28, 40, 32, 38, 24, 27, 20],
        backgroundColor: [
          'rgba(58, 58, 58, 0.86)',
        ],
        borderColor: [
          'rgba(58, 58, 58, 0.86)',
        ],
        borderWidth: 1
      },
      {
        label: "Phones",
        data: [2, 12, 6, 14, 3, 19, 5],
        backgroundColor: [
          'rgba(0, 0, 0, 1)',
        ],
        borderColor: [
          'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true
  }
});