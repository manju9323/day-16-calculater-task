//const { displayPartsToString } = require("typescript")

m=document.getElementsByClassName("val")
for(let i=0;i<m.length;i++)
{
m[i].addEventListener("click",bon)
//console.log(v)

function bon(){
    displa.value+=m[i].innerHTML
    console.log(displa)
    }
    
}
ca=document.getElementById("equal")
ca.addEventListener("click",cal)
function cal(){
try{
displa.value=eval(displa.value)
}
catch{
    alert("invalid")
}
}

clea=document.getElementById("clear")
clea.addEventListener("click",cle)
function cle()
{
displa.value="";   
}
/*console.log(v)
displa=document.getElementById("displa")
*/
de=document.getElementById("del")
de.addEventListener("click",d)
function d()
{
displa.value=displa.value.slice(0,-1)  
}