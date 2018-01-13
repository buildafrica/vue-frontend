<template>
  <div>
    <div class="col col-lg-8 offset-lg-2">
      <div class="row">
        <div class="col-md-5">
          <div class="col-md-12">
            <form class="form-logIn">
              <div class="logIn-heading">
                <h4 class="form-logIn-heading">Login</h4>
              </div>
              <div class="input-group">
                <span class="input-group-addon" id="basic-addon1">
                  <i class="fa fa-envelope" aria-hidden "true "></i>
                </span>
                <label for="inputEmail" class="sr-only">Username/Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
              </div>
              <div class="input-group">
                <span class="input-group-addon" id="basic-addon1">
                  <i class="fa fa-lock" aria-hidden "true "></i>
                </span>
                <label for="inputPassword " class="sr-only ">Password</label>
                <input type="password " id="inputPassword " class="form-control " placeholder="Password " required>
              </div>
              <div class="squaredFour">
                <input type="checkbox" value="None" id="squaredFour" name="check" checked />
                <label for="squaredFour">Remember me</label>
              </div>
              <div>
                <button class="btn btn-primary btn-block " type="submit ">LogIn</button>
              </div>
              <div class="text-center padding-10">
                <span>Need an account?
                  <a href="#">Register</a>
                </span>
              </div>
              <div class="log">
                <p>OR</p>
              </div>
            </form>
          </div>
          <div class="col-md-12">
            <span class="social-icons fa-lg row">
              <div class="col text-center">
                <a href="#">
                  <i class="fa fa-facebook-square text-fb fa-2x padding-15" aria-hidden="true "></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter text-twitter fa-2x padding-15" aria-hidden="true "></i>
                </a>
                <a href="#">
                  <i class="fa fa-google text-google fa-2x padding-15" aria-hidden="true "></i>
                </a>
              </div>
            </span>
          </div>
        </div>
        <div class="col-md-7 hidden-xs-down image-box">
          <img :src="require('@/assets/images/map.jpeg')" alt="Africa">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
};
</script>

<style lang="scss">
// @import './assets/css/login.css';
</style>
