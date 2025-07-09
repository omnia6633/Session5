function getElementById() {
  var id = document.getElementById("myId");
  id.style.backgroundColor= "red";
}

function getElementsByClassName() {
  var className = document.getElementsByClassName("myClass");

}

function getElementsByTagName() {
  var name = document.getElementsByTagName("myClass");
  name.style.color=("green")

}

function querySelector() {
  var query = document.querySelector("myClass");
  query.style.backgroundColor = "red";
}

function queryAll() {
  var query = document.querySelectorAll("myClass");
  query.style.color="blue";
  query.style.transition="all 1s";
  query.classList.add("query")
  
}

function changeLink() {
  var link = document.getElementById("myLink");
  link.setAttribute("href", "https://www.youtube.com/");
  link.innerText = "Google Link (changed)";
}

function getLink() {
  var link = document.getElementById("myLink");
  var currentHref = link.getAttribute("href");
  alert("Current link is: " + currentHref);
}

function removeLink() {
  var link = document.getElementById("myLink");
  link.removeAttribute("href");
  link.innerText = "Link Removed";
}