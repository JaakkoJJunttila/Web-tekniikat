// Kun painiketta painetaan
document.getElementById("addParticipantButton").onclick = function(){
    // Lue syöte ja tallenna muuttujaan
    let participant = document.getElementById("name").value;
    // Luo uusi li-elementti
    let newLiElement = document.createElement("li");
    // Aseta li-elementin sisällöksi syötetty nimi
    newLiElement.innerHTML = participant;
    // Lisää li-elementti ul-elementille
    document.getElementById("participantList").appendChild(newLiElement);
}