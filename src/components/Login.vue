<template>
  <div id="content">
    <div class="login-screen">
      <div class="col-md-5">
        <div class="col-md-12">
          <div align="center">
            <h3>Login</h3>
          </div>
          <form class="login-form">
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <label for="inputEmail" class="sr-only">Username/Email address</label>
              <input type="email" id="inputEmail" class="form-control input-field" placeholder="Email address" required autofocus>
            </div>
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
              <label for="inputPassword " class="sr-only ">Password</label>
              <input type="password " id="inputPassword " class="form-control input-field" placeholder="Password" required>
            </div>
            <div class="squaredFour">
              <input type="checkbox" value="None" id="squaredFour" name="check" checked />
              <label for="squaredFour">Remember me</label>
            </div>
            <div>
              <button class="btn btn-primary btn-block " type="submit ">LogIn</button>
            </div>
            <div align="center" class="text-center">
              <span>Need an account?
                <router-link :to="{name: 'signup'}">Register</router-link>
              </span>
            </div>
            <div class="log">
              <p>OR</p>
            </div>
            <br>
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

      <!-- <div class="hidden-xs image-box">
          <img :src="require('@/assets/images/map.jpeg')" alt="Nigeria">
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
};
</script>

<style lang="scss">
.login-screen {
  width: 100%;
  padding: 0;
  display: block;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-box img {
  width: 100%;
  height: 500px;
  /* margin-top: -10px; */
  // position: absolute;
  right: 0;
  top: 0;
  /* bottom: 0; */
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.log {
  text-align: center;
  margin: 20px;
}

.social-icons {
  margin-top: 20px;
}

.social-icons fa {
  margin-right: 20px;
}

.text-fb {
  color: #3b5998;
}

.text-twitter {
  color: #1da1f2;
}

.text-google {
  color: rgb(216, 104, 94);
}

.text-center {
  text-align: center;
}

.logIn-heading {
  text-align: center;
  margin-bottom: 20px;
}

.form-signin .checkbox {
  align-self: auto;
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  // margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
