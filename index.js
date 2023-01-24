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
    for (key in salaries) {
        let res = salaries[key].salary * parseInt(salaries[key].tax) / 100;
        totalBudgetTeam += salaries[key].salary + res;
        specialization[key] = salaries[key].salary;
    }

    return `totalBudgetTeam = ${totalBudgetTeam}, totalBudgetManager = ${specialization['Manager']}, totalBudgetDesigner = ${specialization['Designer']}, totalBudgetArtist = ${specialization['Artist']}`;
}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1, specialization1);
console.log(JSON.stringify(financeReport1))