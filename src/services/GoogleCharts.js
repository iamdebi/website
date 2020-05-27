export default {
  drawChart(question, colour1, colour2) {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Option");
    data.addColumn("number", "Responses");

    data.addRows(2);
    data.setValue(0, 0, question.option2);
    // data.setValue(0, 1, 0.0);
    data.setValue(1, 0, question.option1);
    // data.setValue(1, 1, 100.0);

    var options = {
      colors: [colour1, colour2],
      width: "100%",
      height: "100%",
      legend: "none",
      pieHole: 0.2,
      backgroundColor: "transparent",
      is3D: "true",
      pieSliceTextStyle: {
        color: "#222222",
        fontName: "Open Sans",
        fontSize: 0
      },
      pieSliceText: "none",
      chartArea: { left: 20, top: 0, width: "100%", height: "100%" }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById("chart_div")
    );
    chart.draw(data, options);
    var percent = 0;
    if (question.totalResponses2 > question.totalResponses1) {
      var handler = setInterval(function() {
        percent += 1;
        data.setValue(0, 1, percent);
        data.setValue(
          1,
          1,
          question.totalResponses1 + question.totalResponses2 - percent
        );
        chart.draw(data, options);
        if (percent >= question.totalResponses2) clearInterval(handler);
      }, 30);
    } else {
      var handler = setInterval(function() {
        percent += 1;
        data.setValue(
          0,
          1,
          question.totalResponses1 + question.totalResponses2 - percent
        );
        data.setValue(1, 1, percent);
        chart.draw(data, options);
        if (percent >= question.totalResponses1.toFixed(0))
          clearInterval(handler);
      }, 30);
    }
  },

  drawBarChart(percentage) {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Option");
    data.addColumn("number", "Responses");

    data.addRows(2);
    data.setValue(0, 0, "Option 1");
    data.setValue(0, 1, 0.0);
    data.setValue(1, 0, "Option 2");
    data.setValue(1, 1, 100.0);

    var options = {
      colors: ["#99e394", "#e2ff05"],
      width: "100%",
      height: "100%",
      legend: "none",
      pieHole: 0.2,
      backgroundColor: "transparent",
      is3D: "true",
      pieSliceTextStyle: {
        color: "#222222",
        fontName: "Open Sans",
        fontSize: 14
      },
      chartArea: { left: 20, top: 0, width: "100%", height: "100%" }
    };

    var chart = new google.visualization.ColumnChart(
      document.getElementById("bar-div")
    );
    chart.draw(data, options);
    var percent = 0;
    var handler = setInterval(function() {
      percent += 1;
      data.setValue(0, 1, percent);
      data.setValue(1, 1, 100 - percent);
      chart.draw(data, options);
      if (percent >= percentage) clearInterval(handler);
    }, 30);
  }
};
