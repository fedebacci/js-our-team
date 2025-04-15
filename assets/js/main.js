// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO

// # ORIGINAL TEAM FROM OTHER FILE
console.table(teamMembers);

// # HTML ELEMENTS FROM PAGE TO INTERACT WITH
const teamCardsElement = document.getElementById('team-cards');

const addMemberFormElement = document.getElementById('add-member-form');
const newMemberNameInput = document.getElementById('new-member-name');
const newMemberRoleInput = document.getElementById('new-member-role');
const newMemberEmailInput = document.getElementById('new-member-email');
const newMemberImageInput = document.getElementById('new-member-image');

// # ON LOAD
renderTeamCards(teamMembers);

// # ON EVENT
addMemberFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = newMemberNameInput.value;
    const role = newMemberRoleInput.value;
    const email = newMemberEmailInput.value;
    const userImage = newMemberImageInput.value;
    const img = "img/fede-idiota.jpg";
    console.info(`L'immagine che hai inserito: "${userImage}" è stata sostituita automaticamente con un'immagine scelta da me (${img}).`)
    const newMember = { name, role, email, img };
    
    teamMembers.push(newMember);
    console.table(teamMembers);
    const newMemberCard = generateMemberCard(newMember);
    addMemberCard(newMemberCard);
});