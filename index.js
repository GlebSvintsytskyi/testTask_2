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

const calculateTeamFinanceReport = (salaries, team) => {
    let totalBudgetTeam = 0;
    let sumTax = 0;
    let totalBudgetManager = 0;
    let totalBudgetDesigner = 0;
    let totalBudgetArtist = 0;

    team.forEach(element => {
        for (key in salaries) {
            if (element.specialization === `${key}`) {
                if (element.specialization === `Manager`) {
                    totalBudgetManager += salaries[key].salary;
                }

                if (element.specialization === `Designer`) {
                    totalBudgetDesigner += salaries[key].salary;
                }

                if (element.specialization === `Artist`) {
                    totalBudgetArtist += salaries[key].salary;
                }

                let res = salaries[key].salary * salaries[key].tax.split('%')[0] / 100;
                sumTax += res;
                totalBudgetTeam += salaries[key].salary;
            }
        }
    });

    return `totalBudgetTeam = ${totalBudgetTeam + sumTax}, totalBudgetManager = ${totalBudgetManager}, totalBudgetDesigner = ${totalBudgetDesigner}, totalBudgetArtist = ${totalBudgetArtist}`;
}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))