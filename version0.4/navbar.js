function initNavBar(){
    var sbts = [["Photoshoot make-up","page2a"],["Day/Dag make-up", "page2b"],["Halloween make-up","page2c"]];
    var nb = document.getElementById("navbar");
    var bt = addButton("Home","page1");
    bt.style.marginLeft = "28vw";
    nb.appendChild(bt);
    nb.appendChild(addDropdown("Portfolio", sbts));
    nb.appendChild(addButton("Over Ons","page3"));
    nb.appendChild(addButton("Contact","page4"));
}

function addButton(cap, pg){
    var el = document.createElement("button");
    el.innerText = cap;
    if(pg){
        el.setAttribute("data-idx", pg);
        el.addEventListener("click", btClick);
    }
    return el;    
}

function addDropdown(cap, bts){
    var dv = document.createElement("div");
    dv.className = "dropdown";
    var bt = addButton(cap, null);
    bt.className = "dropbtn";
    dv.appendChild(bt);
    var sdv = document.createElement("div");
    sdv.className = "dropdown-content";
    for(var i=0; i<bts.length; i++){
        sdv.appendChild(addButton(bts[i][0],bts[i][1]));
    }
    dv.appendChild(sdv);
    return dv;
}

function btClick(evt){
    //alert(evt.target.getAttribute("data-idx"));
    var sel = evt.target.getAttribute("data-idx");
    switch(sel){
        case "page2a":
            window.location = "page2a.html";
            break;
        case "page2b":
            window.location = "page2b.html";
            break;
        case "page2c":
            window.location = "page2c.html";
            break;
        case "page3":            
            window.location = "page3.html";
            break;
        case "page4":            
            window.location = "page4.html";
            break;
        default:
            window.location = "index.html"; 
    }
}