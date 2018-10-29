



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



      let nav_large = document.getElementById("nav_large");
      let nav_small = document.getElementById("nav_small_ul")



      let list = document.createElement("div");
      list.classList.add("list-group");
      list.id = "list";
      nav_large.appendChild(list);



      let scrollspy = document.getElementById("main");
      JSONDATA.forEach(group => {
        let divGroup = document.createElement("div");
        divGroup.id = group.groupname.replace(/ /g, '_');
        divGroup.classList.add("divGroup");




        let groupRef = document.createElement("a");
        groupRef.classList.add("list-group-item");
        groupRef.classList.add("list-group-item-action");
        groupRef.href= "#"+group.groupname;
        groupRef.textContent = group.groupname;
        list.appendChild(groupRef);

        let groupRef_small = document.createElement("li");
        groupRef_small.classList.add("nav-item");
        groupRef_small.setAttribute("data-toggle","collapse");
        groupRef_small.setAttribute("data-target","#navbarSupportedContent");
        nav_small.appendChild(groupRef_small);

        let navlink = document.createElement("a");
        navlink.classList.add("nav-link");
        navlink.href = "#"+group.groupname;
        navlink.textContent = group.groupname;
        groupRef_small.appendChild(navlink);


        let groupTitle = document.createElement("h4");
        groupTitle.textContent = group.groupname;
        divGroup.appendChild(groupTitle);

        let groupList = group.list;
        groupList.forEach(listItem => {

          let divArtikel = document.createElement("div");
          divArtikel.id = listItem.name.replace(/ /g, '_');
          divArtikel.classList.add("divArtikel");
          divArtikel.classList.add("row");

            let divBild = document.createElement("div");
            divBild.classList.add("divBild");
            divBild.classList.add("col-xs-3");

              let imgArtikel = document.createElement("img");
              imgArtikel.src = "img/"+listItem.image;
              divBild.appendChild(imgArtikel);
            divArtikel.appendChild(divBild);

            let divArtikelDetails = document.createElement("div");
            divArtikelDetails.classList.add("divArtikelDetails");
            divArtikelDetails.classList.add("col-xs-9");

              let spanArtikelTitel = document.createElement("span");
              spanArtikelTitel.classList.add("spanArtikelTitel");
                spanArtikelTitel.innerHTML = listItem.name;
              divArtikelDetails.appendChild(spanArtikelTitel);

              let divBeschreibung = document.createElement("div");
              divBeschreibung.classList.add("divBeschreibung");
                divBeschreibung.innerHTML = listItem.beschreibung;
              divArtikelDetails.appendChild(divBeschreibung);

              let divOrder = document.createElement("div");
              divOrder.classList.add("divOrder");

                let spanPreis = document.createElement("span");
                spanPreis.classList.add("spanPreis");
                  spanPreis.innerHTML = listItem.preis;
                divOrder.appendChild(spanPreis);

                let buttonBestellen = document.createElement("button");
                buttonBestellen.classList.add("buttonBestellen");
                buttonBestellen.type = "button";
                buttonBestellen.onclick = "alert('Sie haben "+listItem.name+" bestellt.')";
                  buttonBestellen.innerHTML = "Bestellen";
                divOrder.appendChild(buttonBestellen);


              divArtikelDetails.appendChild(divOrder);

            divArtikel.appendChild(divArtikelDetails);
          divGroup.appendChild(divArtikel);
          console.log(divArtikel);


          /*alt
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
          */
        })
        scrollspy.appendChild(divGroup);

      });
      console.log("JSON geladen");
      autocomplete(JSONDATA);
    }
  );
});
