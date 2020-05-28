<template lang="html">
  <div class="skills-info">
    <h2>Skills</h2>
    <div id="bar-div"></div>
  </div>
</template>

<script>
import GoogleChart from "../services/GoogleCharts";

export default {
  name: "skills",

  data() {
    return {
      skills: [
        { language: "JavaScript", level: 8 },
        { language: "Vue", level: 8 },
        { language: "React", level: 8 },
        { language: "Angualr", level: 4 },
        { language: "Css", level: 9 },
        { language: "Html", level: 9 },
        { language: "Java", level: 7 },
        { language: "Ruby", level: 8 },
        { language: "Python", level: 3 }
      ]
    };
  },

  components: {
    GoogleChart
  },

  computed: {},

  mounted() {
    GoogleChart.drawBarChart(this.skills);
  }
};
</script>

<style lang="css">
@import "../styles/skills.css";
</style>
