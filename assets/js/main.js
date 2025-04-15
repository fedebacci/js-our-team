// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO



// # TEAM ORIGINALE DAL FILE script.js
console.table(teamMembers);



// # ELEMENTI HTML DELLA PAGINA CON CUI INTERAGIRE
// - ELEMENTI A CUI AGGIUNGERE INFORMAZIONI
const teamCardsElement = document.getElementById('team-cards');
// - ELEMENTI DA CUI RICEVERE INFORMAZIONI
const addMemberFormElement = document.getElementById('add-member-form');
const newMemberNameInput = document.getElementById('new-member-name');
const newMemberRoleInput = document.getElementById('new-member-role');
const newMemberEmailInput = document.getElementById('new-member-email');
const newMemberImageInput = document.getElementById('new-member-image');



// # FUNZIONI DA ESEGUIRE AL CARICAMENTO DELLO SCRIPT
renderTeamCards(teamMembers);



// # EVENTI DA ASCOLTARE
// - EVENTO SUBMIT
addMemberFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewMember(newMemberNameInput.value, newMemberRoleInput.value, newMemberEmailInput.value, newMemberImageInput.value);
});