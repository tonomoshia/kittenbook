var projectName = 'kittenbook';
var versionNumber = '0.0.1';
var currentDate = new Date();
//Create Date object. More about objects and Date objects in chapter 5.
//This object will be used to build our date.

//currentTime will look like '2014-01-25 at 14:45:12'
var currentTime = currentDate.getFullYear() + '-' +  //Set year
	(currentDate.getMonth() + 1)+ '-' + //Set Month
	currentDate.getDate() + ' at ' + //Set day of the month
	currentDate.getHours() + '-' + //Set hours (military time)
	currentDate.getMinutes() + '-' + //Set minutes
	currentDate.getSeconds(); //Set seconds