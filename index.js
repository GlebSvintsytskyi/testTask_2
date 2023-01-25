const salaries = {
    TeamLead: { salary: 1000, tax: "99%" },
    Architect: { salary: 9000, tax: "34%" },
}

const team = [
    { name: "Alexander", specialization: "TeamLead" },
    { name: "Gaudi", specialization: "Architect" },
    { name: "Koolhas", specialization: "Architect" },
    { name: "Foster", specialization: "Architect" },
    { name: "Napoleon", specialization: "General" },
]

const calculateTeamFinanceReport = (salaries, team) => {
    if (team.length >= 1 && team.length <= 100 && Object.keys(salaries).length >= 1 && Object.keys(salaries).length <= 10) {
        const specialization = {};
        let totalBudgetTeam = 0;
        team.forEach(e => {
            if (salaries.hasOwnProperty(e.specialization)) {
                let res = salaries[e.specialization].salary * parseInt(salaries[e.specialization].tax) / 100;
                totalBudgetTeam += salaries[e.specialization].salary + res;
                let status = specialization.hasOwnProperty(e.specialization);
                if (status) {
                    specialization[e.specialization] += salaries[e.specialization].salary + res;
                } else {
                    specialization[e.specialization] =  salaries[e.specialization].salary + res;
                }
            } else {
                return;
            }
    }); 
        console.log(`totalBudgetTeam = ${totalBudgetTeam}`);
        for (key in specialization) {
            console.log(`totalBudget${key} = ${specialization[key]}`);
        }
    } else {
        console.error('minimum specializations amount is 1, maximum up to 10 and minimal team size is 1, maximum up to 100');
    }
}

calculateTeamFinanceReport(salaries, team);
