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

      let list = document.getElementById("list");
      let scrollspy = document.getElementById("main");
      data.forEach(group => {
        let divGroup = document.createElement("div");

        let groupRef = document.createElement("a");
        groupRef.classList.add("list-group-item");
        groupRef.classList.add("list-group-item-action");
        groupRef.href= "#"+group.groupname;
        groupRef.textContent = group.groupname;
        list.appendChild(groupRef);

        let groupTitle = document.createElement("h4");
        groupTitle.id = group.groupname;
        groupTitle.textContent = group.groupname;
        divGroup.appendChild(groupTitle);

        let groupList = group.list;
        groupList.forEach(listItem => {
          let divElement = document.createElement("div");

          let divBeschreibung = document.createElement("div");
          divBeschreibung.innerHTML =
            "<b>"+listItem.name+"</b> <br>"+listItem.beschreibung;
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
      })
/**
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

**/
  });
};
