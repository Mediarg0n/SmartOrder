function loadJSON(file,callback) {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', file, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == '200') {
    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
     }
  };
  xobj.send(null);
}

loadJSON('../../data/articel.json', function(text){
    var data = JSON.parse(text);
    console.log(data);
});
