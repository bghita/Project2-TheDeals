// let grouponCity = "san-francisco";
// let grouponCat = "Local";

$(function () {
    $('[data-toggle="popover"]').popover()
})

//needs directing -- attr('data-content',___)... VVVVV



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

let id = "";
let name = "";
let email = "";
let password = "";
let interestList = [];

$('#subBtn').on('click', (e) => {
    e.preventDefault();
    if(($('.form-control').val() === "") || ($('#city-selector').val() === "") || ($('.form-control').val() === "")) {
        alert("Please fill out form in full");
    }else{
        if($('#local-btn').hasClass('btn-success')) {
            interestList.push('local');
        } if($('#goods-btn').hasClass('btn-success')) {
            interestList.push('goods');
        } if($('#travel-btn').hasClass('btn-success')) {
            interestList.push('travel');
        }
        name = $('#name').val();
        email = $('#email').val();
        password = $('#password').val();
        let city = $('#city-selector').val();
        let interest = interestList.join(", ")
        localStorage.clear();
        // localStorage.setItem("name", name);
        // localStorage.setItem("email", email);
        // localStorage.setItem("password", password)
        // localStorage.setItem("city", city);
        // localStorage.setItem("interest", interest);
        $.ajax({
            url: "/api/auth/signup",
            method: "POST",
            data: {
                name, // name: name
                email,
                password,
                city,
                interest
            }
        }).then( response => {
            
            if(response.success === true) {
                localStorage.setItem("id", response.id);
                // profileLoad();
                location.href = 'index.html';
            }
        })
    }
});

const profileLoad = function() {
    if(parseInt(localStorage.getItem("id")) >= 0) {
        let entry = parseInt(localStorage.getItem("id"));
        $('.sign-up-btn').text('New Profile');
        $('.nav-form-input').addClass("d-none");
        $.ajax({
            url: "/api/auth/load/"+entry,
            method: "GET"            
        }).then( response => {
            console.log(response);
            name = response[0].user_name;
            $('.nav-form')
                .append(`<p class="user-profile userName text-success px-2 my-auto"><ion-icon name="cash" class="md hydrated mx-1 my-auto"></ion-icon>${name}</p>`)
                .append(`<button class="btn btn-outline-success sign-out" type="submit">Log Out</button>`);
            
        })
    }
}



$(document).on('click', ".log-in", (e) => {
    let email = $('.email').val();
    let password = $('.password').val();

    e.preventDefault();
    $.ajax({
        url: "/api/auth/login/",
        method: "POST",
        data:  {
            email,
            password
        }           
    }).then( response => {
        console.log(response);
        id = response.data[0].id;
        name = response.data[0].id;
        localStorage.setItem('id', id);
        localStorage.setItem('name', name)
        location.href = 'index.html';        
    })
})


$(document).on('click', ".sign-out", (e) => {
    e.preventDefault();
    localStorage.clear();
    location.href = 'index.html';
});

$( document ).ready(categories())
$( document ).ready(profileLoad())