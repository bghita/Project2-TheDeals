// let grouponCity = "san-francisco";
// let grouponCat = "Local";

$(function () {
    $('[data-toggle="popover"]').popover()
})

//needs directing -- attr('data-content',___)... VVVVV

$( document ).ready(categories())

function categories() {
    $.ajax({
        url: "/api/coupons/categories"
    }).then( response => {
        for(let i = 0; i < response.length; i++) {
            if(response[i].name === "Goods") {
                $('button#goods-btn').attr('data-content', response[i].subcat_show.join(", "))
            }
            if(response[i].name === "Local") {
                $('button#local-btn').attr('data-content', response[i].subcat_show.join(", "))
            }
            
            if(response[i].name === "Travel") {
                $('button#travel-btn').attr('data-content', response[i].subcat_show.join(", "))
            }
        }
    })
}
        

let cities = function() {
    $.ajax({
        url: "/api/coupons/cities",
    }).then( response => {
        // console.log(response);
        response.forEach( city => $('#city-selector').append($('<option>').text(city)))
    })
};
$('#city-selector').change(cities());


let city = function() {
    $.ajax({
        url: "/api/coupons/cities",
    }).then( response => {
        // console.log(response);
        response.forEach( city => $('#city-select').append($('<a>').text(city)))
    })
};

$('#city-select').change(city());

        
//login page functions
    //display username after login
    //display local deals(10)

//signup page functions
    //cities dropdown
    //submit button function

//make selection a variable

//

//  You should be making API requests to your routes for data here.
