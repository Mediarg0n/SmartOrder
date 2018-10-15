console.log("halo");
//Björn
let loadJSON = (file,callback) =>{
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', file, true);
  xobj.onreadystatechange = () => {
    if (xobj.readyState == 4 && xobj.status == '200') {
    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
     }
  };
  xobj.send(null);
}

//Björn
window.onload = function() {

  loadJSON('articels.json', (text) => {
      let data = JSON.parse(text);
      console.log(data);

      //Vorspeisen
      let vorspeisenElement = document.getElementById("Vorspeisen");
      console.log(vorspeisenElement);
      let vorspeisen = data.Vorspeisen;
      console.log(vorspeisen);
      vorspeisen.forEach(element => {
        console.log(element)
        let divElement = document.createElement("div");
        vorspeisenElement.appendChild(divElement);

        let imgElement = document.createElement("img");
        imgElement.src = "img/"+element.image;
        divElement.appendChild(imgElement);

        let txtNode = document.createTextNode(element.Beschreibung);
        divElement.appendChild(txtNode);

      });


  });
};
