



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

//JSONDATA = [];
//Björn (Christian)
window.addEventListener("load", ()=> {

  loadJSON('articels.json', (text) => {
      let JSONDATA = JSON.parse(text);
      console.log(JSONDATA);
      console.log("loadJSON");
      //Beispiel für Einfügen
      JSONDATA.splice(1,0,  {
          "groupname" : "Essen",
          "list" : [
            {
              "name" : "Vorspeisensalat",
              "beschreibung" : "kleiner gemischter Salat",
              "preis" : 3.20,
              "image" : "vorspeisensalat1.jpg"
            },
            {
              "name" : "Knoblauchbrot",
              "beschreibung" : "frisches Knoblauchbrot mit Dip",
              "preis" : 3.20,
              "image" : "Knoblauchbrot.jpg"
            }
          ]
        });



      let nav = document.getElementById("nav");



      let list = document.createElement("div");
      list.classList.add("list-group");
      list.id = "list";
      nav.appendChild(list);

      let scrollspy = document.getElementById("main");
      JSONDATA.forEach(group => {
        let divGroup = document.createElement("div");
        divGroup.classList.add("divGroup");




        let groupRef = document.createElement("a");
        groupRef.classList.add("list-group-item");
        groupRef.classList.add("list-group-item-action");
        groupRef.href= "#"+group.groupname;
        groupRef.textContent = group.groupname;
        list.appendChild(groupRef);
      

        let groupTitle = document.createElement("h4");
        groupTitle.id = group.groupname.replace(/ /g, '_');
        groupTitle.textContent = group.groupname;
        divGroup.appendChild(groupTitle);

        let groupList = group.list;
        groupList.forEach(listItem => {
          let divElement = document.createElement("div");
          divElement.id = listItem.name.replace(/ /g, '_');
          divElement.classList.add("Artikel");

          let hArtikelName = document.createElement("h5");
          hArtikelName.textContent = listItem.name;
          divElement.appendChild(hArtikelName);
          let divBeschreibung = document.createElement("div");
          divBeschreibung.innerHTML = listItem.beschreibung +
          "<button type=\"button\" onclick=\"alert('Sie haben "+listItem.name+" bestellt.')\">Bestellen</button>";
          divElement.appendChild(divBeschreibung);

          let spanPreis = document.createElement("span");
          spanPreis.textContent= listItem.preis;
          divElement.appendChild(spanPreis);

          let imgElement = document.createElement("img");
          imgElement.src = "img/"+listItem.image;
          divElement.appendChild(imgElement);

          divGroup.appendChild(divElement);
        })
        scrollspy.appendChild(divGroup);

      });
      console.log("JSON geladen");
      autocomplete(JSONDATA);
    }
  );
});
