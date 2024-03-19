// Types of Objects
// There are Two Methods of assign datatype in Objects..!
// 1) interface  ==> Use in Only Array and Objects
// 2) Type ==> Use in Other Common Datatypes..!
var myEmployee = {
    Name: "Tayyab Ahmed",
    ID: 108091,
    Department: "Information Technology",
    Designation: "SR.Developer",
    BankDetails: {
        AccountNumber: 12346789045,
        AccountType: "Current",
        Salary: "45000 PKR",
        isActive: true,
    }
};
var empDetails = {
    Age: 20,
    IQ: 79,
    Typspeed: "25 WPM",
    Hobbies: ["Gaming", "Coding", "Cricket", "Writting"],
};
var myEmployee1 = {
    Name: "Ali Ahmed",
    ID: 108092,
    Department: "Information Technology",
    Designation: "JR.Developer",
    BankDetails: {
        AccountNumber: 128946789045,
        AccountType: "Current",
        Salary: "35000 PKR",
        isActive: true,
    }
};
var empDetails1 = {
    Age: 19,
    IQ: 81,
    Typspeed: "29 WPM",
    Hobbies: ["Gaming", "Coding", "Cricket", "Reading"],
};
console.log(myEmployee);
console.log(empDetails);
console.log(myEmployee1);
console.log(empDetails1);
console.log(empDetails1.IQ);
console.log("The Employee ID is: ", myEmployee.ID);
