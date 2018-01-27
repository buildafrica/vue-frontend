<template>
  <div id="content">
     <div class="content-cover">
       <div class="container">
  <div class="col-md-6">
         <div class="intro-text">
           <h1>
             Help us Build a Database of Missing Persons
           </h1>
           <h4>Collectively, we can create a collaborative platform that will help in the investigation of missing and unidentified person cases!</h4>
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
     
   </div>
  </div>
</template>

<script>
import countryStates from '@/utils/geolocation';

export default {
  name:'Index',
  data(){
    return {
      countryStates
    }
  }
};
</script>

<style>
</style>
