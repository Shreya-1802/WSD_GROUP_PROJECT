const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const conn = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Shreya@123",
    database: "memeapp",
});

conn.getConnection((err) => {
    if (err) console.log(err);
    else {
        console.log("MySQL connection Pool Created")
    }
});

const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log("The server is running at port: " + port);
});

app.get("/", (req, res) => {
    res.send(`<h1>Welcome</h1>`)
});

app.post("/login", (req, res) => {
    let {username, password} = req.body;

    let query = `select * from users where username = '${username}'`;

    conn.query(query, (err, rows) => {
        console.log("err", err)
        console.log("rows", rows)
        if(rows.length == 0) {
            res.send("error")
        }
        else {
            rows[0].password === password ? res.send("Valid") : res.send("Invalid")
        }
    })
});

app.post("/signin", (req, res) => {
    let {name, gender, email, username, password, phoneNumber} = req.body;

    let query = `insert into users(name, gender, email, username, password, phoneNumber) values('${name}', '${gender}', '${email}', '${username}', '${password}', '${phoneNumber}')`;

    conn.query(query, (err) => {
        err ? res.send("error") : res.send("Added")
    })
});

app.post("/feedback", (req, res) => {
    let {name, email, feedback} = req.body;

    let query = `insert into feedback(name, email, feedback) values ('${name}','${email}','${feedback}')`;

    conn.query(query, (err) => {
        err ? res.send("error") : res.send("Done")
    })
});