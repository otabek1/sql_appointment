// create express template
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const studentController = require('./controller/student.controller');
const scheduleController = require('./controller/schedule.controller');
dotenv.config()
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
const port = process.env.PORT || 3000;



app.get('/', function (req, res) {
    res.render('signUp');
});

app.get("/signIn", function (req, res) {
    res.render('signIn');
});

// get schedule
app.get("/schedule", function (req, res) {
    res.render('schedule');
});
// app.get("/test2", function (req, res) {
//     res.render('schedule');
//     scheduleController.getSchedules();
// });
// post schedule
app.post("/schedule", function (req, res) {
    // get all the data from the form
    const body = req.body;
    const data = {
        "UID": body.uid,
        "FName": body.firstName,
        "LName": body.lastName,
        "Pronouns": body.pronouns,
        "Email": body.email,
        "PhoneNum": body.phoneNumber,
        "Major": body.major,
        "ClassStanding": body.classStanding,
        "ExpectGradYEar": body.graduationYear,
        "FirstLanguage": body.language,
    }
    console.log(data);
    studentController.createStudent(data);
    res.redirect("/availability");
});


// get availability
app.get("/availability", async function (req, res) {
   const schedules =  await scheduleController.getSchedules();
//    create a list of all the schedules
for (let index = 0; index < schedules.length; index++) {
    schedules[index]  = schedules[index].dataValues;
}
    console.log('schedules>>>', schedules);
    //conver to json
    const json = JSON.stringify(schedules);
    // console.log('json>>>', json);
    res.render('availability', { schedules: json });
});

// post availability
app.post("/availability", function (req, res) {
    // get all the data from the form
    const body = req.body;
});

//get confirmation
app.get("/confirmation", function (req, res) {
    res.render('confirmation');
});

app.listen(port, function () {
    console.log('Server is running on port ' + port);
});