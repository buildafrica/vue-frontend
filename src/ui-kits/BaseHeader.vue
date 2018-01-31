<template>
  <div class="header">
    <router-link :to="{name: 'home'}" class="logo">
      <!-- <img :src="require('@/assets/images/logo-small.jpg')" alt="DevCenter Missing Person's Archive" /> -->
      <h3>MPA</h3>
    </router-link>
    <div class="header-link-holder hidden-xs">
      <router-link :to="{name: 'home'}" class="header-link">Home</router-link>
      <router-link :to="{name: 'archives'}" class="header-link">Archives</router-link>
      <router-link :to="{name: 'report-sighting'}" class="header-link" >Report a Sighting</router-link>
      <router-link :to="{name: 'report-case'}" class="header-link">Report a case</router-link>
      <!-- <router-link :to="{name: 'signup'}" class="header-link">Sign Up</router-link> -->
      <!-- <router-link :to="{name: 'login'}" class="header-link">Login</router-link> -->
    </div>
     <div class="header-search-holder hidden-xs">
      <input type="text" class="header-search">
      <i class="header-search-icon ion-ios-search-strong"></i>
    </div>
      <div class="header-link-holder-2 hidden-xs">
      <router-link :to="{name: 'contribute'}" class="header-link">Contribute</router-link>
    </div>
    <div class="mobile-menu-holder visible-xs">
      <div class="mobile-menu-button"><span class="ion-android-menu"></span>&nbsp;MENU</div>
     <div id="mobile-menu">
     </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  export default {
    name: 'BaseHeader',
    computed: {
      // ...mapGetters("auth", ["me"])
    },
    methods: {}
  };

</script>
<style lang="scss">
</style>
