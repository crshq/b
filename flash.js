var a = document.createElement('object');
const query = new URLSearchParams(window.location.search);
document.getElementById('title').innerHTML = decodeURIcomponent(query.get("flash")) + " - FlashPortal"
a.setAttribute("data", "https://crshq.github.io/b-data/" + query.get("flash"));
a.id = "flash";
a.setAttribute('width', window.innerWidth);
a.setAttribute('height', window.innerHeight);
document.body.appendChild(a);
