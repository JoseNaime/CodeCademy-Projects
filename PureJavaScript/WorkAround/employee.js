let Employee = {
    salary: 100000,
}

function getCadre() {
    if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
        return 'entryLevel';
    } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
        return 'midLevel';
    } else return 'seniorLevel';
}

function calculateTax() {
    return payGrades[getCadre()].taxMultiplier * Employee.salary;
}

function getBenefits() {
    return payGrades[getCadre()].benefits.join(', ');
}

function calculateBonus() {
    return .02 * Employee.salary;
}

function reimbursementEligibility() {
    let reimbursementCosts = {health: 5000, housing: 8000, wellness: 6000, gym: 12000};
    let totalBenefitsValue = 0;
    let employeeBenefits = payGrades[getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
        totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
}


export {
    Employee,
    getCadre as cadre,
    calculateTax as tax,
    getBenefits as benefits,
    calculateBonus as bonus,
    reimbursementEligibility as reimbursement
};



