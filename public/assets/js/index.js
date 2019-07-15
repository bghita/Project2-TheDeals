//location dropdown function
let dropdown = function () {
    $.ajax({
        url: "/api/coupons/cities",
    }).then(response => {
        // console.log(response);
        response.forEach(city => $('#city-selector').append($('<option>').addClass("cityOption").attr("value", city).text(city)))
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


//api city coupons
//Once the city is selected in #city-selector, 
//populate 10 area coupons in the #couponBox
let citycoupon = function (city) {
    $.ajax({
        url: "/api/coupons/coupons/",
        type: "POST",
        data: { grouponCity: city, grouponCats: "local" }
    }).then(response => {
        //populate list of coupons based on selected city
        $("#couponDiv").empty();
        for (let index = 0; index < response[0].length; index++) {
            //description of coupon
            const desCoupon = response[0][index]
            // url of coupon 
            const urlCoupon = response[1][index]
            // image of coupon
            const imgCoupon = response[2][index]
            // creating my html format 
            const $row = $("<div>").addClass("row")
            const $card = $("<div>").addClass("card col-md-10 offset-md-1");
            const $img = $("<img>").addClass("card-img-top").attr("src", imgCoupon);
            const $cardBody = $("<div>").addClass("card-body");
            const $p = $("<p>").addClass("card-text");
            const $a = $("<a>").attr("href", urlCoupon).attr("target", "_blank").text(desCoupon);
            // composite the html
            $row.append($card)
            $card.append($img, $cardBody)
            $cardBody.append($p)
            $p.append($a)
            // append to main html 
            $("#couponDiv").append($row)
        }
    })
};
$('#city-selector').change(function () {
    const city = $(this).val()
    citycoupon(city)
});


//deal of the day function
let dailyDeals = function (daily) {
    $.ajax({
        url: "/api/coupons/couponsdaily/",
        type: "POST",
        data: { grouponCity: daily, grouponCats: "travel" }
    }).then(response => {
        for (let index = 0; index < response[0].length; index++) {
            //description of coupon
            const dailyDec = response[0][index]
            // url of coupon 
            const dailyUrl = response[1][index]
            // image of coupon
            const dailyImg = response[2][index]
            // creating my html format 
            const $col = $("<div>").addClass("card col-sm-5")
            const $img2 = $("<img>").addClass("card-img-top").attr("src", dailyImg);
            const $dailyBody = $("<div>").addClass("card-body");
            const $p2 = $("<p>").addClass("card-text");
            const $a2 = $("<a>").attr("href", dailyUrl).attr("target", "_blank").text(dailyDec);
            // composite the html
            $col.append($img2, $dailyBody)
            $dailyBody.append($p2)
            $p2.append($a2)
            // append to main html 
            $("#mainDeals").append($col)
        }
    })
};
// $(document).onload(function () {
    {
    const daily = "Seattle"
    dailyDeals(daily)
};



//login page functions
//LOCAL STORAGE
// myStorage = window.localStorage;
//     //username and password from sign-up form page
// const email = document.localStorage.getItem('email');
// const password = document.localStorage.getItem('password');
//     //check if stored data matches input on login form
// btnInsert.onclick = function (){
//     const em = em.value;
//     const pw = pw.value();
// };