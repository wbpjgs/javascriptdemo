function init() {
    var content = "this is greenplant,change to otherplant";
    var plant = document.getElementById("greenplant");
    plant.innerHTML = content;
    plant.setAttribute("class", "redtext");
}

window.onload = init;
