<template>
  <div class="container-fluid">
    <v-app>
      <v-main>
        <MainHead />
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import MainHead from '@/components/MainHead.vue'
export default {
  name: 'App',
  components:{MainHead},
  data: () => ({
    
  }),
  created(){
    this.$store.dispatch('initStocks')
  }
};
</script>
<style>

@import'~bootstrap/dist/css/bootstrap.css';
</style>
