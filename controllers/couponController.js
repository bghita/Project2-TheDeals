const axios = require('axios');


// This function lists the cities available for Groupon deals, for use in dropdown/selectors

function cities() {
    axios.get('https://partner-api.groupon.com/division.json')
    .then(function(response) {
        response.data.divisions.forEach((name) => {
            console.log(name.name)
        })
    })
}
// cities();



// function coupons() {
// // Make a request for a user with a given ID
// axios.get(`https://partner-api.groupon.com/deals?`)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
