//----------------------------------------------------------------

function inserirContato() {
  console.log("add contact...");

  const contact = {
    name: document.getElementById("txtNome").value,
    fone: document.getElementById("txtFone").value,
  };

  // tratar erro aqui
  let bd_contacts = getLocalStorage();

  if (!bd_contacts) bd_contacts = [];
  bd_contacts.push(contact);

  // armazenar os contatos no localstorage
  setLocalStorage(bd_contacts);

  // atualizar a tabela apos a insercao
  updateTable();
}
//-----------------------------STORAGE----------------------------
function getLocalStorage() {
  return JSON.parse(localStorage.getItem("bd_contacts"));
}
//----------------------------------------------------------------
function setLocalStorage(bd_contacts) {
  localStorage.setItem("bd_contacts", JSON.stringify(bd_contacts));
}

//-----------------------------TABLE-------------------------------
function updateTable() {
  // clean table
  cleanTable();

  const bd_contacts = getLocalStorage();

  bd_contacts.forEach(newRow);
}
//----------------------------------------------------------------
function newRow(contact, index) {
  const line = document.createElement("tr");

  line.innerHTML = `  
          <td>${index}</td>
          <td>${contact.name}</td>
          <td>${contact.fone}</td>
          <td><button onclick='removeContact(${index})'>Delete</button></td>        
  `;
  document.querySelector("#tbContacts>tbody").appendChild(line);
}

//----------------------------------------------------------------
function cleanTable() {
  const table = document.querySelector("#tbContacts>tbody");
  table.innerHTML = "";
}

//----------------------------------------------------------------
function removeContact(id) {
  const bd = getLocalStorage();
  bd.splice(id, 1);
  setLocalStorage(bd);
  updateTable();
}

//----------------------------------------------------------------
updateTable();
