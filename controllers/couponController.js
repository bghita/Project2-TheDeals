const axios = require('axios');

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

    // if("Local")  
    coupons: (req, res) => {
    // 
        // req.body

        axios.get(`https://partner-api.groupon.com/deals.json?division_id=${req.body.grouponCity}&filters=category:${req.body.grouponCats}&offset=0&limit=50&country_code=US&tsToken=${process.env.TOKEN}&utm_source=GPN&utm_medium=afl&utm_campaign=ryan`)
        .then(function (response) {
            // handle success
            console.log(response);
            res.json(response)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        // .finally(function () {
        //     // always executed
        // })
    }
    // radius: needed as number input option in miles between 1 - 100, default is 10.
}


module.exports = couponFeed;