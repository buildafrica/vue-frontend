<template>
  <div id="content">
    <div class="container pb-20 pt-20">
      <div class="flex">
        <div class="report-progress">
          <!-- Come Back Here -->
          <h2>REPORT A SIGHTING</h2>
          <div class="flex progress-div">
            <div class="circle blue">
              <span>1</span>
            </div>
            <div :class="['line', {'blue': !firstPage}]"></div>
            <div :class="['circle', {'blue': !firstPage}]">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
      <div :class="['flex', {'display-none' : !firstPage}]">
        <div class="new-details">
          <h4>Person's Details</h4>
          <div class="form-div">
            <!-- Full name -->
            <div>
              <label for="fullname">Full name of person</label>
              <div class="flex2">
                <div class="input-div">
                  <input type="text" class="input-holder" name="" id="" placeholder="surname">
                </div>
                <div class="input-div">
                  <input type="text" class="input-holder" name="" id="" placeholder="first name">
                </div>
              </div>
            </div>

            <div class="pl-10 pr10">
              <h2 class="form-breaker"></h2>
            </div>

            <!-- Time and Date of Sighting -->
            <div>
              <label for="fullname">Time and Date of Sighting</label>
              <div class="flex2">
                <div class="input-div">
                  <input type="text" class="input-holder" name="" id="" placeholder="date of sighting">
                </div>
                <div class="input-div">
                  <input type="text" class="input-holder" name="" id="" placeholder="time of sighting">
                </div>
              </div>
            </div>
          </div>

            <div class="pl-10 pr10">
              <h2 class="form-breaker"></h2>
            </div>

            <!-- Sighting location-->
            <div>
              <label for="fullname">Sighting Location</label>
              <div class="flex2">
                <div class="input-div">
                  <textarea type="text" class="input-holder-textarea" name="" id="" placeholder="describe where you saw this person. Inlcude any portable landmark close by"></textarea>
                </div>
              </div>
            </div>

            <div class="pl-10 pr10">
              <h2 class="form-breaker"></h2>
            </div>

            <!-- Appearance-->
            <div>
              <label for="fullname">Appearance</label>
              <div class="flex2">
                <div class="input-div pr-0">
                  <!-- Note: input value should change to the name of the image uploaded -->
                  <input type="text" class="input-holder btrr-0 bbrr-0" name="" id="" value="upload the most recent image you have of the person" disabled>
                </div>
                <div class="input-div-small">
                  <label for="file-upload" class="custom-file-upload">
                    <i class="fa fa-arrow-up"></i> 
                </label>
                <input id="file-upload" type="file"/>
                </div>
              </div>
            </div>

            <div>
              <div class="flex2">
                <div class="input-div">
                  <textarea type="text" class="input-holder-textarea" name="" id="" placeholder="describe in details the present appearance of the person, things like hair color and any physical marks or clothing will help."></textarea>
                </div>
              </div>
            </div>

             <div>
              <div class="flex">
                <div class="input-btn-div">
                  <span class="input-btn" @click="nextStep">Continue</span>
                </div>
              </div>
            </div>

          </div>
          

          <!-- <label for="file-upload" class="custom-file-upload">
              <i class="fa fa-cloud-upload"></i> Custom Upload
          </label>
          <input id="file-upload" type="file"/> -->
        </div>


      <div :class="[{'display-none' : firstPage}, {'flex': !firstPage} ]">
        <div class="new-details">
          <h4>Personal Details</h4>
          <div class="form-div">
            <!-- Full name -->
            <div>
              <label for="fullname">Full name</label>
              <div class="flex2">
                <div class="input-div">
                  <input type="text" class="input-holder" name="" id="" placeholder="surname">
                </div>
                <div class="input-div">
                  <input type="text" class="input-holder" name="" id="" placeholder="first name">
                </div>
              </div>
            </div>

            <div class="pl-10 pr10">
              <h2 class="form-breaker"></h2>
            </div>

            <!-- Email Address-->
            <div>
              <label for="fullname">Email Address</label>
              <div class="flex2">
                <div class="input-div">
                  <input type="text" class="input-holder" name="" id="" placeholder="email address">
                </div>
              </div>
            </div>

            <!-- Phone Number-->
            <div>
              <label for="fullname">Phone Number</label>
              <div class="flex2">
                <div class="input-div">
                  <input type="text" class="input-holder" name="" id="" placeholder="phone number">
                </div>
              </div>
            </div>

            <div class="pl-10 pr10">
              <h2 class="form-breaker"></h2>
            </div>

            <!-- House Address -->

            <div>
              <label for="fullname">Address</label>
              <div class="flex2">
                <div class="input-div">
                  <input type="text" class="input-holder" name="" id="" placeholder="Address">
                </div>
              </div>
            </div>

             <div>
              <div class="flex">
                <div class="input-btn-div">
                  <span class="input-btn">Submit</span>
                </div>
              </div>
            </div>

          </div>
          

          <!-- <label for="file-upload" class="custom-file-upload">
              <i class="fa fa-cloud-upload"></i> Custom Upload
          </label>
          <input id="file-upload" type="file"/> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportSighting',
  data() {
    return {
      daniel: 'Hello this is daniel',
      firstPage: true
    };
  },
  methods: {
    nextStep() {
      this.firstPage = false;
    }
  }
};
</script>

<style>
.report-progress {
  min-height: 200px;
  width: 500px;
  text-align: center;
}

.report-progress h2 {
  font-size: 24px;
  color: #1961a0;
  margin-bottom: 20px;
}

.progress-div {
  padding-top: 40px;
  padding-bottom: 40px;
}
.new-details {
  flex-basis: 848px;
  padding: 83px;
  min-height: 400px;
  border: thin solid #cfcfcf;
  border-radius: 5px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
}

.new-details h4 {
  color: #1961a0;
  font-size: 24px;
  text-align: center;
  margin-bottom: 70px;
}

.circle {
  height: 60px;
  width: 60px;
  border-radius: 60px;
  background-color: #c4c4c4;
  line-height: 60px;
  color: #fff;
  font-size: 16px;
}

.p-10 {
  padding: 10px;
}

.pl-10 {
  padding-left: 10px;
}

.pr-10 {
  padding-right: 10px;
}

.pr-0 {
  padding-right: 0px !important;
}

.btrr-0 {
  border-top-right-radius: 0px !important;
}

.bbrr-0 {
  border-bottom-right-radius: 0px !important;
}

.display-none {
  display: none !important;
}

.form-breaker {
  height: 1px;
  margin-bottom: 40px;
  background-color: #c4c4c4;
  margin-top: 0px;
}

.blue {
  background-color: #1961a0 !important;
}

.line {
  width: 230px;
  height: 2px;
  background-color: #c4c4c4;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Forms */
input[type='file'] {
  display: none;
}
.custom-file-upload {
  color: #fff;
  cursor: pointer;
  background-color: #1e303f;
  width: 100%;
  height: 65px;
  font-size: 28px;
  line-height: 65px;
  text-align: center;
  border: thin solid #1e303f;
  flex-grow: 1;
  flex-shrink: 1;
  margin-left: 0px;
  margin-bottom: 30px;
}

label {
  margin-bottom: 24px;
  margin-left: 10px;
  font-size: 18px;
}

.flex2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.input-div {
  /* flex: auto; */
  flex-basis: 182px;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0px 10px;
  padding-bottom: 30px;
  /* width: 321px; */
}

.input-div-small {
  /* flex: auto; */
  flex-basis: 120px;
  /* flex-grow: 1; */
  flex-shrink: 1;
  /* width: 321px; */
}

.input-btn-div {
  flex-basis: 287px;
  padding: 0px 10px;
  padding-bottom: 30px;
}

.input-btn {
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: #3574ab;
  color: #fff;
  display: block;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}

.input-holder {
  width: 100%;
  border: thin solid #1e303f;
  border-radius: 3px;
  height: 65px;
  padding: 0px 26px;
  color: #78828b;
  font-size: 14px;
}

.input-holder-textarea {
  width: 100%;
  border: thin solid #1e303f;
  border-radius: 3px;
  height: 97px;
  padding: 26px;
  color: #78828b;
  font-size: 14px;
}

@media only screen and (max-width: 600px) {
  .new-details {
    padding: 20px;
  }
}
</style>
