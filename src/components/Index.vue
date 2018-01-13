<template>
  <div id="content">
    <div class="container-fluid heading">
      <!-- Big header -->
      <div class="row"></div>
    </div>

    <div class="container">

      <div class="row">
        <div class="col-lg-12">
          <h3 class="font-weight-bold">NEWEST CASES (Last 3 days)</h3>
          <br>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div :style="'background: url(' +require('@/assets/images/lady.jpg') + ');'" class="missing-person md-whiteframe-z1"></div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div :style="'background: url(' +require('@/assets/images/guy.jpg') + ');'" class="missing-person md-whiteframe-z1"></div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div :style="'background: url(' +require('@/assets/images/lady.jpg') + ');'" class="missing-person md-whiteframe-z1"></div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div :style="'background: url(' +require('@/assets/images/guy.jpg') + ');'" class="missing-person md-whiteframe-z1"></div>
        </div>
        <div align="center">
          <br>
          <br>
          <button type="button" class="btn btn-default btn-smaller">See More</button>
          <hr>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <h3 class="font-weight-bold">ARCHIVES</h3>
        </div>
        <hr>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div :style="'background: url(' +require('@/assets/images/lady.jpg') + ');'" class="missing-person md-whiteframe-z1"></div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div :style="'background: url(' +require('@/assets/images/guy.jpg') + ');'" class="missing-person md-whiteframe-z1"></div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div :style="'background: url(' +require('@/assets/images/lady.jpg') + ');'" class="missing-person md-whiteframe-z1"></div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div :style="'background: url(' +require('@/assets/images/guy.jpg') + ');'" class="missing-person md-whiteframe-z1"></div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div :style="'background: url(' +require('@/assets/images/lady.jpg') + ');'" class="missing-person md-whiteframe-z1"></div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div :style="'background: url(' +require('@/assets/images/guy.jpg') + ');'" class="missing-person md-whiteframe-z1"></div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div :style="'background: url(' +require('@/assets/images/lady.jpg') + ');'" class="missing-person md-whiteframe-z1"></div>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div :style="'background: url(' +require('@/assets/images/guy.jpg') + ');'" class="missing-person md-whiteframe-z1"></div>
        </div>
        <div align="center">
          <button type="button" class="btn btn-default btn-smaller">See More</button>
          <hr>
        </div>
      </div>

      <div class="row justify-content-center">

        <div class="col-lg-12">
          <h3 class="font-weight-bold">NEW HERE ? </h3>
        </div>

        <div class="col-lg-4">
          <div :style="'background: url(' +require('@/assets/images/Vector.png')">
            <p>Who We Are</p>
          </div>
        </div>

        <div class="col-lg-4">
          <div :style="'background: url(' +require('@/assets/images/vector2.png')">
            <p>Report A Sighting</p>
          </div>
        </div>

        <div class="col-lg-4">
          <div :style="'background: url(' +require('@/assets/images/vector3.jpg')">
            <p>Donate or Support Us</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index'
  };

</script>

<style>
  .heading>.row:first-child {
    /* background: rgba(0,0,0,0.4) url(/static/images/header.f8b8cd7.png); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 400px;
    opacity: 0.8;
  }

  .missing-person {
    width: 200px;
    height: 195px;
    margin: 20px auto;
    background-size: cover !important;
    background-position: center center !important;
    background-repeat: no-repeat !important;
    border-radius: 10px;
    cursor: pointer;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .header {
      height: 55px;
    }

    .mobile-menu-holder {
      flex: 5;
      color: white;
      text-align: right;
      padding: 0 20px;
    }
    .mobile-menu-button {
      font-size: 25px;
      top: -5px;
      position: relative;
    }
    .mobile-menu-button span {
      font-size: 40px;
      top: 5px;
      position: relative;
    }
    .missing-person {
      width: auto;
      height: 155px;
    }
  }
  /* 
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2) {
  .missing-person {
    width: auto;
	height: 155px;
  }
} */

</style>
