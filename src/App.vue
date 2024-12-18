<template>
<EmployeePortal/>
</template>

<script>
import EmployeePortal from './components/Employee portal.vue';
import LogIn from './components/Log In.vue';

import PayRoll from './components/Pay Roll.vue'

export default {
  name: 'App',
  components: {
    EmployeePortal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
