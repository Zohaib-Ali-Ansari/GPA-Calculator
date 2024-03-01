let noOfCoursesBtn = document.getElementById("no-of-courses-btn");
let noOfCoursesField = document.getElementById("no-of-courses-field");
let subContainer2 = document.getElementById("sub-container-2");
let calculateBtn = document.getElementById("calculate-btn");
let mainContainer = document.querySelector("#main-container");
let outputContainer = document.querySelector("#output-container");
let cancelBtn = document.getElementById("cancel-btn");
let body = document.querySelector("body");

let noOfCourses;
noOfCoursesBtn.addEventListener("click", function () {
    noOfCourses = noOfCoursesField.value;
    if (noOfCourses == "" || noOfCourses == 0) {
        alert("Please fill out the field");
    } else {
        subContainer2.innerHTML = "";
        for (let i = 1; i <= noOfCourses; i++) {
            let inputs = `
            <label for="gp-of-course-${i}">Enter Numeric Grades of Course ${i}</label>
            <br>
            <input type="number" name="gp-of-course-${i}" id="gp-of-course-${i}" placeholder="For example:3.66">
            <br><br>
            <label for="credit-hours-of-course-${i}">Enter Credit Hours of Course ${i}</label>
            <br>
            <input type="number" name="credit-hours-of-course-${i}" id="credit-hours-of-course-${i}" placeholder="For example:3">
            <br><br><br>
            `;
            subContainer2.innerHTML += inputs;

        };
        calculateBtn.style.display = "block";
    };
});



let gpa = 0;
let totalHours = 0;
calculateBtn.addEventListener("click", function () {
    for (let i = 1; i <= noOfCourses; i++) {
        let gpOfCoursefield = document.getElementById("gp-of-course-" + i);
        let creditHoursOfCoursefield = document.getElementById("credit-hours-of-course-" + i);
        let gpOfCourse = parseFloat(gpOfCoursefield.value);
        let creditHoursOfCourse = parseInt(creditHoursOfCoursefield.value);

        if (isNaN(gpOfCourse) || isNaN(creditHoursOfCourse)) {
            alert("Please fill out all the fields");
            return;
        } else if (creditHoursOfCourse == 0) {
            alert("Credit Hours cannot be zero. Please enter valid values.");
            return;
        } else {
            gpa += gpOfCourse * creditHoursOfCourse;
            totalHours += parseInt(creditHoursOfCourse);
        }
    }


    let tagForGPA = document.getElementById("gpa");
    mainContainer.style.display = "none";
    outputContainer.style.display = "block";
    body.style.backgroundColor = "white";

    let finalGPA = gpa / totalHours;
    tagForGPA.innerText = finalGPA.toFixed(2);
});

cancelBtn.addEventListener("click", function () {
    mainContainer.style.display = "block";
    outputContainer.style.display = "none";
    body.style.backgroundColor = "#9290C3";
});



