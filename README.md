# Banking Service Application

This TypeScript project simulates a simple banking service using a command-line interface. It allows users to view their account balance, withdraw cash, and deposit cash. The application uses the `faker` library to generate fake customer data and `inquirer` for interactive prompts.

## Features

- **View Balance**: Check the balance of a specified account.
- **Cash Withdrawal**: Withdraw cash from a specified account.
- **Cash Deposit**: Deposit cash into a specified account.
- **Generate Fake Data**: Automatically generates fake customer data for testing.

## Dependencies

- [faker](https://www.npmjs.com/package/@faker-js/faker): A library for generating fake data.
- [chalk](https://www.npmjs.com/package/chalk): A library for styling console output.
- [inquirer](https://www.npmjs.com/package/inquirer): A library for creating interactive command-line interfaces.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Compile and run the TypeScript file:

   ```bash
   npx ts-node <script-file>.ts
   ```

2. Follow the interactive prompts to use the banking services:
   - **View Balance**: Enter your account number to view the balance.
   - **Cash Withdrawal**: Enter your account number and the amount to withdraw.
   - **Cash Deposit**: Enter your account number and the amount to deposit.
   - **Exit**: Exit the application.

## Code Explanation

### Classes

- **Customer**
  - Represents a bank customer with attributes such as first name, last name, age, gender, mobile number, and account number.
  - **Constructor**: Initializes a new customer with the provided details.

- **BankAccount**
  - Interface for bank accounts that includes account number and balance.

- **Bank**
  - Manages customers and accounts.
  - **addCustomer**: Adds a new customer to the bank.
  - **addAccountNumber**: Adds a new bank account.
  - **transaction**: Updates the balance of an account.

### Data Generation

- Fake customer data is generated using `faker` library.
- Three fake accounts are created with initial balances.

### Interactive Service

- **bankService Function**
  - Provides a menu for users to select a service.
  - **View Balance**: Prompts for an account number and displays the balance.
  - **Cash Withdrawal**: Prompts for an account number and withdrawal amount, updates the balance.
  - **Cash Deposit**: Prompts for an account number and deposit amount, updates the balance.
  - **Exit**: Ends the program.

### Error Handling

- Invalid account numbers are handled with error messages.
- Insufficient balance checks are performed before processing withdrawals.

## Example

```plaintext
Please Select Your Desired Service you want to Use 
? Select: (Use arrow keys)
  View Balance
  Cash Withdraw
  Cash Deposit
> Exit
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

