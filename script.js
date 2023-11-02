const icon = document.getElementById("icon");
icon.addEventListener("click", () => {
  const x = document.getElementById("nav");
  if (x.className === "container-navbar") x.className += " responsive";
  else x.className = "container-navbar";
});

// Ativar/desativar sidebar
function openNav() {
  document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}
