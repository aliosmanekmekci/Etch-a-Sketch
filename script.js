const container = document.querySelector("#container");

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement("div");
  div.className = "cell";
  div.id = `cell${i}`;
  div.innerText = `${i}`;
  container.appendChild(div);
}
