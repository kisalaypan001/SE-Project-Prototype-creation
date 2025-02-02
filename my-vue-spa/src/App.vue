<template>
  <div id="app">
    <!-- Include the Navbar component -->
    <Navbar />
    
    <!-- Router view to display different pages -->
    <router-view />
  </div>
</template>

<script>
// Import the Navbar component
import Navbar from './views/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar // Register the Navbar component
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* You can keep the styles for the navigation here */
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
