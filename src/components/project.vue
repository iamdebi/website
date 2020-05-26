<template lang="html">
  <div class="projects-container">
    <div id="project" class="project">
      <div class="project-tile">
        <a href="http://debbie-bucket-list.herokuapp.com/" target="blank">
          <div class="ruby-tile"></div>
          <p class="project-header">Your Bucket List</p>
        </a>
      </div>

      <div class="project-tile">
        <a href="https://github.com/iamdebi/The-Healthiest-Would-You-Rather" target="blank">
          <div class="js-tile"></div>
          <p class="project-header">The Healthiest Would you Rather</p>
        </a>
      </div>

      <div class="project-tile">
        <a href="https://github.com/iamdebi/The_Thing-1" target="blank">
          <div class="java-tile"></div>
          <p class="project-header">The Thing</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectContainer"
};
</script>

<style lang="css" scoped>
@import "../styles/project.css";
</style>