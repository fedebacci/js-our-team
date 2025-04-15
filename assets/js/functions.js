// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO



// # FUNZIONE CHE MOSTRA I MEMBRI INIZIALI DEL TEAM
// - RICHIAMA ALTRE FUNZIONI: 
    // - generateMemberCard(member)
    // - addMemberCard(memberCard)
/**
 * Funzione che riceve una lista di membri e, **per ciascuno di essi**, richiama una funzione che genera una car ed una funzione che aggiunge la card generata alla pagina
 * @param {Array<object>} teamMembers Lista di membri da mostrare nella pagine
 */
const renderTeamCards = (teamMembers) => {
    teamMembers.forEach(member => {
        const memberCard = generateMemberCard(member);
        addMemberCard(memberCard);
    });
};



// # FUNZIONE CHE GENERA LE CARD HTML DEI MEMBRI DEL TEAM
/**
 * Funzione che riceve un membro e genera una colonna contenente una card con le seguenti informazioni relative al membro: name, role, email, img (percorso dell'immagine).
 * @param {object} member Membro per il quale deve essere generata la card.
 * @returns {HTMLDivElement} Un elemento HTML di una colonna da aggiungere nella pagina, contenente la card per il membro.
 */
const generateMemberCard = (member) => {
    const { name, role, email, img } = member;

    const memberCardColumn = document.createElement('div');
    memberCardColumn.className = 'col-12 col-md-6 col-xl-4';
    memberCardColumn.innerHTML = `
        <div class="memberCard d-flex flex-row align-items-center h-100 bg-dark text-bg-dark shadow">
            <div class="img-container">
                <img src="assets/${img}" alt="${name}" class="img-fluid"/>
            </div>
            <div class="info-container px-3">
                <h4 class="fw-bold mb-1">
                    ${name}
                </h4>
                <h5 class="mb-2">
                    ${role}
                </h5>
                <a target="_blank" href="mailto:${email}" class="text-break text-decoration-none">
                    ${email}
                </a>
            </div>
        </div>
    `;
    return memberCardColumn;
};



// # FUNZIONE CHE AGGIUNGE LA CARD HTML DI UN MEMBRO DEL TEAM ALLA PAGINA
/**
 * Funzione che riceve l'elemento HTML da aggiungere in pagina e lo aggiunge
 * @param {HTMLDivElement} memberCard Elemento HTML di una colonna da aggiungere nella pagina, contenente la card per il membro.
 */
const addMemberCard = (memberCard) => {
    teamCardsElement.appendChild(memberCard);
};



// # FUNZIONE CHE AGGIUNGE UN MEMBRO NUOVO AL TEAM E ALLA PAGINA
// - RICHIAMA ALTRE FUNZIONI: 
    // - generateNewMember(newName, newRole, newEmail, newImg)
    // - addMemberToTeam(newMember)
    // - generateMemberCard(newMember)
    // - addMemberCard(newMemberCard)
/**
 * Funzione che riceve i valori degli input contenenti le informazioni del nuovo membro e richiama in ordine:
 * La funzione che genera il nuovo membro, La funzione che aggiunge il nuovo membro al team, La funzione che genera la card per il nuovo membro e La funzione che aggiunge la card del nuovo membro alla pagina
 * @param {string} newName Valore dell'input contenente il nome del nuovo membro
 * @param {string} newRole Valore dell'input contenente il ruolo del nuovo membro
 * @param {string} newEmail Valore dell'input contenente l'email del nuovo membro
 * @param {string} newImg Valore dell'input contenente il percorso dell'immagine del nuovo membro
 */
const addNewMember = (newName, newRole, newEmail, newImg) => {
    const newMember = generateNewMember(newName, newRole, newEmail, newImg);
    addMemberToTeam(newMember);
    const newMemberCard = generateMemberCard(newMember);
    addMemberCard(newMemberCard);
};



// # FUNZIONE CHE GENERA IL NUOVO MEMBRO DAI DATI INSERITI DALL'UTENTE
/**
 * Funzione che riceve i valori degli input contenenti le informazioni del nuovo membro e ritorna un oggetto contenente le informazioni ricevute
 * @param {string} newName Valore dell'input contenente il nome del nuovo membro
 * @param {string} newRole Valore dell'input contenente il ruolo del nuovo membro
 * @param {string} newEmail Valore dell'input contenente l'email del nuovo membro
 * @param {string} newImg Valore dell'input contenente il percorso dell'immagine del nuovo membro
 * @returns {object} Oggetto che rappresenta il nuovo membro
 */
const generateNewMember = (newName, newRole, newEmail, newImg) => {
    const name = newName;
    const role = newRole;
    const email = newEmail;
    const userImage = newImg;
    const img = "img/fede-idiota.jpg";
    console.info(`L'immagine che hai inserito: "${userImage}" è stata sostituita automaticamente con un'immagine scelta da me (${img}).`);

    return { name, role, email, img };
}



// # FUNZIONE CHE AGGIUNGE IL NUOVO MEMBRO ALLA LISTA DEL TEAM
/**
 * Funzione che riceve l'oggetto contenente il nuovo membro e lo aggiunge alla lista del team, che poi stampa in console
 * @param {object} newMember Membro da aggiugere alla lista del team
 */
const addMemberToTeam = (newMember) => {
    teamMembers.push(newMember);
    console.table(teamMembers);
};