(function(){
var pages=[].slice.call(document.querySelectorAll(".page")),links=[].slice.call(document.querySelectorAll("nav a"));
function show(){
var id=(location.hash||"#about").slice(1);
if(!document.getElementById(id))id="about";
pages.forEach(function(p){p.classList.toggle("on",p.id===id)});
links.forEach(function(a){a.setAttribute("aria-current",a.getAttribute("href")==="#"+id?"page":"false")});
window.scrollTo(0,0);
document.title=(id==="about"?"":id.charAt(0).toUpperCase()+id.slice(1)+" | ")+"Neelam Sahani | Data Analyst Portfolio";
}
window.addEventListener("hashchange",show);show();
})();
