<template>
  <div class="centered" id="app">
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      In this project, I used Bootstrap and Vue hosted on Github Pages. <a target="_blank" href="https://github.com/lakartoza/drugreactions/commits/master">See commits here</a>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <img alt="Vue logo" src="./assets/rx_reminder.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url("./assets/background1.png");
}

.centered {
  text-align: center;

}
</style>
