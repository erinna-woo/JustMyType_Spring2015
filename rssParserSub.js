
/*
*  How to find a feed based on a query.
*/
console.log("running");

google.load("feeds", "1");

function topicHeadlines(topic) {
    
    var searchTopic = topic;
    var theLinks = [];
    var theHeadlines = [];
    //================
    function removeBold(aString) {
    aString = aString.replace('<b>','');
    aString = aString.replace('</b>','');

    aString = aString.replace('<b>','');
    aString = aString.replace('</b>','');
    aString = aString.replace('&#39;', '');

    aString = aString.replace('...','');
    
    return aString;
  }

  function OnLoad() {
    // Query for president feeds on cnn.com
    var query = 'site:http://www.nytimes.com/' + ' ' + searchTopic;
    google.feeds.findFeeds(query, findDone);
  }

  function findDone(result) {
    // Make sure we didn't get an error.
    if (!result.error) {
      // Get content div
      var content = document.getElementById('title');
      var html = '';

      // Loop through the results and print out the title of the feed and link to
      // the url.
      for (var i = 0; i < result.entries.length; i++) {
        var entry = result.entries[i];
        theLinks[i] = entry.link;
        theHeadlines[i] = removeBold(entry.title);
        console.log(theLinks[i]);

      }
    }
  }



google.setOnLoadCallback(OnLoad);

return [theHeadlines,theLinks]

}