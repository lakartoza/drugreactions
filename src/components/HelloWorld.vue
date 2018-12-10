<template>
  <div class="hello">


    <div>
      <h3>Welcome to Honeybee Health</h3>
      <h1>Sign up for reminder emails!</h1>
    </div>

    <div class="alert alert-success alert-dismissible fade show" role="alert">
      With Bootstrap!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div>
      <h3>About you</h3>
      <br>
      <input v-model="fullName" placeholder="Full Name">
      <input v-model="email" placeholder="Your Email">

      <h3>Medicine</h3>
      <p>Hi{{firstName }}! What medicine do you want to be reminded about?</p>

      <input v-model="medicine" placeholder="Medicine">
      <input v-model="supplyDays" placeholder="Days of RX Supply">
    </div>

    <p v-show="submitted">
      Thanks for signing up for a reminder for 
      {{medicine}}.
      We'll send it to {{email}} on 
      <!-- {{reminderDate}}  -->
      to give you a little notice.
    </p>

    <button v-on:click="submitted=true">Set Reminder</button>



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
  },
  data: {
    submitted:false
  },
  computed: {
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
