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
      legend: { position: "top", maxLines: 3 },
      bar: { groupWidth: "75%" },
      colors: ["#7CFC00", "#32CD32"],
      isStacked: true
    };

    var chart = new google.visualization.BarChart(
      document.getElementById("bar-div")
    );
    chart.draw(data, options);
  }
};
