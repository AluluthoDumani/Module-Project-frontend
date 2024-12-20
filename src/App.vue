<template>
  <div id="app">
    
    <router-view />
  </div>
</template>

<script>
import TableComp from './components/TableComp.vue';
import NavBarComp from './components/NavBarComp.vue';
import HomeView from './views/HomeView.vue';
import LogIn from './components/LogIn.vue';

export default{
  name : "App",
  components:{
    NavBarComp,
    TableComp,
    HomeView,
    LogIn

  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
