const axios = require('axios');
const categoryList = require('./categories')

// This function lists the cities available for Groupon deals, for use in dropdown/selectors
const couponFeed = {
    cities: (req, res) => {
        axios.get('https://partner-api.groupon.com/division.json')
            .then(function(response) {
                let cities=[];
                response.data.divisions.forEach((each) => {
                    //$('.city-dropdown').text(name.name)
                    cities.push(each.name);
                })
                res.json( cities)
            })
        },
    citiesID: (req, res) => {
        axios.get('https://partner-api.groupon.com/division.json')
            .then(function(response) {
                let cities=[];
                let cityId=[];
                let citiesComb = [];
                response.data.divisions.forEach((each) => {
                    //$('.city-dropdown').text(name.name)
                    cities.push(each.name);
                    cityId.push(each.id);
                })
                citiesComb.push(cities, cityId)
                res.json( citiesComb)
            })
        },

    // if("Local")  
    coupons: (req, res) => {
        // req.body
        // field name in HTML needs to match fill ins below:
        const query = `https://partner-api.groupon.com/deals.json?tsToken=${process.env.TOKEN}&division_id=${req.body.grouponCity}&channel_id=${req.body.grouponCats}&offset=0&limit=10`
        axios.get(query)
            .then(function (response) {
                let title=[];
                let dealUrl=[];
                let img=[];
                let group=[title, dealUrl, img];
                response.data.deals.forEach((each) => {
                    title.push(each.announcementTitle);
                    dealUrl.push(each.dealUrl);
                    img.push(each.largeImageUrl)
                })
                res.json(group);

            })
            .catch(function (error) {
                console.log("hey-oh")
                // handle error
                console.log(error);
            })
            // .finally(function () {
            //     // always executed
            // })
        },
        //dailydeal
    couponsdaily: (req, res) => {
            // req.body
            // field name in HTML needs to match fill ins below:
            const query = `https://partner-api.groupon.com/deals.json?tsToken=${process.env.TOKEN}&division_id=${req.body.grouponCity}&channel_id=${req.body.grouponCats}&offset=0&limit=4`
            console.log(query)
            axios.get(query)
                .then(function (response) {
                    let title=[];
                    let dealUrl=[];
                    let img=[];
                    let group=[title, dealUrl, img];
                    response.data.deals.forEach((each) => {
                        title.push(each.announcementTitle);
                        dealUrl.push(each.dealUrl);
                        img.push(each.largeImageUrl)
                    })
                    res.json(group);
    
                })
                .catch(function (error) {
                    console.log("hello")
                    // handle error
                    console.log(error);
                })
                // .finally(function () {
                //     // always executed
                // })
        },
    testCoupons: (req, res) => {
        // 
        // This returns 10 max coupons
        // field name in HTML needs to match fill ins below:
        axios.get('https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201250_212556_0&division_id=asheville&channel_id=local&offset=0&limit=10')
            .then(function (response) {
                let title=[];
                let dealUrl=[];
                let img=[];
                let group=[title, dealUrl, img];
                response.data.deals.forEach((each) => {
                    title.push(each.announcementTitle);
                    dealUrl.push(each.dealUrl);
                    img.push(each.largeImageUrl)
                })
                res.json(group);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            // .finally(function () {
            //     // always executed
            // })
        },
    categoryList: (req, res) => res.json(categoryList)
}




module.exports = couponFeed;