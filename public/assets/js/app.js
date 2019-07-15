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
        response.forEach( city => $('#city-selector').append($('<option>').text(city)))
    })
};
$('#city-selector').change(cities());


let city = function() {
    $.ajax({
        url: "/api/coupons/cities",
    }).then( response => {
        response.forEach( city => $('#city-select').append($('<a>').text(city)))
    })
};
$('#city-select').change(city());


$('#local-btn').on('click', (e) => {
    e.preventDefault();
    $('#local-btn').toggleClass('btn-secondary btn-success');
})
$('#goods-btn').on('click', (e) => {
    e.preventDefault();
    $('#goods-btn').toggleClass('btn-secondary btn-success');
})
$('#travel-btn').on('click', (e) => {
    e.preventDefault();
    $('#travel-btn').toggleClass('btn-secondary btn-success');
})

let interest = [];

$('#subBtn').on('click', (e) => {
    e.preventDefault();
    if($('.form-control').val() === ""){
        alert("Please fill out form in full");
    }else{
        if($('#local-btn').hasClass('btn-success')) {
            interest.push('local');
        } if($('#goods-btn').hasClass('btn-success')) {
            interest.push('goods');
        } if($('#travel-btn').hasClass('btn-success')) {
            interest.push('travel');
        }
        let name = $('#name').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let city = $('#city-selector').val();
        localStorage.clear();
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password)
        localStorage.setItem("city", city);
        localStorage.setItem("interest", interest);
        location.href = 'index.html';
        $.ajax({
            url: "/api/auth/signup",
        }).then( response => {
            console.log(response);
        })
    }
});

