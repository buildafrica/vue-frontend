<template>
  <div id="content">
    <div class="content-cover">
      <div class="container">
        <div class="col-md-6">
          <div class="intro-text">
            <h1>
              Help us Build a Database of Missing Persons
            </h1>
            <h4>Collectively, we can create a collaborative platform that will help in the investigation of missing and unidentified
              person cases!</h4>
          </div>
        </div>
        <div class="col-md-3">
        </div>
        <div class="col-md-3">
          <div class="search-filter">
            <h4>Quick Search Form</h4>
            <div class="radio-button-group">
              <button class="btn btn-default">Male</button>
              <button class="btn btn-default">Female</button>
              <button class="btn btn-default">Unknown</button>
            </div>
            <br>
            <div class="search-input-groups">
              <input type="text" id="search-name" placeholder="Name">
              <input type="text" id="datalist" list="states-in-nigeria" placeholder="Location">
              <datalist id="states-in-nigeria">
                <option value="Lagos" />
                <option value="Abuja" />
                <option value="Ondo" />
                <option value="Ekiti" />
              </datalist>
              <button type="submit" class="btn btn-default btn-colored">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div class="base-row">
        <span class="blue"></span>
        <span class="orange"></span>
        <span class="green"></span>
        <span class="purple"></span>
        <span class="tan"></span>
      </div>
    </div>
    <div class="latest-missing-holder">
        <div class="latest-missing" v-for="(latestMissing, index) in missing_people" :key="index" :style="'background-image: url(' + latestMissing.picture + ');'">
          <div class="latest-missing-label">
            NEWEST
          </div>
          <div class="latest-missing-bottom-info">
            <div class="name-and-age">
              <h4>{{latestMissing.name}}</h4>
              <span class="age-holder">{{latestMissing.age}}</span>
            </div>
            <div class="latest-missing-person-location">
              <div>Missing Since: <small>{{latestMissing.missingSince}}</small></div>
              <div>Last Seen: <small>{{latestMissing.lastSeen}}</small></div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import countryStates from "@/utils/geolocation";

  export default {
    name: "Index",
    data() {
      return {
        countryStates,
        missing_people: [{
            picture: '/static/assets/images/man.jpg',
            name: 'Adekunle Obi',
            missingSince: 'Mar 05, 2015',
            lastSeen: 'Adeola Odeku, Victoria Island Lagos',
            age: '22yrs',
          }, {
            picture: '/static/assets/images/man.jpg',
            name: 'Adekunle Obi',
            missingSince: 'Mar 05, 2015',
            lastSeen: 'Adeola Odeku, Victoria Island Lagos',
            age: '22yrs',
          }, {
            picture: '/static/assets/images/man.jpg',
            name: 'Adekunle Obi',
            missingSince: 'Mar 05, 2015',
            lastSeen: 'Adeola Odeku, Victoria Island Lagos',
            age: '22yrs',
          }, {
            picture: '/static/assets/images/man.jpg',
            name: 'Adekunle Obi',
            missingSince: 'Mar 05, 2015',
            lastSeen: 'Adeola Odeku, Victoria Island Lagos',
            age: '22yrs',
          }, 
        ]
      };
    }
  };

</script>

<style>
  .content-cover .container {
    margin-bottom: 150px;
  }

  .base-row {
    height: 1px;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    background: red;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .base-row span {
    height: 2px;
    background: black;
    width: 25%;
    position: relative;
    display: flex;
    margin: 0;
  }

  span.blue {
    background: rgb(75, 148, 243)
  }

  span.orange {
    background: orange;
  }

  span.green {
    background: #009a39;
  }

  span.purple {
    background: rebeccapurple;
  }

  span.tan {
    background: tan;
  }

.latest-missing-holder {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 2px;
}
.latest-missing {
  height: 250px;
  width: 100%;
  position: relative;
  /* background: black; */
  margin: 0 2px;
}
.latest-missing:nth-child(1) {
  margin-left: 0;
}
.latest-missing:nth-child(4){
  margin-right: 0;
}
.latest-missing-label {
  position: absolute;
  /* height: 20px; */
  width: 100px;
  background: red;
  color: white;
  text-align: center;
  padding: 10px 15px;
}
.latest-missing-bottom-info {
  height: 110px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.7);
  padding: 5px 10px;
  color: white;
}
.name-and-age {
  /* display: inline; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.name-and-age h3 {
  flex: 2;
}
.age-holder {
  position: relative;
  /* right: 0; */
  text-align: right;
  color:white;
  font-size: 18px;
  flex: 1;
}
</style>
