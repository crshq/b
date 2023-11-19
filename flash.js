var a = document.createElement('object');
const query = new URLSearchParams(window.location.search);
a.classList.add('screencover');
a.setAttribute("data", "https://github.com/crshq/b-data/raw/main/" + query.get("flash"));
document.body.appendChild(a);
