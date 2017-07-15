/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Saksham Narula",
    contacts: {
        mobile: '9872322927',
        email: "saman.narula@gmail.com",
        github: "sakshamnarula",
        location: "Chandigarh"
    },
    role: "Web Devolper",
    biopic: "images/fry.jpg",
    welcomeMessage: "Welcome to Saksham's dev world,full of oppurtunity.",
    skills: ['html', 'css', 'javascript']
};
var education = {
    schools: [{
            name: "CHITKARA UNIVERSITY",
            location: "Chandigarh",
            dates: "15-08-2015",
            degree: "B.E",
            url: "www.chitkara.edu.in",
            majors: ["CSE,DS,C++,CN"]
        },
        {
            name: "BIKANER BOYS SCHOOL",
            location: "Bikaner",
            degree: "High School",
            dates: "04-09-2015",
            majors: ["PCM,PE,ENGLISH"],
            url: "www.bikanerboysschool.ac.in"
        }
    ],
    onlineCourses: [{
            title: "Intro to html",
            school: "Udacity",
            dates: "18-02-17",
            url: "https://in.udacity.com/"
        },
        {
            title: "Intro to javascript",
            school: "Udacity",
            dates: "08-02-17",
            url: "https://in.udacity.com/"
        }
    ]
};
var work = {
    jobs: [{
            employer: "Chitkara University",
            title: "UPCOMING ENGINEER",
            location: "Chandigarh",
            dates: "04-09-16",
            description: "I Saksham Narula working under this institution as a student doing multiple projects in various fields."
        },
        {
            employer: "L&T",
            title: "SENIOR MANAGER",
            location: "New Delhi",
            dates: "12-12-20",
            description: "I Saksham Narula working under this company as senior manager in resource management and resource devolpment department in the company."
        }
    ]
};
var projects = {
    projects: [{
            title: "MOBILE PHONE DETECTOR",
            dates: "01-02-2016",
            description: "It is a device used to detect mobile phone.This device is used in examination hall offices etc ",
            images: ['https://i.ytimg.com/vi/FlKeFdDI49k/maxresdefault.jpg']
        },
        {
            title: "Portfolio",
            dates: "01-02-2017",
            description: "This project was given to me in frontend nanodegree program.I used css bootstrap and html in that project",
            images:["https://raw.githubusercontent.com/Agent5/udacity-frontend-project1/master/images/p1.jpg"]
        }
    ]
};
work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
        $(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
        $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
        $(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
};
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {
        $(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
          for (var j = 0; j < projects.projects[i].images.length; j++)
          {
            $(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]))
          }
    }
};
projects.display();
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name) + (HTMLschoolDegree.replace("%data%", education.schools[i].degree)));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        for (var j = 0; j < education.schools[i].majors.length; j++) {
            $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
        }
    }
    $(".education-entry").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
        $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school));
        $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates));
        $(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[k].url));

    }
};
education.display();
work.display();
bio.display = function() {
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
    $("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts,#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts,#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts,#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};
bio.display();
$('#mapDiv').append(googleMap);
