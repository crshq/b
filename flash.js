var a = document.createElement('object');
const query = new URLSearchParams(window.location.search);
a.classList.add('screencover');
a.setAttribute("data", "crshq.github.io/b-data/" + query.get("flash"));
document.body.appendChild(a);
