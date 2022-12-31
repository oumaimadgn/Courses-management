var nom=document.getElementById('nom');
var aleatoire=document.getElementById('aleatoire')

var al1=Math.floor(Math.random()*5)
var al2=Math.floor(Math.random()*5)
var al3=Math.floor(Math.random()*5)
var courses = [
{
originalIndex: 0,
image: "images/javascriptDef.png",
title: "what is javascript?",
category: "JS",
price: 9.9,
},
{
originalIndex: 1,
image: "images/htmlBasics.PNG",
title: "basics of HTML",
category: "HTML",
price: 5.9,
},
{
originalIndex: 2,
image: "images/htmlElements.png",
title: "HTML elements and tags",
category: "HTML",
price: 9.9,
},
{
originalIndex: 3,
image: "images/cssSelectors.jpg",
title: "CSS selectors",
category: "CSS",
price: 69.9,
},
{
originalIndex: 4,
image: "images/javascriptVariables.png",
title: "variables and data type of javascript",
category: "JS",
price: 19.9,
},
{
originalIndex: 5,
image: "images/javascriptOperators.png",
title: "Javascript operators and conditions",
category: "JS",
price: 29.9,
},
{
originalIndex: 6,
image: "images/htmlAttrVal.jpg",
title: "HTML attributes and values",
category: "HTML",
price: 19.9,
},
{
originalIndex: 7,
image: "images/cssProperties.png",
title: "CSS properties",
category: "CSS",
price: 29.9,
},
{
originalIndex: 8,
image: "images/javascriptObjects.png",
title: "Javascript objects and arrays",
category: "JS",
price: 39.9,
},
{
originalIndex: 9,
image: "images/cssMesures.png",
title: "mesures and unites of CSS",
category: "CSS",
price: 19.9,
},
{
originalIndex: 10,
image: "images/cssAnimation.png",
title: "CSS animations",
category: "CSS",
price: 19.9,
},
{
originalIndex: 11,
image: "images/javascriptFunctions.png",
title: "The basics of javascript",
category: "JS",
price: 29.9,
},
{
originalIndex: 12,
image: "images/javascriptEvents.png",
title: "javascript events",
category: "JS",
price: 59.9,
},
{
originalIndex: 13,
image: "images/cssColors.png",
title: "css colors",
category: "css",
price: 29.9,
},
{
originalIndex: 14,
image: "images/phpBasics.png",
title: "getting started with php",
category: "php",
price: 15.9,
},
{
originalIndex: 15,
image: "images/javascriptFunctions2.png",
title: "functions and loops with javascript",
category: "JS",
price: 19.9,
},
{
originalIndex: 16,
image: "images/phpDataBase.png",
title: "connecting to database using PHP",
category: "PHP",
price: 29.9,
},
{
originalIndex: 17,
image: "images/phpCRUD.png",
title: "manipulating crud using php",
category: "php",
price: 45.9,
},
{
originalIndex: 18,
image: "images/javascriptDOM.png",
title: "DOM the power of javascript",
category: "JS",
price: 23.9,
}

]
const arr = []
do {
// arr.length=0
// Generating random number
const randomNumber = Math.floor(Math.random() * (courses.length - 1)) + 1

// Pushing into the array only 
// if the array does not contain it
if (!arr.includes(randomNumber)) {
arr.push(randomNumber);
}

} while (arr.length < 3);


var IM1 = document.getElementById("I1"),
IM2 = document.getElementById("I2"),
IM3 = document.getElementById("I3");

IM1.setAttribute("src", courses[arr[0]].image);
IM2.setAttribute("src", courses[arr[1]].image);
IM3.setAttribute("src", courses[arr[2]].image);

var T = document.querySelectorAll(".Title"),
P = document.querySelectorAll(".Price");

document.querySelectorAll(".Title").innerHTML = courses[arr[0]].title;
document.querySelectorAll(".Price").innerHTML = courses[arr[0]].price;

for (i = 0; i < 3; i++) {
T[i].innerHTML = courses[arr[i]].title;
P[i].innerHTML = '$' + courses[arr[i]].price;
}