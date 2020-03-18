<template lang="html">
  <div id="app" class="main">
    <div class="header">
      <h1>Debbie Urquhart</h1>
      <div class="img-container">
        <img class="border circle" src="../public/me.jpg" alt="Debbie Urquhart" />
      </div>
      <h2>Junior Software Developer</h2>
    </div>
    <div class="about-contact">
      <div class="about">
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
        <div class="project-link">
          <a href="#project">
            <h2>Projects</h2>
          </a>
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
body {
  margin: 0;
  height: 100vh;
  font-family: "Josefin Sans", sans-serif;
}

h1,
h2 {
  color: #4f4e4e;
}

a {
  text-decoration: none;
  color: #00a2cd;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c8c8c8;
}

.border {
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.125);
}

.circle {
  border-radius: 50%;
}

.about-contact {
  display: flex;
  justify-content: center;
  padding: 0 0 60px 0;
}

@media (max-width: 767px) {
  .about-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about {
    width: 50vw;
    text-align: center;
    margin: 0 5% 0 5%;

    max-width: 500px;
  }
}

.project-link {
  border: solid 1px #c8c8c8;
  margin: 10%;
}

.about {
  width: 50vw;
  text-align: center;
  max-width: 500px;
  margin-left: 10%;
}

.contact {
  margin-left: 5%;
}

.social-container {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.linkedin {
  color: #0077b5;
}

.twitter {
  color: #1da1f2;
}

.email,
.github {
  color: #4f4e4e;
}

svg {
  width: 100%;
  height: 100%;
  overflow: unset;
}

.svg-container {
  position: relative;
  height: 24px;
  width: 24px;
  margin: 0 10px 0 0;
}
</style>