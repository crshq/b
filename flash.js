var a = document.createElement('object');
const query = new URLSearchParams(window.location.search);
a.setAttribute("data", "https://crshq.github.io/b-data/" + query.get("flash"));
a.id = "flash"
document.body.appendChild(a);
let b = documnt.getElementById('flash');
let c = true
while (c) {
    b.setAttribute('width', window.innerWidth);
    b.setAttribute('height', window.innerHeight);
}