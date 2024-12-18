<template>
    <div>
       <section class="hero">
        <video autoplay loop muted class="back-video">
        <source src="../assets/8721931-uhd_4096_2160_25fps.mp4" type="video/mp4" class="hero">
       </video>

       <section class="content">
        <h1 class="header">Administrator</h1>
       </section>

        
       </section>
    </div>
</template>
<script>
export default {
 name: 'HeroSectionComp'
};
</script>
<style>
*{
    padding: 0;
    box-sizing: border-box;
    margin: 0;
}

  #logo {
    padding-right: 300px;
    color: rgb(255, 240, 240);
    font-family: "Manrope", sans-serif;
    font-size: large;
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
    overflow: hidden; 
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
 
.content a {
    text-decoration: none;
    display: inline-block;
    color: white;
    font-size: 24px;
    border: 2px solid white;
    padding: 14px 15px;
    transition: 0.3s;
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