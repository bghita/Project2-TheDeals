const connection = require('../config/connection.js');


module.exports = {
    //need names on login form & signup
    signup: function (req, res) {
        console.log(req.body)
        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        var city = req.body.city;
        var interest = req.body.interest;
        connection.query("SELECT email FROM userinfo WHERE email = ?;", email, function (error, data) {
            if (error) throw error;
            console.log(data);
            if (data.length >= 1) {
                return res.json({ error: "Email already exists"})
            } else {

              const query = "INSERT INTO userinfo (user_name, email, password, city, interest) VALUES(?,?,?,?,?);"
                connection.query(query, [name, email, password, city, interest], function(error, data){
                    if(error) throw error;
                    console.log("User created");
                    // Either redirect the user or do something you want to do
                    // res.send('User created');
                    res.json({
                        success: true,
                        id: data.insertId
                    })
                });
            }
        });
    },
    // future update feature 
    // update: function (req, res) {
    //     console.log(req.body)
    //     var name = req.body.name;
    //     var email = req.body.email;
    //     var password = req.body.password;
    //     var city = req.body.city;
    //     var interest = req.body.interest;
    //     connection.query("SELECT email FROM userinfo WHERE email = ?", email, function (error, data) {
    //         if (error) throw error;
    //         console.log(data);
    //         if (data.length >= 1) {
    //             return res.json({ error: "user"})
    //         } else {

    //           const query = "INSERT INTO userinfo (user_name, email, password, city, interest) VALUES(?,?,?,?,?);"
    //             connection.query(query, [name, email, password, city, interest], function(error, data){
    //                 if(error) throw error;
    //                 console.log("User created");
    //                 // Either redirect the user or do something you want to do
    //                 // res.send('User created');
    //                 res.json({
    //                     success: true,
    //                     id: data.insertId
    //                 })
    //             });
    //         }
    //     });
    // },

    load: function(req, res) {
        connection.query("SELECT id, user_name, city, interest FROM userinfo WHERE id = ?;", [req.params.id], function(error, data){
            if (error) throw error;
            res.json(data);
        })
    },

    login: function(req, res) {
        // Send the user back once you find it
        var useremail = req.body.email;
        var userpass = req.body.password;
        var query = connection.query("SELECT id, user_name, email, password FROM userinfo WHERE email = ? AND password = ?;", [useremail, userpass], function(error, data){
            console.log(query.sql)
            if (error) throw error;
            console.log(data);
            if (data.length >= 1){
                return res.json({ data})
            } else{
                //log member in
                console.log(res.json({error: true}));
                console.log("User Logged In");            
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
