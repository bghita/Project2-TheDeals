const connection = require('../config/connection.js');


module.exports = {
    //need names on login form & signup
    signup: function (req, res) {
        var name = req.body.name;
        var email = req.body.email;
        var pw = req.body.password;
        var city = req.body.city_selector;
        connection.query("SELECT email FROM userinfo WHERE email = ?;", email, function (error, data) {
            if (error) throw error;
            console.log(data);
            if (data.length >= 1) {
                return res.json({ error: "Email already exists"})
            } else {
               const query = "INSERT INTO userinfo (user_name, email, password, city) VALUES(?,?,?,?);"
                connection.query(query, [name, email, pw, city], function(error, data){
                    if(error) throw error;
                    console.log("User created");
                    // Either redirect the user or do something you want to do
                    res.send('User created');
                });
            }
        });
    },
    login: function(req, res) {
        // Send the user back once you find it
        var useremail = req.body.email;
        var userpass = req.body.password;
        connection.query("SELECT email, password FROM userinfo WHERE email = ? AND password = ?;", [useremail, userpass], function(error, data){
            if (error) throw error;
            console.log(data);
            if (data.length >= 1){
                return res.json({ error: "Invalid email or password"})
            } else{
                //log member in
                let profile = res.json(data)
                
                // Clear localStorage
                localStorage.clear();

                // Store all content into localStorage
                localStorage.setItem("name", profile.name);
                localStorage.setItem("email", profile.email);
                localStorage.setItem("city", profile.city);
                localStorage.setItem("interest", profile.interest);

                // By default display the content from localStorage
                // $("").text(localStorage.getItem("name"));
                // $("").text(localStorage.getItem("email"));
                // $("").text(localStorage.getItem("city"));
                // $("").text(localStorage.getItem("interest"));

                $('.sign-up-btn').text('New Profile');
                $('.nav-form-input').addClass(d-none);
                $('.nav-form')
                    .append(`<p class="user-profile">${profile.name}</p>`)
                    .append(`<button class="btn btn-outline-success sign-out" type="submit">Log Out</button>`);
                

                console.log("User Logged In");
                // Either redirect the user or do something you want to do
                console.log(data);
             

            
            }
        })
        // grab email and password from req.body

        // Query database for email
            // if err throw err
            // check if the results password is equal to password given
            // if so, send the user back to the front end
            // else send an error saying wrong password
    }
}
