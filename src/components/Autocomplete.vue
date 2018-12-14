<template>
  <div class="autocomplete">
    <input class="stretched_input" 
      type="text" 
      v-model="search" 
      @input="onChange"
      placeholder="Active Ingredient in your Rx" />
    <ul v-show="isOpen" class="autocomplete-results" >
    <li
      v-for="(result, i) in results"
      :key="i"
      @click="setResult(result)"
      class="autocomplete-result"
    >
    {{ result }}
  </li>
  </ul>
  </div>
</template>

<script>
  // import PharmaService from '../data/PharmaService.js'
  // var dataz = new PharmaService().activeNames();

  export default {
    name: 'Autocomplete',
    props: {
      items: {
        type: Array,
        required: false,
        default: function () {

          return [ 'Apple', 'nonsteroidal anti-inflammatory drug', 'Orange', 'Mango', 'Pear', 'Peach', 'Grape', 'Tangerine', 'Pineapple'];
        }
      },
    },
    data() {
      return {
        search: '',
        results: [],
        isOpen: false,
      };
    },
    methods: {
      onChange() {
        this.isOpen = true;
        this.filterResults();
      },
      filterResults() {
        this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
      },
      setResult(result) {
        this.search = result;
        this.isOpen = false;
      },
    },
  };
</script>

<style>
  .autocomplete {
    position: relative;
    margin-left: auto;
    margin-right: auto;

  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }

  .stretched_input {
    width: -webkit-fill-available;
    min-width: 150px;
    max-width: 300px;

  }
</style>