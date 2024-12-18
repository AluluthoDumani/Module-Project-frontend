<template>
  <div>
    <!-- <NavBarComp/> -->
    <HeroSectionComp/>
  </div>
</template>

<script>
import HeroSectionComp from '@/components/HeroSectionComp.vue';
import NavBarComp from '@/components/NavBarComp.vue';

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
   NavBarComp,
   HeroSectionComp
  }
}
</script>
