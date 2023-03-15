<template>
    <div class="container d-flex flex-row p-0">
        <SideBar />
        <div class="perfume-info">
            <RouterView />
        </div>
    </div>
  </template>
  <script>
  import SideBar from '../../components/sidebar/SideBar.vue';
  export default {
    components: {
        SideBar,
    }
    
  }
  </script>
  <style>

  </style>