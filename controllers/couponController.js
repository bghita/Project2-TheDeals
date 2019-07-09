const axios = require('axios');
// const $ = require('jquery');

// This function lists the cities available for Groupon deals, for use in dropdown/selectors
const couponFeed = {
    cities: (req, res) => {
        axios.get('https://partner-api.groupon.com/division.json')
            .then(function(response) {
                let data=[];
                response.data.divisions.forEach((name) => {
                    //$('.city-dropdown').text(name.name)
                    data.push(name.name);
                })
                res.json( data)
            })
        },
// $('.city-dropdown').on('click', cities())

    categories: [
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
    ],

    // if("Local")  
    coupons: (req, res) => {
    // 
        // req.body

        axios.get(`https://partner-api.groupon.com/deals.json?sid=SubAff123456&country_code=US&utm_source=GPN&utm_medium=afl&utm_campaign=201236&tsToken=${process.env.TOKEN}`)
        .then(function (response) {
            // handle success
            console.log(response);
            res.json(response)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        })
    }
    // radius: needed as number input option in miles between 1 - 100, default is 10.
}

// $('.deals').on('click', coupons())


module.exports = couponFeed;