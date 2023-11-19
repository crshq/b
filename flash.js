var a = document.createElement('object');
const query = new URLSearchParams(window.location.search);
a.setAttribute("data", "https://crshq.github.io/b-data/" + query.get("flash"));
a.id = "flash";
a.setAttribute('width', window.innerWidth);
a.setAttribute('height', window.innerHeight);
document.body.appendChild(a);
