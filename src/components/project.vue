<template lang="html">
  <div class="projects-container">
    <div id="project" class="project">
      <div v-for="project in projects" :key="project.title">
        <div class="project-tile">
          <a :href="project.href" target="blank">
            <div :class="project.class"></div>
            <p class="project-header">{{project.title}}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectContainer",

  data() {
    return {
      projects: [
        {
          title: "Your Bucket List",
          href: "http://debbie-bucket-list.herokuapp.com/",
          class: "ruby-tile"
        },
        {
          title: "The Healthiest Would you Rather",
          href: "https://github.com/iamdebi/The-Healthiest-Would-You-Rather",
          class: "js-tile"
        },
        {
          title: "The Thing",
          href: "https://github.com/iamdebi/The_Thing-1",
          class: "java-tile"
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
@import "../styles/project.css";
</style>