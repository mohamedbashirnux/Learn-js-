// project one is simple asking user to Enter the His balance, then ask the enter withdrwal amount 
// if the withdrwal amount <= account balance display the "withdrawal sucsess, if not balance not eneogh"

// let accountBalance = Number(prompt("Enter your account balance?"))
// let withdewal =Number(prompt("Enter how much you want withdrawal?"))
// let result = withdewal <= accountBalance ? "withdrwal sucsesfully" : "balance not eneogh"
// alert(result)

// Project two: ask the user to enter their account balance,
// then ask the user to enter the withdrawal amount.
// If the withdrawal amount is >= 10 AND <= account balance,
// display "withdrawal successful", if not display "invalid withdrawal"

let balance = Number(prompt("Enter your balance?"));

let withdrwalamount = Number(prompt("Enter your withdrawal amount"));

let result = withdrwalamount >= 10 && withdrwalamount <= balance
    ? "withdrawal successful"
    : "invalid withdrawal";

alert(result);
