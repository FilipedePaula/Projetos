//doughnut
var topCategories = document.getElementById("doughnutChart").getContext('2d');
var doughnutChart = new Chart(topCategories, {
  type: 'doughnut',
  data: {
    labels: ["Eletronics", "Furniture", "Toys"],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
    }]
  },
  options: {
    responsive: true
  }
});