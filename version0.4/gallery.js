function clickPhoto(event){
    var ov = document.getElementById("overlay");
    var im = document.getElementById("ovimg");
    var el = event.target;
	if(el.tagName == "IMG"){
	   im.src = el.src;
	}
    ov.style.display = "flex";
}

function clickClose(){
    var ov = document.getElementById("overlay");
    ov.style.display = "none";
}
