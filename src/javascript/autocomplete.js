/*jslint  browser: true, white: true, plusplus: true */
/*global $, countries */

//window.addEventListener("load", ()=> {
autocomplete = (JSONDATA) =>{

    let groups = [];
    let g;
    JSONDATA.forEach(group => {
      let item = [];
      group.list.forEach(listItem => {
        item.push(listItem.name);
      });
      groups.push($.map(item, (g) =>{ return { value: g, data: { category: group.groupname}}}));
      if(groups.length==1)
        g = groups[groups.length-1];
      else
        g = g.concat(groups[groups.length-1]);
    });
    // Initialize autocomplete with local lookup:
    $('#autocomplete').devbridgeAutocomplete({
        lookup: g,
        minChars: 1,
        onSelect: (suggestion)=> {
          document.getElementById(suggestion.value.replace(/ /g, '_')).scrollIntoView(true);

          //  $('#selection').html('You selected: ' + suggestion.value + ', ' + suggestion.data.category);
        },
        showNoSuggestionNotice: true,
        noSuggestionNotice: 'SO ein SCHEIß haben WIR nichT',
        groupBy: 'category'
    });


};
