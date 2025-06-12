function supportCreator() {
  const name = prompt("Zadej své jméno:");
  if (name) {
    const ul = document.getElementById("supporterList");
    const li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
    alert("Díky za podporu!");
  }
}
