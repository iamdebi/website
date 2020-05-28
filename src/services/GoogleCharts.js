export default {
  drawBarChart(skillsArray) {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Language");
    data.addColumn("number", "Level");
    data.addColumn("number", "remainignLevel");

    var dataArray = [];
    skillsArray.forEach(skill => {
      var remainignLevel = 10 - parseInt(skill.level);

      dataArray.push([skill.language, parseInt(skill.level), remainignLevel]);
    });

    data.addRows(dataArray);

    var options = {
      width: 600,
      height: 400,
      legend: { position: "none", maxLines: 10 },
      bar: { groupWidth: "75%" },
      colors: ["#7CFC00", "#32CD32"],
      isStacked: true,
      animation: {
        startup: true,
        duration: 8000,
        easing: "in"
      },
      hAxis: {
        title: "",
        ticks: [0, 2, 4, 6, 8, 10]
      },
      is3D: true
    };

    var chart = new google.visualization.BarChart(
      document.getElementById("bar-div")
    );
    chart.draw(data, options);
  }
};
