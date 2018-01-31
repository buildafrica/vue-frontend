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
      <div class="latest-missing" v-for="(latestMissing, index) in latest_missing_people" :key="index" :style="'background-image: url(' + latestMissing.picture + ');'">
        <div class="latest-missing-label">
          NEWEST
        </div>
        <div class="latest-missing-bottom-info">
          <div class="name-and-age">
            <h4>{{latestMissing.name}}</h4>
            <span class="age-holder">{{latestMissing.age}}</span>
          </div>
          <div class="latest-missing-person-location">
            <div>Missing Since:
              <small>{{latestMissing.missingSince}}</small>
            </div>
            <div>Last Seen:
              <small>{{latestMissing.lastSeen}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mpa-into-continued">
      <div class="container">
        <div class="mpa-intro-text">
          <h1 align="center">
            Let's Bring Them Back!
          </h1>
          <p>Some missing people you will have heard of, but many more you won't. For their families, life can feel like a desperate
            and unbearable struggle as they wait for days or even years. That's why we are heare for missing persons and
            their familie, 24 hours a day, 365 days a year, to provide free and confidential support, help us report a sighting,
            search our database, cross check information, query the database.</p>
        </div>

        <div class="mpa-list">
          <div class="mpa-list-guide" v-for="(latestMissing, index) in missing_people" :key="index">
            <div class="latest-missing" :style="'background-image: url(' + latestMissing.picture + ');'">
              <div class="latest-missing-bottom-info">
                <div class="name-and-age">
                  <h4>{{latestMissing.name}}</h4>
                  <span class="age-holder">{{latestMissing.age}}</span>
                </div>
                <div class="latest-missing-person-location">
                  <div>Missing Since:
                    <small>{{latestMissing.missingSince}}</small>
                  </div>
                  <div>Last Seen:
                    <small>{{latestMissing.lastSeen}}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div align="center">
            <br>
            <button type="submit" class="btn btn-default btn-colored">LOAD MORE</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="mpa-call-to-action-group">
        <h3 align="center">NEW HERE?</h3>
        <div class="col-md-4">
          <div class="cta-item-1">
          </div>
          <a href="#">Who we are</a>
        </div>
        <div class="col-md-4">
          <div class="cta-item-2"></div>
          <a href="#">Report a sighting</a>
        </div>
        <div class="col-md-4">
          <div class="cta-item-3"></div>
          <a href="#">Donate or support us</a>
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
        latest_missing_people: [{
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
        }, ],
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
          {
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
          }
        ]
      };
    }
  };

</script>

<style>


</style>
