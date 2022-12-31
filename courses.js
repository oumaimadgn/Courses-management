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

  window.addEventListener("DOMContentLoaded", function() {
    diplayMenuItems(courses);
});

function diplayMenuItems(CoursesItems) {
    let displayMenu = CoursesItems.map(function(item) {
        return `<div class="menu1-item" id=${item.title}>
            <img src=${item.image} alt=${item.title} class="photo" />
                <h3 style="font-size:20px;">${item.title}</h3>
                <h4 style="font-size:20px;" class="price">$${item.price}</h4>
            </div>`;
    });

    displayMenu = displayMenu.join("");
    document.getElementById('Section').innerHTML = displayMenu;
}


const itemsList = document.getElementById("Section");
const itemsCount = itemsList.getElementsByTagName("div");

// filtrage avec 'search bar'
const searchInput = document.getElementById("Search");

searchInput.addEventListener("keyup", filterItems);

function filterItems() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredItems = courses.filter(item => item.title.toLowerCase().includes(searchTerm));
    const filteredIndexes = filteredItems.map(function(item) { return item.originalIndex });

    for(var i = 0; i < itemsCount.length; i++) {
      if (filteredIndexes.indexOf(i) < 0) {
        itemsCount[i].className = " hiddenElement";
      } else {
        itemsCount[i].className = " menu1-item";
      }
    }
}

// filtrage de catégories avec boutons
 const buttons = document.querySelectorAll('.button');
 
 for (const button of buttons) {
   
   button.addEventListener('click', filterByButton);

   function filterByButton(){
    const buttonValue = button.value.toLowerCase();
    const filteredItems = courses.filter(item => item.category.toLowerCase().includes(buttonValue));
    const filteredIndexes = filteredItems.map(function(item) { return item.originalIndex });
    
    for(var i = 0; i < itemsCount.length; i++) {
      if(buttonValue == 'all'){
        itemsCount[i].className = " menu1-item";
      }
      else{
      if (filteredIndexes.indexOf(i) < 0) {
        itemsCount[i].className = " hiddenElement";
      } else {
        itemsCount[i].className = " menu1-item";
      }
    }
   }
 }
}

// filtrage de prix avec 'range'
const Range = document.getElementById('price');
Range.addEventListener('change', function() {

    function priceRangeFilter(courses, minPrice, maxPrice) {
        const filterCourses = courses.filter(item => {
            return item.price >= minPrice && item.price <= maxPrice;
        });
        const filteredByIndexes = filterCourses.map(item => {
            return item.originalIndex
        });

        for (var i = 0; i < itemsCount.length; i++) {
            if (filteredByIndexes.indexOf(i) < 0) {
                itemsCount[i].className = " hiddenElement";
            } else {
                itemsCount[i].className = " menu1-item";
            }
        }
    }

    priceRangeFilter(courses, 0, Range.value);
});






 





