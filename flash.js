var a = document.createElement('object');
const query = new URLSearchParams(window.location.search);
a.setAttribute("type", "application/x-shockwave-flash");
a.setAttribute("name", "thing");
a.setAttribute("id", "thing");
a.setAttribute("src", "https://github.com/crshq/b-data/raw/main/" + query.get("flash"));
document.body.appendChild(a);
