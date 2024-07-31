const body = window.document.getElementsByTagName("body");
const h1 = window.document.createElement("h1");
h1.innerHTML = "Lista top!";
body[0].appendChild(h1);

let users = [
  { name: "Gustavo" },
  { name: "Bruno" },
  { name: "Show" },
  { name: "Top" },
  { name: "Daora" },
];

const ol = window.document.createElement("ol");

body[0].appendChild(ol);

users.map((user) => {
  const li = window.document.createElement("li");
  li.innerHTML = `Nome: ${user.name}`;
  ol.appendChild(li);
});

function addUser(user) {
  const li = window.document.createElement("li");
  li.innerHTML = `Nome: ${user.name}`;
  ol.appendChild(li);
}

function onSubmit() {
  const input = document.getElementById("name");
  const user = {
    name: input.value,
  };
  users.push(user);
  addUser(user);
}
