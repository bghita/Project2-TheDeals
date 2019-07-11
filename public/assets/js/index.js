let citiesID = function() {
    $.ajax({
        url: "/api/coupons/cities",
    }).then( response => {
        // console.log(response);
        response.forEach( city => $('#dropdownMenuLink').append($('<option>').text(city)))
    })
};
$('#dropdownMenuLink').change(cities());


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
};

console.log("hello");