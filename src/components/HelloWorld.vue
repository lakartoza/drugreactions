<template>
  <div class="hello">


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
          <button> Go </button>
        </div>
        <div class="col"></div>
      </div>

      <div class="row">
        <div class="col"></div>


        <div class="col-3">          
          <select v-model="supplyDays">
            <option :value="0" disabled selected>Days of RX Supply</option>
            <option :value="30">30 days</option>
            <option :value="60">60 days</option>
            <option :value="90">90 days</option>
            <option :value="120">120 days</option>
          </select>
          </div>


        <div class="col"></div>
      </div>


      <div class="row">      
        <div class="col-3">
          <input v-model="email" placeholder="Your Email">
        </div>

      

        <p v-show="submitted">
          Thanks for signing up for a reminder for 
          {{medicine}}.
          We'll send it to {{email}} on {{supplyDays}}
          <!-- {{reminderDate}}  -->
          to give you a little notice.
        </p>

        <button v-on:click="submitted=true">Set Reminder</button>
      </div>  
    </div>

  </div>




  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    fullName: String,
    email: String,
    medicine: String,
    submitted: Boolean,
    supplyDays: Number,
  },


  data: {
    submitted:false,
    supplyDays:30
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
    }
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
