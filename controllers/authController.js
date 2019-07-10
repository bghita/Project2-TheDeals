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
                    // Either redirect the user or do something you want to do
                    res.send('User created');
                });
            }
        });
    },
    login: function(req, res) {
        // Send the user back once you find it
        // grab email and password from req.body

        // Query database for email
            // if err throw err
            // check if the results password is equal to password given
            // if so, send the user back to the front end
            // else send an error saying wrong password
    }
}
