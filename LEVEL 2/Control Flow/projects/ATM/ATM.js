// ATM Project

let pin = Number(prompt("Enter your PIN:"));
let correctPin = 1234;
let balance = 1000;

if (pin === correctPin) {

    alert("PIN correct!");

    let option = Number(
        prompt("Choose an option:\n1. Check Balance\n2. Withdraw\n3. Deposit")
    );

    if (option === 1) {

        alert("Your balance is: $" + balance);

    } else if (option === 2) {

        let amount = Number(prompt("Enter withdrawal amount:"));

        if (amount <= balance) {
            balance = balance - amount;
            alert("Withdrawal successful!\nYour new balance is: $" + balance);
        } else {
            alert("Insufficient balance");
        }

    } else if (option === 3) {

        let amount = Number(prompt("Enter deposit amount:"));

        balance = balance + amount;

        alert("Deposit successful!\nYour new balance is: $" + balance);

    } else {

        alert("Invalid option");

    }

} else {

    alert("Incorrect PIN");

}   I am add small updates 