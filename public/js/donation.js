M.AutoInit();

new Chart(document.getElementById("myChart"), {
  type: "pie",
  data: {
    labels: [
      "Residential",
      "Full Service Restaurants",
      "Quick Service Restaurants",
      "Grocery Stores",
      "Institutional",
      "Industrial"
    ],
    datasets: [
      {
        label: "Annual U.S. Food Waste Disposal by Sector (tons)",
        backgroundColor: [
          "#FB2E02",
          "#FBBB02",
          "#77FB02",
          "#02FBE1",
          "#0291FB",
          "#1102FB"
        ],
        data: [17369754, 7501380, 5100724, 4108821, 4000000, 659889]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Annual U.S. Food Waste Disposal by Sector (tons)"
    }
  }
});
