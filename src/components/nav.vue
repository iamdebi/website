<template lang="html">
  <nav id="nav" class="nav">
    <ul>
      <a href="#header">
        <li>Home</li>
      </a>
      <a href="#about">
        <li>About</li>
      </a>
      <a href="#project">
        <li>Project</li>
      </a>
      <a href="#contact">
        <li>Contact</li>
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavigationMenu",

  components: {},
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      var nav = document.getElementById("nav");
      var sticky = nav.offsetTop;
      if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    }
  }
};
</script>

<style lang="css">
@import "../styles/nav.css";
</style>
