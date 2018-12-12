


  //Supporting functions for FDA API Calls//


  export function convertTermToURL(human_search_input) {
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

  export function loadInfo_IntoVariable (results) {
      var effects = [];
      for (var i in results) {
        effects.push(results[i].term);
      
      }
      return effects;
  }