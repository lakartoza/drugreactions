<template>
  <div>


    <div>
      <h3>Welcome to Honeybee Health</h3>
      <h1>Sign up for reminder emails!</h1>
    </div>



    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-6 lefted">
          <h3>First, about you:</h3>
          <br>
        </div>
        <div class="col"></div>

      </div>

      <div class="row">
        <div class="col"></div>

        <div class="col-3">
          <input v-model="fullName" placeholder="Full Name" class="stretched_input">
        </div>

        <div class="col"></div>
      </div>



      <div class="row">
        <div class="col"></div>
        <div class="col-6 lefted">
          <h3>Remind me about...</h3>
          <br>
        </div>

        <div class="col"></div>

      </div>

      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <p>Hi{{ firstName }}! What medicine do you want to be reminded about?</p>
        </div>
        <div class="col"></div>
      </div>

      <div class="row">
        <div class="col"></div>

        <div class="col-3" >
          <input v-model="medicine" placeholder="Medicine" class="stretched_input">
          <button v-on:click="_submitted_medicine=true"> Go </button>
        </div>
        <div class="col"></div>
      </div>

      <div v-show="_submitted_medicine" class="row">
        <div class="col"></div>

          <p>How much supply of {{ medicine }} do you have?</p>

        <div class="col-3">          
          <select v-model="supplyDays">
            <option :value="0" disabled selected>Days of {{medicine}} Supply</option>
            <option v-for="period in [30,60,90,120]" :value="period"> {{period}} days</option>
          </select>
          </div>


        <div class="col"></div>
      </div>


      <div class="row">      
        <div class="col-3">
          <input v-model="email" placeholder="Your Email">
        </div>

      
        <div v-show="submitted">
        <p>
          We'll send you an reminder to refill your 
          {{ medicine}} subscription on 
          {{ reminderDate.Month}}-{{ reminderDate.Day}} {{ reminderDate.Year}}.

        <p><a href="http://motherfuckingwebsite.com/">Learn how
            </a> to take HoneyBee off your spam. 
          </p>
        </div>
        <button v-on:click="submitted=true">Set Reminder</button>
      </div>  
    </div>

    <AdverseEffectsBox/>

  </div>



  </div>
</template>

<script>

  import AdverseEffectsBox from './AdverseEffectsBox.vue'

  export default {
    name: 'HelloWorld',
    props: {
      fullName: String,
      email: String,
      medicine: String,
      submitted: Boolean,
      _submitted_medicine: Boolean,
      supplyDays: Number,
      reminderDate: Array,
    },


    data: {
      submitted:false,
      _submitted_medicine: false,
      supplyDays:0
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
          var currentDate = new Date();
          // add supplyDays to current date
          var reminderDate = currentDate.addDays(this.supplyDays - 5);
          var Day = reminderDate.toString().split(" ")[2];
          var Month = reminderDate.toString().split(" ")[1];
          var Year = reminderDate.toString().split(" ")[3];

          return {Day,Month,Year}
        } else { 
            return ''
        }
      }
    },
    components: {
      AdverseEffectsBox
    }
  }


  //Extend the javascript Date object 
  Date.prototype.addDays = function(days) {
      this.setDate(this.getDate() + parseInt(days));
      return this;
  };

  //Extend to give month names
  Date.prototype.monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.lefted {
  text-align: left;

}

.stretched_input {
  width: -webkit-fill-available;
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
