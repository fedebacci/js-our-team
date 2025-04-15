// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO



// console.debug(teamCardsElement);
const renderTeamCards = (teamMembers) => {
    // console.debug(teamMembers);
    teamMembers.forEach(member => {
        const memberCard = generateMemberCard(member);
        teamCardsElement.appendChild(memberCard);
    });
};


const generateMemberCard = (member) => {
    // console.debug(member);

    const { name, role, email, img } = member;

    const memberCardColumn = document.createElement('div');
    // memberCard.className = 'card d-flex bg-dark text-bg-dark shadow';
    memberCardColumn.className = 'col-12 col-md-6 col-xl-4';
    memberCardColumn.innerHTML = `
        <div class="d-flex flex-row h-100 bg-dark text-bg-dark shadow">
            <div class="img-container">
                <img src="assets/${img}" alt="${name}" class="img-fluid"/>
            </div>
            <div class="info-container p-3">
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
}