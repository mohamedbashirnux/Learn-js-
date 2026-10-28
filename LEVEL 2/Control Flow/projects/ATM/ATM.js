let balance = 1000;
let Options = Number(prompt("1.check your balance\n 2. with draw \n 3 Deposit"));

if (Options === 1) {
    alert("your balance is " + balance)

} else if (options === 2) {
    alert("your withdrwaw 800 dollar, your balance is  " + balance)
} else if (options === 3) {
    alert("your deposited 100 $, your new balance is "  + balance)
} else {
    alert("invaid options")
}