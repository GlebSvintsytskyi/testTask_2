const salaries = {
    Manager: { salary: 1000, tax: "10%" },
    Designer: { salary: 600, tax: "30%" },
    Artist: { salary: 1500, tax: "15%" },
    TeamLead: { salary: 1000, tax: "99%" },
    Architect: { salary: 9000, tax: "34%" },
}

const team = [
    { name: "Misha", specialization: "Manager" },
    { name: "Max", specialization: "Designer" },
    { name: "Vova", specialization: "Designer"},
    { name: "Leo", specialization: "Artist"},
    { name: "Alexander", specialization: "TeamLead" },
    { name: "Gaudi", specialization: "Architect" },
    { name: "Koolhas", specialization: "Architect" },
    { name: "Foster", specialization: "Architect" },
]

const specialization = {}

const calculateTeamFinanceReport = (salaries, team, specialization) => {
    if (team.length >= 1 && team.length <= 100 && Object.keys(salaries).length >= 1 && Object.keys(salaries).length <= 10) {
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
        console.log(`totalBudgetTeam = ${totalBudgetTeam}`)
        for (key in specialization) {
            console.log(`totalBudget${key} = ${specialization[key]}`);
        }
    } else {
        console.error('minimum specializations amount is 1, maximum up to 10 and minimal team size is 1, maximum up to 100');
    }
}

calculateTeamFinanceReport(salaries, team, specialization);
