var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");

// create ordered list element
var listEl = document.createElement("ol");

// create ordered list eitems
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Bo Aung Din.";
favoriteEl.textContent = "My favorite foods are:";

// Add text for list items
li1.textContent = "Burger 🍔";
li2.textContent = "Pazza🍕 ";
li3.textContent = "ice Cream 🍨";
li4.textContent = "Chicken 🍗";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
body.appendChild(nameEl);
infoEl.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl)
// Append list items to ordered list element 
listEl.appendChild(li1)
listEl.appendChild(li2)
listEl.appendChild(li3)
listEl.appendChild(li4)

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300;");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// Add styling to list element
listEl.setAttribute("style", "background:#333333; padding:20px;");
// Add styling to list items
li1.setAttribute("style", " color:white; background: hsl(34, 45%, 45%); padding:5px; margin-left:35px;");
li2.setAttribute("style", " color:white; background: hwb(293 7% 65% / 0.623); padding:5px; margin-left:35px;");
li3.setAttribute("style", " color:white; background: hwb(150 24% 22% / 0.623); padding:5px; margin-left:35px;");
li4.setAttribute("style", " color:white; background: hwb(56 3% 50% / 0.623); padding:5px; margin-left:35px;");



