// let grouponCity = "san-francisco";
// let grouponCat = "Local";



//needs directing... VVVVV
function categories() {
    $.ajax({
        url: "/api/coupons/categories"
    }).then( response => {
        return response;
    })
}
    
    
$('#cities-list').on('click', cities())

function cities() {
   $.ajax({
        url: "/api/coupons/cities"
    }).then( response => {
        return response;
    })
}

//make selection a variable

//

//  You should be making API requests to your routes for data here.
