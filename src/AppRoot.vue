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
import { mapGetters } from "vuex";
import { paceConf } from "@/utils";
import Pace from "@/assets/libs/PACE/pace.min.js";
import BaseHeader from "@/ui-kits/BaseHeader";
import BaseFooter from "@/ui-kits/BaseFooter";
axios.interceptors.request.use(paceConf.request);
axios.interceptors.response.use(paceConf.response);
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
@import "./assets/css/reset.css";
@import "./assets/libs/font-awesome/css/font-awesome.css";
@import "./assets/libs/Ionicons/css/ionicons.css";
@import "./assets/libs/bootstrap/dist/css/bootstrap.css";
@import "./assets/css/global.css"; 
</style>
