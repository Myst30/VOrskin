function off() {
    document.getElementById("overlay").style.display = "none";
}

function toggle(){
    var x=document.getElementById("nav")
    if(x.className==="Header"){
        x.className+="Responsive";
    } else {
        x.className="Header";
    }
}