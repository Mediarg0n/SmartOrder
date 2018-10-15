console.log("halo");

function loadJSON(file,callback) {
  console.log("loadJSON gestartet")
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', file, true);
  xobj.onreadystatechange = function () {
  console.log("xobj.readyState="+xobj.readyState);
  console.log("xobj.status="+xobj.status);
    if (xobj.readyState == 4 && xobj.status == '200') {
    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
     }
  };
  xobj.send(null);
}
loadJSON('articels.json', function(text){
    let data = JSON.parse(text);
    console.log(data);
    console.log("hallo")
});
