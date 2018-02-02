<template>
  <div id="content">
    <div class="login-screen">
      <div class="login-screen--form">
        <header class="login-screen--header">
          <h1>Log in</h1>
          <h4>Need an account? <a href="#">Register</a></h4>
        </header>
        <form>
          <div class="form-group">
            <input type="text" class="form-control" id="user" placeholder="Username/Email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">Log in</button>
        </form>
        <div class="login-screen--socials">
          <span>
            <a href="#">
              <i class="fa fa-facebook fa-2x" aria-hidden="true "></i>
            </a>
          </span>
          <span>
            <a href="#">
              <i class="fa fa-google-plus fa-2x" aria-hidden="true "></i>
            </a>
          </span>
          <span>
            <a href="#">
              <i class="fa fa-twitter fa-2x" aria-hidden="true "></i>
            </a>
          </span>

        </div>
        <footer class="login-screen--footer">
          <span>2017, missing people africa</span>
        </footer>
      </div>
      <div class="login-screen--map hidden-xs">
        <h1>help us create a better database of missing persons</h1>
        <div class="img-container">
          <img :src="require('@/assets/images/map.svg')" alt="Nigeria">
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
  #content {
    margin-bottom: 0;
  }

/* 
  LOGIN SCREEN
*/
  .login-screen {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }

/* 
  FORM
*/
  .login-screen--form {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 3px 1fr 3px;
    grid-template-rows: 10px 80px 1fr 40px 80px;
    grid-row-gap: 40px;
    align-items: center;
    justify-items: center;
    .login-screen--header,
    .login-screen--socials,
    .login-screen--footer,
    form {
      grid-column: 2;
    }
    .login-screen--header {
      grid-row: 2;
      text-align: center;
      h1 {
        color: #1961A0;
        font-size: 32px;
        line-height: 39px;
      }
      h4 {
        font-size: 16px;
        line-height: 22px;
      }
    }
    form {
      grid-row: 3;
      width: 260px;
      input {
        height: 48px;
        border-width: 4px;
      }
      button.btn-primary {
        border-radius: 5px;
        border-color: #1961A0;
        background-color: #1961A0;
      }
    }
    .login-screen--socials {
      grid-row: 4;
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-content: center;
      grid-template-columns: repeat(3, 45px);
      grid-template-rows: 45px;
      grid-column-gap: 28px;
      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
      span a {
        text-align: center;
        color: white;
      }
      span:nth-child(1) {
        background-color: #3B5998;
      }
      span:nth-child(2) {
        background-color: #D62D20;
      }
      span:nth-child(3) {
        background-color: #00ACED;
      }
    }
  }

/* 
  FOOTER
*/
  .login-screen--footer {
    grid-row: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    text-transform: capitalize;
    color: red;
  }

/* 
  MAP
*/
  .login-screen--map {
    display: grid;
    grid-template-columns: 10px 1fr 10px;
    grid-template-rows: 8rem 80px 1fr;
    align-items: center;
    justify-items: center;
    background-color: rgb(30, 48, 63);
    color: white;
    h1 {
      grid-column: 2;
      grid-row: 2;
      font-size: 2.2rem;
      line-height: 3rem;
      text-align: center;
      text-transform: uppercase;
    }
    .img-container {
      grid-column: 2;
      grid-row: 3;
      width: 450px;
      height: 455px;
      img {
        height: 100%;
        width: 100%;
        padding: 0;
      }
    }
  }

/* 
  MEDIA QUERY
*/
  @media screen and (min-width: 768px){
    .login-screen {
      grid-template-columns: 1fr 1.2fr;
      grid-template-rows: 1fr;
    }
    .login-screen--map {
      width: 100%;
    }
  }
</style>
