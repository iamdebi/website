<template lang="html">
  <div>
    <h2>Skills</h2>
    <ul>
      <li v-for="item in skills" :key="item.language">
        <p>{{ item.language }}</p>
        <p>{{ item.level }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import GoogleChart from "../services/GoogleCharts";

export default {
  name: "skills",

  data() {
    return {
      skills: [
        { language: "JavaScript", level: 4 },
        { language: "Vue", level: 4 },
        { language: "React", level: 4 },
        { language: "Angualr", level: 2 },
        { language: "Css", level: 4 },
        { language: "Html", level: 4 },
        { language: "Java", level: 3 },
        { language: "Ruby", level: 3 }
      ]
    };
  },

  components: {},

  computed: {}

  //   mounted() {
  //     GoogleChart.drawChart(skill, "#c6cafb", "#86fc6f");
  //   }
};
</script>

<style lang="css">
@import "../styles/skills.css";
</style>