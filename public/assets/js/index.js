//location dropdown function
let dropdown = function() {
    $.ajax({
        url: "/api/coupons/cities",
    }).then( response => {
        // console.log(response);
        response.forEach( city => $('#city-selector').append($('<option>').text(city)))
    })
};
// $('#locationBtn').on("click", function(e){
//     const status = $(this).attr("data-toggle")
//     console.log(status)
//     if (status === "off"){
//         $(this).attr("data-toggle", "on")
//         $("#city-selector").show(); 
//     }
//     else{
//         $(this).attr("data-toggle", "off")
//         $("#city-selector").hide(); 
//     }
// })
$('#city-selector').change(dropdown());


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