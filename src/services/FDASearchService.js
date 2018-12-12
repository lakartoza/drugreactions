var $ = require('jquery');



export default class FDASearch {
  //Functions for FDA API Calls//

  constructor(drugSearchTerm) {
    this.searchTerm = drugSearchTerm;
  }

  AdverseEffects() {
    
    var searchURL = this.convertTermToURL(this.searchTerm);
    
    console.log("calling: "+searchURL);

    $.get(searchURL)
     .then( function (data){

        // Load response adverse effects terms into variable `effects`
        var effects = [];
        for (var i in data.results) {
          effects.push(data.results[i].term);
        }
        console.log(effects);
        return effects;
      });


  }

  //Supporting functions for Search API Calls//

  convertTermToURL(human_search_input) {
    var baseURL = "https://api.fda.gov/drug/event.json?";
    var url_search_term;
    var search_url;

    //Process search term to fit url
    url_search_term = human_search_input.toLowerCase();
    url_search_term = url_search_term.split(" ").join("+");

    //combine to make FDA url to GET 
    search_url = baseURL+'search=patient.drug.openfda.pharm_class_epc:"'+url_search_term+'"&count=patient.reaction.reactionmeddrapt.exact';
    
    return search_url;
  }

  loadInfo_IntoVariable (results) {
      
      return effects;
  }

}