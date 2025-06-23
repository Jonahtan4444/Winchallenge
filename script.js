const rows = document.querySelectorAll("tbody tr");

function loadStatus() {
  rows.forEach(row => {
    const id = row.dataset.id;
    const statusCell = row.querySelector("td.status.clickable");
    if (!statusCell || !id) return;

    const savedStatus = localStorage.getItem("winchallenge_" + id);
    if (savedStatus === "1/1") {
      statusCell.textContent = "1/1";
      statusCell.classList.add("done");
    } else {
      statusCell.textContent = "0/1";
      statusCell.classList.remove("done");
    }
  });
}

function saveStatus(id, status) {
  localStorage.setItem("winchallenge_" + id, status);
}

rows.forEach(row => {
  const statusCell = row.querySelector("td.status.clickable");
  if (!statusCell) return;

  statusCell.addEventListener("click", () => {
    const id = row.dataset.id;
    if (!id) return;

    if (statusCell.textContent === "0/1") {
      statusCell.textContent = "1/1";
      statusCell.classList.add("done");
      saveStatus(id, "1/1");
    } else {
      statusCell.textContent = "0/1";
      statusCell.classList.remove("done");
      saveStatus(id, "0/1");
    }
  });
});

// Status beim Laden der Seite setzen
loadStatus();
