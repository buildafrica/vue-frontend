<template>
  <div class="header">
    <router-link :to="{name: 'home'}" class="logo">
      <img :src="require('@/assets/images/logo-small.jpg')" alt="DevCenter Missing Person's Archive" />
    </router-link>
    <div class="header-search-holder hidden-xs">
      <input type="text" class="header-search" aria-placeholder="Search Missing Person's Archive..." placeholder="Search Missing Person's Archive...">
      <i class="header-search-icon ion-ios-search-strong"></i>
    </div>
    <div class="header-link-holder hidden-xs">
      <router-link :to="{name: 'home'}" class="header-link">Home</router-link>
      <router-link :to="{name: 'archives'}" class="header-link">Archives</router-link>
      <router-link :to="{name: 'report-sighting'}" class="header-link" >Report a Sighting</router-link>
      <router-link :to="{name: 'report-case'}" class="header-link">Report a case</router-link>
      <router-link :to="{name: 'signup'}" class="header-link">Sign Up</router-link>
      <router-link :to="{name: 'login'}" class="header-link">Login</router-link>
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
<style>
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: #422597;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .logo img {
    width: 150px;
  }

  .header-search-holder {
    flex: 3;
    padding: 0 10px;
    align-items: center;
  }

  .header-search {
    height: 35px;
    border-radius: 4px;
    outline: 0;
    border: 0;
    width: 90%;
    position: relative;
    padding: 5px 28px 5px 15px;
  }

  .header-search-icon {
    color: grey;
    font-size: 25px;
    position: absolute;
    margin-left: -25px;
  }

  .header-link-holder {
    flex: 3;
  }

  .header-link {
    color: white;
    width: auto;
    display: inline-block;
    padding: 17px 10px;
    cursor: pointer;
    text-decoration: none !important;
    font-family: Muli;
    height: 55px;
    transition: all 200ms ease-in-out;
  }

  .header-link:hover {
    background: rgba(0, 0, 0, 0.2);
    transition: all 200ms ease-in-out;
    color: white;
  }

  .header-link.router-link-exact-active.router-link-active {
    background: white;
    color: #422696;
    transition: all 200ms ease-in-out;
  }

</style>
