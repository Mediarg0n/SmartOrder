/*jslint  browser: true, white: true, plusplus: true */
/*global $, countries */

window.addEventListener("load", ()=> {
    'use strict';

    let groups = [/*{name="Vorspeisen", items=[] ,refs=[] }*/];

    console.log(JSONDATA);

/*  let divGroups = document.querySelectorAll("div.divGroup");
    console.log(divGroups);
    for (let i=0;i<divGroups.length;i++){
      console.log(divGroups.item(i).outerHTML);
    }
    console.log(divGroups.item(0).outerHTML);
*/
    var nhlTeams = ['Anaheim Ducks', 'Atlanta Thrashers', 'Boston Bruins', 'Buffalo Sabres', 'Calgary Flames', 'Carolina Hurricanes', 'Chicago Blackhawks', 'Colorado Avalanche', 'Columbus Blue Jackets', 'Dallas Stars', 'Detroit Red Wings', 'Edmonton OIlers', 'Florida Panthers', 'Los Angeles Kings', 'Minnesota Wild', 'Montreal Canadiens', 'Nashville Predators', 'New Jersey Devils', 'New Rork Islanders', 'New York Rangers', 'Ottawa Senators', 'Philadelphia Flyers', 'Phoenix Coyotes', 'Pittsburgh Penguins', 'Saint Louis Blues', 'San Jose Sharks', 'Tampa Bay Lightning', 'Toronto Maple Leafs', 'Vancouver Canucks', 'Washington Capitals'];
    var nbaTeams = ['Atlanta Hawks', 'Boston Celtics', 'Charlotte Bobcats', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'LA Clippers', 'LA Lakers', 'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Jersey Nets', 'New Orleans Hornets', 'New York Knicks', 'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia Sixers', 'Phoenix Suns', 'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards'];
    var nhl = $.map(nhlTeams, (team) =>{ return { value: team, data: { category: 'NHL', info:"test" }}; });
    var nba = $.map(nbaTeams, (team) =>{ return { value: team, data: { category: 'NBA' } }; });
    var teams = nhl.concat(nba);

    // Initialize autocomplete with local lookup:
    $('#autocomplete').devbridgeAutocomplete({
        lookup: teams,
        minChars: 1,
        onSelect: (suggestion)=> {
          console.log(suggestion.data.info)
          //  $('#selection').html('You selected: ' + suggestion.value + ', ' + suggestion.data.category);
        },
        showNoSuggestionNotice: true,
        noSuggestionNotice: 'Sorry, no matching results',
        groupBy: 'category'
    });


});
