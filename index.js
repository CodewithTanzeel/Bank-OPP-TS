/**
 * The above TypeScript code defines classes for customers and bank accounts, generates fake customer
 * data, and implements a banking service using inquirer for viewing balance, cash withdrawal, and cash
 * deposit functionalities.
 * @param {Bank} bank - The `bank` parameter in the `bankService` function is an instance of the `Bank`
 * class. It is used to store customer data and account details, as well as perform operations like
 * adding customers, adding account numbers, and handling transactions such as cash withdrawals and
 * deposits. The `bank`
 */
import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";
faker;
// I have created a class of customer which will ensure to obtain the required data from them.
class Customer {
    firstName;
    lastName;
    age;
    gender;
    mobNumber;
    accNumber;
    constructor(fName, lName, age, gender, mob, acc) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.mobNumber = mob;
        this.accNumber = acc;
        this.gender = gender;
    }
}
// Now making a class of Bank which will store data for multiple customers 
class Bank {
    customer = [];
    account = [];
    addCustomer(obj) {
        this.customer.push(obj);
    }
    addAccountNumber(obj) {
        this.account.push(obj);
    }
    transaction(accObj) {
        let NewAccounts = this.account.filter(acc => acc.accNumber !== accObj.accNumber);
        this.account = [...NewAccounts, accObj];
    }
}
// now let a variable named mybank which is equal to myBank with null parametar.
let myBank = new Bank();
// Letting i which is set to number i less then equal to 3 this is beacause it will generate 3 accounts and further more using increment property 
// to automatically increment in the account the number highlighting the fact that the details of the customer is fake which is generated by faker
// library which we have installed early!!
for (let i = 1; i <= 3; i++) {
    let fName = faker.person.firstName("male");
    let lName = faker.person.lastName();
    let num = parseInt(faker.phone.number("3#########"));
    const cus = new Customer(fName, lName, 25 * i, "male", num, 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccountNumber({ accNumber: cus.accNumber, balance: 100 * i });
}
// In order to make this bank funtional
async function bankService(bank) {
    // The Reasonbehind nesting all the data in the do while loop is i wanted it to be continously running while! 
    // i am using it!!!
    do {
        //  letting a a service setiing it to await inquirer in order to the get the input from  the user futhermore!!
        // I have given choices and message ,the type is setted to list in order to show choices in list form !!!!
        let service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Please Select Your Desired Service you want to Use ",
            choices: ["View Balance", "CashWithdraw", "Cash Deposit", "Exit"]
        });
        if (service.select == "View Balance") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your Account Number:",
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                let name = myBank.customer.find((item) => item.accNumber == account?.accNumber);
                console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)} Your account Balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
            }
        }
        if (service.select == "CashWithdraw") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your Account Number:",
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    name: "rupee",
                    message: "Enter Your Amount",
                });
                if (ans.rupee > account.balance) {
                    console.log(chalk.red.bold("Your Balance is insufficient"));
                }
                let newBalance = account.balance - ans.rupee;
                // Transaction Method
                bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            }
        }
        if (service.select == "Cash Deposit") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your Account Number:",
            });
            let account = myBank.account.find((acc) => acc.accNumber == res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    name: "rupee",
                    message: "Enter Your Amount",
                });
                let newBalance = account.balance + ans.rupee;
                // Transaction Method
                bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            }
        }
        if (service.select == "Exit") {
            return;
        }
    } while (true);
}
bankService(myBank);