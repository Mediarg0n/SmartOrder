



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

//Björn (Christian)
window.addEventListener("load", ()=> {

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
          divElement.classList.add("Artikel");

          let divBeschreibung = document.createElement("div");
          divBeschreibung.innerHTML =
            "<b>"+listItem.name+"</b> <br>"+listItem.beschreibung +"<button onclick=\"alert('Sie haben "+listItem.name+" bestellt.')\">Bestellen</button>";
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
    }
    )

});
