import debtData from '../data/debts.js';

class Debt {
    constructor(balance, payment, bank, description, category){
        this.balance = balance;
        this.payment = payment;
        this.bank = bank;
        this.description = description;
        this.category = category;
    }
}

const debtArray = new Array();

export function load(){
    debtData.debts.forEach(debt => {
        debtArray.push(new Debt(debt.balance, debt.payment, debt.bank, 
            debt.description, debt.category));
    });
    loadTemplate(debtArray);
}

export function filterData(input){
    const filteredArray = debtArray.filter(debt => debt.description.includes(input) )
    loadTemplate(filteredArray);
}

function loadTemplate(debts){
    const debtContainer = document.getElementById('debt-container');
    if(debtContainer){
        debtContainer.innerHTML = '';
        let template = '';
        debts.forEach((debt) => {
            template += `<debt-component `
            + ` balance=` +  debt.balance
            + ` payment=` +  debt.payment
            + ` bank=` +  debt.bank
            + ` description=` +  debt.description
            + ` category=` +  debt.category
            + `></debt-component>`
        });
        debtContainer.innerHTML = template;
    }
}