<template>
  <div>


    <div>
      <h3>Welcome to Honeybee Health</h3>
      <h1>Sign up for reminder emails!</h1>
    </div>



    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-md-6 col-sm-12 lefted">
          <h3>First, about you:</h3>
          <br>
        </div>
        <div class="col"></div>

      </div>

      <div class="row">
        <div class="col"></div>

        <div class="col-md-6 col-sm-12">
          <input v-model="fullName" placeholder="Full Name" class="stretched_input">
          <input v-model="email" placeholder="Your Email" class="stretched_input">

        </div>


        <div class="col"></div>
      </div>



      <div class="row">
        <div class="col"></div>
        <div class="col-md-6 col-sm-12 lefted">
          <h3>Remind me about...</h3>
          <br>
        </div>

        <div class="col"></div>

      </div>

      <div class="row">
        <div class="col"></div>
        <div class="col-md-6 col-sm-12">
          <p>Hi{{ firstName }}! What medicine do you want to be reminded about?</p>
        </div>
        <div class="col"></div>
      </div>

      <div class="row">
        <div class="col"></div>

        <div class="col-md-6 col-sm-12">
          <input v-model="searchTerm" placeholder="Medicine" class="stretched_input">
          <button v-on:click="Go_handler" ref="AdverseEffectsSearch"> Search </button>
        </div>
        <div class="col"></div>
      </div>

      <div v-show="_submitted_medicine" class="row">
        <div class="col"></div>

          <p>How much supply of {{ searchTerm }} do you have?</p>

        <div class="col-3">          
          <select v-model="supplyDays">
            <option :value="0" disabled selected>Days of {{searchTerm}} Supply</option>
            <option v-for="period in [30,60,90,120]" :value="period"> {{period}} days</option>
          </select>
          </div>


        <div class="col"></div>
      </div>


      <div class="row">      
      
        <div class="col"></div>

        <div v-show="submitted">
          <p>
            We'll send you an reminder to refill your 
            {{ searchTerm}} subscription on 
            {{ reminderDate.Month}}-{{ reminderDate.Day}} {{ reminderDate.Year}}.

          <p><a href="http://motherfuckingwebsite.com/">Learn how
              </a> to take HoneyBee off your spam. 
            </p>
        </div>


        <button v-show="_submitted_medicine" v-on:click="submitted=true">Set Reminder</button>
        <div class="col"></div>

      </div>  

    </div>

    <AdverseEffectsBox v-show="submitted" :searchTerm="searchTerm" :effects="effects"/>

  </div>



  </div>
</template>

<script>


  import AdverseEffectsBox from './AdverseEffectsBox.vue'
  import {loadInfo_IntoVariable, convertTermToURL} from '../services/FDASearchService.js'
  import ReminderService from '../services/ReminderService.js'
  


  export default {
    name: 'HelloWorld',
    props: {
      fullName: String,
      email: String,
      searchTerm: String,
      submitted: Boolean,
      _submitted_medicine: Boolean,
      _submitted_search: Boolean,
      supplyDays: Number,
      effects: Array
    },


    data: {
      submitted:false,
      _submitted_medicine: false,
      _submitted_search: false,
      supplyDays:0,
      effects: null
    },

    computed: {

      //Pick only firstName from fullName, assuming fullName=="fname lname" separated by ' '
      firstName: function () {
          if (typeof this.fullName !== 'undefined') {
            var names = this.fullName.split(" ");
            var firstname = names[0];
          return ' '+firstname;      
          } else { 
            return ''
          }
      },

      reminderDate: function () {
        if (typeof this.supplyDays !== 'undefined') {
          // get date to remind 5 days ahead of supply end
          var reminderDate = new ReminderService(this.supplyDays, 5).date;

          return reminderDate; //returned format: {Day,Month,Year}
        } else { 
            return '' //define something for onload
        }
      }
    },

    methods: {
      Go_handler: function() {
        this._submitted_medicine=true;
        this._submitted_search=true;

        this.FDA_Adverse_Search();
      },

      FDA_Adverse_Search: function () {
      
        var term;
        if (typeof this.searchTerm !== 'undefined') {
          term = this.searchTerm;
        } else {
          term = "nonsteroidal anti-inflammatory drug";
        }
        
        var searchURL = convertTermToURL(term);
        console.log(searchURL);


        this.$axios
          .get(searchURL)
          .then(response => (
         this.effects = loadInfo_IntoVariable(response.data.results)
          ))
       }


     },
    components: {
      AdverseEffectsBox
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.lefted {
  text-align: left;

}

.stretched_input {
  width: -webkit-fill-available;
  /*min-width: 150px;*/
  max-width: 300px;
  margin-bottom: 30px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
