// Movie Ticket Price

let age = Number(prompt("Enter your age:"));
let day = prompt("Type weekday or weekend:");

if (!age || age < 0) {
    alert("Invalid age");
} else if (day !== "weekday" && day !== "weekend") {
    alert("Invalid day. Type weekday or weekend");
} else {
    let price;

    if (age < 12) {
        price = day === "weekend" ? 4 : 3;
    } else if (age < 60) {
        price = day === "weekend" ? 8 : 6;
    } else {
        price = day === "weekend" ? 5 : 4;
    }

    alert("Your ticket price is: $" + price);
}