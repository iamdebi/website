<template lang="html">
  <div id="app" class="main">

    <section id="header" class="header">
      <div class="header-container">
        <div class="img-container">
          <img class="border circle" src="../public/me.jpg" alt="Debbie Urquhart" />
        </div>
        <div class="bio">
          <h1> Hello world, I'm <span class="my-name">Debbie Urquhart</Span>.</h1>
          <h1>A Junior Full Stack Software Developer. </h1>
        </div>
        <div class="project-link">
          <button class="btn" type="button" onClick="window.location.href='#about'">
            <span class="circle">
              <span class="icon arrow"></span>
            </span>
            <span id="project-btn" class="button-text">Checkout my work</span>
          </button>
        </div>
      </div>
    </section>

    <div class="body">
      <Navigation-Menu />
    <div class="about-skills">
      <About id="about"/>
      <Skills id="skills" />
    </div>
    <div class="project">
      <Project-Container />
    </div>
    <div>
      <div class="contact">
          <Social id="contact" />
      </div>
    </div>
    
  </div>
  </div>
</template>

<script>
import Social from "./components/social.vue";
import ProjectContainer from "./components/project.vue";
import NavigationMenu from "./components/nav.vue"
import About from "./components/about.vue"
import Skills from "./components/skills.vue"

export default {
  name: "app",

  data() {
    return {
      show: "false"
    };
  },

  components: {
    Social: Social,
    "Project-Container": ProjectContainer,
    "Navigation-Menu": NavigationMenu,
    'About': About,
    "Skills": Skills
  }, 

  
  
};
</script>

<style lang="css">
 @import './styles/app.css';
</style>