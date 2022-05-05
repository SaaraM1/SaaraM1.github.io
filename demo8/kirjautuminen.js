document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
if(localStrorage.getItem("kirjautunut") === 'kylla'){
    document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
    document.getElementById("kirjautumis_lomake").style.display = "none";
}
}
function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kyllä")
}
function logOut(){
    if(localStorage.getItem("kirjautunut") === 'kylla'){
        document
    }
}