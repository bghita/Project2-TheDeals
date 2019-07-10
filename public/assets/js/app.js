// let grouponCity = "san-francisco";
// let grouponCat = "Local";

const categories = [
    {
        name: "Local",
        subcat_name: [
            "automotive",
            "beauty-and-spas",
            "food-and-drink",
            "health-and-fitness",
            "home-improvement",
            "personal-services",
            "retail",
            "things-to-do"
        ],
        subcat_show: [
            "Automotive",
            "Beauty & Spas",
            "Food & Drink",
            "Health & Fitness",
            "Home Improvement",
            "Personal Services",
            "Retail",
            "Things To Do"
        ]
    },
    {
        name: "Goods",
        subcat_name: [
            "auto-and-home-improvement",
            "baby-kids-and-toys",	
            "collectibles",
            "electronics",
            "entertainment-and-media",	 
            "for-the-home",
            "groceries-household-and-pets",	 
            "health-and-beauty",
            "jewelry-and-watches",
            "mens-clothing-shoes-and-accessories",
            "sports-and-outdoors",
            "womens-clothing-shoes-and-accessories"
        ],
        subcat_show: [
            "Auto & Home Improvement",
            "Baby, Kids & Toys",	
            "Collectibles",
            "Electronics",
            "Entertainment & Media",	 
            "For The Home",
            "Groceries, Household, & Pets",	 
            "Health & Beauty",
            "Jewelry & Watches",
            "Men's Clothing, Shoes & Accessories",
            "Sports & Outdoors",
            "Women's Clothing, Shoes & Accessories"
        ]
    },
    {
        name: "Travel",
        subcat_name: [
            "cruise-travel",
            "flights-and-transportation",
            "hotels-and-accommodations",
            "tour-travel"
        ],
        subcat_show: [
            "Cruise Travel",
            "Flights & Transportation",
            "Hotels & Accommodations",
            "Tour Travel"
        ]
    }
]

//needs directing -- attr('data-content',___)... VVVVV
function categories() {
    $.ajax({
        url: "/api/coupons/categories"
    }).then( response => {
        return response;
    })
}
    
//when client selects city option on index.html    
$('#city-selector').change(cities()) 


function cities() {
    $.ajax({
        url: "/api/coupons/cities",
    }).then( response => {
        let option = $('<option>');
        response.forEach((city) => {
            option.text(city);
            $('#city-selector').append(option);
        })
    })
}

//login page functions
//LOCAL STORAGE
myStorage = window.localStorage;
    //username and password from sign-up form page
const email = document.localStorage.getItem('email');
const password = document.localStorage.getItem('password');
    //check if stored data matches input on login form
btnInsert.onclick = function (){
    const em = em.value;
    const pw = pw.value();
}

    //display local deals(10)

//signup page functions
    //cities dropdown
    //submit button function

//make selection a variable

//

//  You should be making API requests to your routes for data here.
