var

var is the old way to make a variable (a box that holds a value).

You can change its value later.
You can even redeclare it again with var and it won't error.
This causes bugs in bigger programs, so nobody uses var in modern JS.
Only used to recognize it when reading old code.



var city = "Mogadishu";
city = "Hargeisa"; // works fine
var city = "Kismayo"; // works fine too — no error, but this is bad practice

👉 Basically: var = old, loose, avoid it.