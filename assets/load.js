function loadem(){
if (localStorage.getItem("EPDN")) { Array.from(document.getElementsByClassName("EPDN")).forEach((index) => { index.innerHTML = localStorage.getItem("EPDN") }) }; 
if (localStorage.getItem("PW")) { Array.from(document.getElementsByClassName("PW")).forEach((index) => { index.innerHTML = localStorage.getItem("PW") }) } ;
if (localStorage.getItem("POD")) { Array.from(document.getElementsByClassName("attendee_out")).forEach((index) => { index.innerHTML = localStorage.getItem("POD") }) } ;
[].forEach.call(document.getElementsByTagName("copy"),function(el){el.addEventListener("click",function(event){
    if(event.target.tagName == "COPY"){navigator.clipboard.writeText(event.target.innerText)}
if(event.target.tagName == "W"){navigator.clipboard.writeText(event.target.parentNode.innerText)}
})})
}loadem()