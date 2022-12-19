document.getElementById("nappi").onclick = function(){
    
    let name = document.getElementById("name").value;
    let note = document.getElementById("note").value;
    let date = new Date;


    let newdate = document.createElement("div");
    newdate.innerHTML = date;
    newdate.style.borderLeft = "solid 2px black";
    newdate.style.borderRight = "solid 2px black";
    newdate.style.borderTop = "solid 2px black";

    document.getElementById("list").appendChild(newdate);


    let newdiv = document.createElement("div");
    newdiv.innerHTML = name;
        newdiv.style.fontSize = "30px";
        newdiv.style.fontWeight = "bold";
        newdiv.style.borderLeft = "solid 2px black";
        newdiv.style.borderRight = "solid 2px black";

    document.getElementById("list").appendChild(newdiv);


    let newnote = document.createElement("div");
        newnote.style.borderBottom = "solid 2px black";
        newnote.style.borderLeft = "solid 2px black";
        newnote.style.borderRight = "solid 2px black";
    newnote.innerHTML = note;

    document.getElementById("list").appendChild(newnote);

    if (document.getElementById("important").checked == true){
        newnote.style.color = "red";
        newdiv.style.color = "red";
        newdate.style.color = "red";
    }else{
        newnote.style.color = "black";

    }
}