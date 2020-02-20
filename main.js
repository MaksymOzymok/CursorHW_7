const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes(salary){
    return this.tax * salary;
}

console.log("My taxes: ",getMyTaxes.call(ukraine,2000));
function getMiddleTaxes(){
    return this.tax * this.middleSalary;
}
console.log("Middle taxes: ",getMiddleTaxes.call(litva));
function getTotalTaxes(){
    return this.tax * this.middleSalary * this.vacancies;
}
console.log("Total taxes: ",getTotalTaxes.call(ukraine));
function getMySalary() {
    let obj = {};
    let randomNumb = Math.round(1500 + Math.random() * 500);
    obj.salary = randomNumb;
    obj.taxes = this.tax * randomNumb;
    obj.profit = obj.salary - obj.taxes;
    console.log(obj);
}

const  timer = setInterval(() => getMySalary.call(ukraine), 10000);