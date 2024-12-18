<template>
    <nav class="navbar">
      <section>
        <!-- <img src="video/Technology Euclidean Icon, icon of internet of things technology, electronic device connectivity illustration transparent background PNG clipart.jpeg" class="logo"> -->
        <ul>
          <li id="logo">Morden Tech Solutions</li>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">Employees</router-link></li>
          <li><router-link to="/payroll">Payroll</router-link></li>
          <li><router-link to="/attendance">Attendance</router-link></li>
        </ul>
      </section>
    </nav>
    <!-- <main>
      <section class="hero">
        <video autoplay loop muted plays-inline class="back-video">
        </video>
      </section>
      <sectlion class="content">
        <h1>Administrator</h1>
      </section>
    </main> -->
  </template>
  
  <script>
  export default {
    name: "NavBarComp",
      };
  </script>
  
  <style scoped>
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
  
  .logo {
    font-size: 24px;
    color: white;
    font-weight: bold;
  }
  
  .childcontainer {
    gap: 10px;
    width: 33%;
    display: flex;
    flex-wrap: wrap;
    border: 2px solid black;
  }
  
  img {
    display: block; /* Changed to "block" for proper image display */
    width: 100%;
    max-width: 300px; /* Ensures proper scaling */
    height: 400px;
    object-fit: cover;
  }
  
  h4 p {
    align-items: center; /* "align-items" only applies to flex containers */
    display: flex; /* Added display:flex to make this rule valid */
  }
  
  .hero {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(12, 3, 51, 0.3), rgba(12, 3, 51, 0.3));
    position: relative;
    padding: 0 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Ensures content fits the viewport */
  }
  
  .back-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    z-index: -1; 
  }
  
  .content {
    text-align: center;
    justify-content: center;
    color: white; 
  }
  
  .content h1 {
    font-size: 160px;
    color: white;
    font-weight: 600;
    transition: 0.5s;
  }
  
  .content h1:hover {
    -webkit-text-stroke: 2px white;
    color: transparent;
  }

  
  .content a:hover {
    background-color: white;
    color: rgba(12, 3, 51, 0.8);
  }
  
  @media (min-aspect-ratio: 16/9) {
    .back-video {
      width: 100%;
      height: auto;
    }
  }
  
  @media (max-aspect-ratio: 16/9) {
    .back-video {
      width: auto;
      height: 100%;
    }
  }
  </style>