// create a class called Person in the file below
var Person = /** @class */ (function () {
    //Create a constructor to initialize these properties
    function Person(firstName, lastName, age, phoneNumber, zipcode, occupation, hourlyWage, hours
    //certificates:any[]
    ) {
        //Create a property for a person's certifications/degrees that is an array
        this.certificates = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.zipcode = zipcode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        this.hours = hours;
        this.certificates = this.certificates;
    }
    //create several method to return combinations of interest, such as Full name, Name and Phone Number, Location, etc
    Person.prototype.fullName = function () {
        return "Full name is " + this.firstName + " " + this.lastName;
    };
    Person.prototype.namePhoneNumber = function () {
        return ("Name: " +
            this.firstName +
            " " +
            this.lastName +
            ", Phone Number: " +
            this.phoneNumber);
    };
    Person.prototype.personLocation = function () {
        return ("Name: " +
            this.firstName +
            " " +
            this.lastName +
            ", Zipcode: " +
            this.zipcode);
    };
    Person.prototype.nameOccupation = function () {
        return ("Name: " +
            this.firstName +
            " " +
            this.lastName +
            ", Occupation: " +
            this.occupation);
    };
    Person.prototype.wageOccupation = function () {
        return ("Occupation: " + this.occupation + ", Hourly Wage: $" + this.hourlyWage);
    };
    //Add a function that calculates a weekly wage and takes the number of hours as an optional parameter
    Person.prototype.calculateWage = function () {
        if (this.hours) {
            this.hours = this.hours;
        }
        else {
            // If it is not presented, use a typical 40 hours to calculate the wage
            this.hours = 40;
        }
        var weekEarnings = this.hourlyWage * this.hours;
        return ("Name: " +
            this.firstName +
            "\n" +
            this.lastName +
            " Weekly Earnings: $" +
            weekEarnings);
    };
    Person.prototype.setCertificates = function () {
        var certificates = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certificates[_i] = arguments[_i];
        }
        this.certificates = certificates;
        addDegrees();
    };
    Person.prototype.getCertificates = function () {
        return this.certificates;
    };
    return Person;
}());
//create a function called addCerts() that takes an unknown number of arguments and adds them to the array
function addDegrees() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        this.certificates.push(args[i]);
    }
    return this.certificates;
    console.log(this.certificates);
}
//Create a method in the class that takes an option parameter and returns an Employee (Person) based on the options given.
function PersonOptions(options) {
    var newUser = {
        firstName: "Cherry",
        lastName: "Hart",
        occupation: "Unemployed"
    };
    /*if (options.firstName) {
      newUser.firstName = options.firstName;
    }
    if (options.lastName) {
      newUser.lastName = options.lastName;
    }*/
    if (options.occupation) {
        newUser.occupation = options.occupation;
    }
    else {
        return null;
    }
    return newUser;
}
//Implement this will a few different options to observe how it works.
var newNewUser = PersonOptions({
    firstName: "No",
    lastName: "Name",
    occupation: "Truck Driver"
});
//function sayHello(person: any): any {
//  return "Hello, " + person;
//}
// create several people
var user1 = new Person("Cherish", "Moore", 23, "704-726-7222", 28052, "Developer", 30, 50);
var user2 = new Person("Jenny", "Long", 32, "980-316-9282", 28052, "Receptionist");
var user3 = new Person("Shanice", "Little", 43, "704-236-8000", 28052, "Store Clerk");
var user4 = new Person("James", "Brown", 18, "704-222-9001", 28052, "Delivery Driver", 7, 40);
var user5 = new Person("Dillon", "Waylon", 30, "980-336-7232", 28052, "Engineer");
var user6 = new Person("Earl", "Johnson", 23, "704-824-5505", 28052, "Mechanic", 50, 80);
var user7 = new Person("Jamie", "Fox", 43, "980-989-3003", 28052, "Actor", 150, 170);
// assign the output of some of their infomration to various <div> sections in your page
document.getElementById("div1").innerHTML = user1.fullName();
document.getElementById("div2").innerHTML = user2.namePhoneNumber();
document.getElementById("div3").innerHTML = user3.personLocation();
document.getElementById("div4").innerHTML = user4.wageOccupation();
document.getElementById("div5").innerHTML = user5.nameOccupation();
document.getElementById("div6").innerHTML = user6.calculateWage();
user7.setCertificates("MBA", "CSM");
document.getElementById("degrees").innerHTML = user7.getCertificates().toString();
document.getElementById("interface").innerHTML =
    "New User1 " +
        newNewUser.firstName +
        " " +
        newNewUser.lastName +
        " " +
        newNewUser.occupation;
