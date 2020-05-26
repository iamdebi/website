<template lang="html">
  <div id="app" class="main">
    <div class="header">
      <div class="header-container">
        <div class="img-container">
          <img class="border circle" src="../public/me.jpg" alt="Debbie Urquhart" />
        </div>
        <div class="bio">
          <h1> Hello world, I'm <span class="my-name">Debbie Urquhart</Span>.</h1>
          <h1>A Junior Full Stack Software Developer. </h1>
        </div>
        <div class="project-link">
          <button class="btn" type="button" onClick="window.location.href='#project'">
            <span class="circle">
              <span class="icon arrow"></span>
            </span>
            <span id="project-btn" class="button-text">Checkout my work</span>
          </button>
        </div>
      </div>
    </div>
    <div class="body">
    <div class="about-contact">
      <div class="about">
        <div class="about-info">
          <h2>About Me</h2>
          <p>
            Debbie enjoys programming, exercising, travelling, and food.
            She has recently decided to embark on a more thought provoking career path.
            Having completed
            <a
              href="https://codeclan.com/courses/professional-software-development/"
              target="blank"
            >CodeClan’s</a> immersive 16 week Professional Software Development course,
            she is looking forward to challenging herself daily with her newfound skills.
          </p>
        </div>
        
      </div>
      <div class="contact">
        <Social />
      </div>
    </div>
    <div class="project">
      <Project-Container />
    </div>
  </div>
  </div>
</template>

<script>
import Social from "./components/social.vue";
import ProjectContainer from "./components/project.vue";

export default {
  name: "app",

  data() {
    return {
      show: "false"
    };
  },

  components: {
    Social: Social,
    "Project-Container": ProjectContainer
  }
};
</script>

<style lang="css">
 @import './styles/app.css';
</style>