<template>
	<div id="dcmpa" v-cloak>
		<BaseHeader id="header" class="md-whiteframe-z1"/>
		<router-view></router-view>
    <BaseFooter/>
	</div>
</template>

<script>
/* eslint-disable */
import $ from "jquery";
import axios from "axios";
import socket from "@/socket";
import { mapGetters } from "vuex";
import { paceConf } from "@/utils";
import Pace from "@/assets/libs/PACE/pace.min.js";
import BaseHeader from "@/ui-kits/BaseHeader";
import BaseFooter from "@/ui-kits/BaseFooter";
// import PageLoader from "@/ui-kits/PageLoader";
// axios.interceptors.request.use(paceConf.request);
// axios.interceptors.response.use(paceConf.response);
window.jQuery = $;
require("bootstrap");

export default {
  name: "dcmpa",
  components: {
    BaseHeader,
    BaseFooter
  }
};
</script>

<style lang="scss">
// @import "./assets/css/reset.css";
@import "./assets/libs/font-awesome/css/font-awesome.css";
@import "./assets/libs/Ionicons/css/ionicons.css";
@import "./assets/libs/bootstrap/dist/css/bootstrap.css";
@import "./assets/css/main.css";  
.vue-toast-manager_container.__left {
  z-index: 90 !important;
}

.vue-toast_container._error .vue-toast_message {
  background-color: #ee1e46 !important;
  border-radius: 5px;
  font-family: "Muli"; 
}

.vue-toast_container._success .vue-toast_message {
  background-color: #019801 !important;
  font-family: "Muli";
  border-radius: 5px;
}

.md-whiteframe-1dp,
.md-whiteframe-z1 {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
}
</style>
