<template>
    <nav class="navbar">
      <section>
        <!-- Navigation bar for the home page -->
        <ul>
          <li id="logo">Morden Tech Solutions</li>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">Employees</router-link></li>
          <li><router-link to="/payroll">Payroll</router-link></li>
          <li><router-link to="/attendance">Attendance</router-link></li>
          <li><router-link to="/">LogOut</router-link></li>
        </ul>
      </section>
    </nav>
    
  </template>
  
  <script>
import HeroSectionComp from './HeroSectionComp.vue';

  export default {
    name: "NavBarComp",
    components:{
      HeroSectionComp

    }
    
    
      };
  </script>
  
  <style scoped>
  /* Global Styles */
  * {
    font-family: "Manrope", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #logo {
    padding-right: 300px;
    color: rgb(255, 240, 240);
    font-family: "Manrope", sans-serif;
    font-size: large;
  }
  #logo:hover {
    color: rgb(126, 114, 94);
  }
  nav {
    width: 100%;
    background-color: rgb(17, 16, 16);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 30px;
  }
  nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 10px;
  }
  nav ul li {
    margin: 0 30px;
    font-size: large;
  }
  nav ul li a {
    text-decoration: none;
    color: rgb(255, 240, 240);
    font-size: 18px;
    transition: color 0.3s;
  }
  nav ul li a:hover {
    color: rgb(102, 81, 81);
  }
  /* Responsive Media Queries */
  /* For tablets and smaller screens */
  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      padding: 10px 20px;
    }
    nav ul {
      flex-direction: column;
      align-items: center;
    }
    nav ul li {
      margin: 10px 0;
    }
    #logo {
      padding-right: 0;
      margin-bottom: 15px;
      font-size: medium;
    }
  }
  /* For mobile devices */
  @media (max-width: 480px) {
    nav {
      padding: 10px;
    }
    nav ul {
      flex-direction: column;
      align-items: center;
    }
    nav ul li {
      margin: 5px 0;
      font-size: 14px;
    }
    nav ul li a {
      font-size: 16px;
    }
    #logo {
      font-size: medium;
      text-align: center;
      margin-bottom: 10px;
    }
  }
  </style>