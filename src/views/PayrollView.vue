<template>
    <div>
        <NavBarComp/>
       <PayRoll/>
    </div>
</template>
<script>
import NavBarComp from '@/components/NavBarComp.vue';
import PayRoll from '@/components/Pay Roll.vue';
export default {
    name: 'PayrollView',
  components: {
   NavBarComp,
   PayRoll
  } 
}
</script>
<style >
    
</style>