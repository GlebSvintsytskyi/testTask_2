const salaries1 = {
    Manager: { salary: 1000, tax: "10%" },
    Designer: { salary: 600, tax: "30%" },
    Artist: { salary: 1500, tax: "15%" }
}

const team1 = [
    { name: "Misha", specialization: "Manager" },
    { name: "Max", specialization: "Designer" },
    { name: "Vova", specialization: "Designer"},
    { name: "Leo", specialization: "Artist"}
]

const specialization1 = {}

const calculateTeamFinanceReport = (salaries, team, specialization) => {
    let totalBudgetTeam = 0;
    team.forEach(e => {
        let res = salaries[e.specialization].salary * parseInt(salaries[e.specialization].tax) / 100;
        totalBudgetTeam += salaries[e.specialization].salary + res;
        let status = specialization.hasOwnProperty(e.specialization);
        if (status) {
            specialization[e.specialization] += salaries[e.specialization].salary + res;
        } else {
            specialization[e.specialization] =  salaries[e.specialization].salary + res;
        }
    });

    return `totalBudgetTeam = ${totalBudgetTeam}, totalBudgetManager = ${specialization['Manager']}, totalBudgetDesigner = ${specialization['Designer']}, totalBudgetArtist = ${specialization['Artist']}`;
}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1, specialization1);
console.log(JSON.stringify(financeReport1))