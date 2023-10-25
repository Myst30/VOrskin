function historyClicked(){
    document.getElementById("history").style.display="block";
    document.getElementById("vision").style.display="none";
    document.getElementById("mission").style.display="none";
    document.getElementById("historybutton").style.backgroundColor="#FF4372";
    document.getElementById("visionbutton").style.backgroundColor="transparent";
    document.getElementById("missionbutton").style.backgroundColor="transparent";
    document.getElementById("historybutton").style.color="white";
    document.getElementById("visionbutton").style.color="#FF4372";
    document.getElementById("missionbutton").style.color="#FF4372";
}

function missionClicked(){
    document.getElementById("history").style.display="none";
    document.getElementById("vision").style.display="none";
    document.getElementById("mission").style.display="block";
    document.getElementById("historybutton").style.backgroundColor="transparent";
    document.getElementById("visionbutton").style.backgroundColor="transparent";
    document.getElementById("missionbutton").style.backgroundColor="#FF4372";
    document.getElementById("historybutton").style.color="#FF4372";
    document.getElementById("visionbutton").style.color="#FF4372";
    document.getElementById("missionbutton").style.color="white";
}

function visionClicked(){
    document.getElementById("history").style.display="none";
    document.getElementById("vision").style.display="block";
    document.getElementById("mission").style.display="none";
    document.getElementById("historybutton").style.backgroundColor="transparent";
    document.getElementById("visionbutton").style.backgroundColor="#FF4372";
    document.getElementById("missionbutton").style.backgroundColor="transparent";
    document.getElementById("historybutton").style.color="#FF4372";
    document.getElementById("visionbutton").style.color="white";
    document.getElementById("missionbutton").style.color="#FF4372";
}