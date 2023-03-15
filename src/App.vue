<template>
  <TopBar />
  <div class="main-container container d-flex flex-row">
      <div class="perfume-info">
          <RouterView />
      </div>
  </div>
</template>
<script>
import TopBar from './components/topbar/TopBar.vue';
export default {
  components: {
      TopBar,
  }
  
}
</script>
<style>
  .perfume-info {
    margin-left: 30px;
  }

  .main-container {
    margin-top: 30px
  }
</style>