var bio = {
    "name": "Clayton Barrozo de Oliveira",
    "role": "Web Developer",
    "contacts": {
        "mobile": "087-787-4361",
        "email": "clayton.barrozo@gmail.com",
        "github": "claytonbarrozo",
        "twitter": "claytonbarrozo",
        "location": "Dublin, Ireland",
    },
    "welcomeMessage": "Welcome to my page",
    "skills": [
        "Web Developer", "HTML", "CSS", "JS", "GITHUB"
    ],
    "biopic": "images/me.jpg"
};
//Education  
var education = {
    "schools": [{
        "name": "University of Wales",
        "location": "Galway,Ireland",
        "degree": "BA in Business Management",
        "majors": ["Management"],
        "dates": '2014',
        "url": "https://www.galwaybusinessschool.com/"
    }],
    "onlineCourses": [{
        "title": "Front End Devloper",
        "school": "Udacity",
        "dates": '2016',
        "url": "https://www.udacity.com/"
    }]
};
//work
var work = {
    "jobs": [{
        "employer": "Allianz Worldwide Care",
        "title": "Medical Coordinator",
        "dates": '2015',
        "location": "Parkwest, Dublin 12, Ireland",
        "description": "Coodination of tasks among all the team,<br> SharePoint Administrator for the Departament and Developing a new projects,<br> researching and innovating process' to create savings to the Medical Service department."

    }, {
        "employer": "Accenture / Google",
        "title": "Multilingual Customer Service Associate at Google",
        "dates": '2014',
        "location": "Eastpoint Business Park, Dublin, Ireland",
        "description": "Providing first level phone and online support for Account Recovery Investigation Services for BTC and BTB Google clients.<br> Average of 20 calls per day, Helping the account owner by establishing if a claim is legitimate. Review claims based on a set of rules that indicate whether the claimant is the legitimate owner of the account."
    }]
};
//projects
var projects = {
    "projects": [{
        "title": "Mockup To Article",
        "dates": "September 2016",
        "description": "Using given html code to convert an unformatted page into an article.",
        "images": ["images/article.png"]
    }, {
        "title": "Animal Trading Cards",
        "dates": "September 2016",
        "description": "Use what I have learned about CSS to convert a design prototype into a functional webpage!",
        "images": ["images/Animalcards.png"]
    }, {
        "title": "Portfolio Site",
        "dates": "October 2016",
        "description": "I developed a responsive website that will display images, descriptions and links to each of the portfolio projects I will complete throughout the course of the Front-End Web Developer Nanodegree.",
        "images": ["images/portofolios.png"]
    }, {
        "title": "Soccer Kids Soccer",
        "dates": "October 2016",
        "description": "Build a website to a colleague of mine",
        "images": ["http://soccerkids.ie/images/logo1.png"]
    }]

};
//Show my name on the header
//var name = "Clayton Barrozo de Oliveira";
bio.display = function() {
    //this replace the data from %ata% to bio.name...
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    //this part adds the Role in the header
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $('#header').append(formattedBioPic);
    $('#topContacts, #footerContacts').append(formattedMobile);
    $('#topContacts, #footerContacts').append(formattedEmail);
    $('#topContacts, #footerContacts').append(formattedGithub);
    $('#topContacts, #footerContacts').append(formattedTwitter);
    $('#topContacts, #footerContacts').append(formattedLocation);
    $('#header').append(formattedwelcomeMsg);
    //This line shows the Skills at a Glance
    $("#header").append(HTMLskillsStart);



    //skills part 

    //This loop replace %data% with skills from bio 
    for (var i = 0; i < bio.skills.length; i++) {

        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

//Diplay the bio on the header
bio.display();

work.display = function() {
    work.jobs.forEach(function(jobs) {
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart); //contact employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", jobs.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", jobs.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        // Dates
        var formattedDates = HTMLworkDates.replace("%data%", jobs.dates);
        $(".work-entry:last").append(formattedDates);
        //Description
        var formattedDescription = HTMLworkDescription.replace("%data%", jobs.description);
        $(".work-entry:last").append(formattedDescription);
    });
};
work.display();
//project section
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedprojectTitle);

        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedprojectDates);

        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedprojectDescription);

        for (var i = 0; i < project.images.length; i++) {

            var formattedprojectimage = HTMLprojectImage.replace("%data%", project.images);
            $(".project-entry:last").append(formattedprojectimage);

        }
    });
};

projects.display();

//clicks for the website
$(document).click(function(loc) {
    var x = loc.pagex;
    var y = loc.pagey;

    logClicks(x, y);
});

//Internationalize Names with a button on under the footer
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

//Education section
education.display = function() {

    education.schools.forEach(function(schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", schools.name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", schools.degree);
        $(".education-entry:last").append(formattedDegree);



        var formattedLocation = HTMLschoolLocation.replace("%data%", schools.location);
        $(".education-entry:last").append(formattedLocation);

        var formattedDates = HTMLschoolDates.replace("%data%", schools.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedMajor = HTMLschoolMajor.replace("%data%", schools.majors);
        $(".education-entry:last").append(formattedMajor);

        var formattedSchool = HTMLschoolName.replace("%data%", schools.name).replace("%data%", schools.url);



    });
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", course.url);

        $(".education-entry:last").append(formattedTitle);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedUrl);
    });
};
// to see a map
$("#mapDiv").append(googleMap);
//Display education, online courses and map on the page
education.display();