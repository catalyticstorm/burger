// JavaScript Document

//Initalize Firebrand
config = {
	apiKey: "AIzaSyCYtenPYP2jKguBAyOzuKBqecgEiT_ilio",
	authDomain: "burgerapplication-53c41.firebaseapp.com",
	databaseURL: "https://burgerapplication-53c41.firebaseio.com",
	projectId: "burgerapplication-53c41",
	storageBucket: "burgerapplication-53c41.appspot.com",
	messagingSenderId: "633285676283"
  };
    firebase.initializeApp(config);
    var database = firebase.database();
    var burgersEaten = "";
    var burgersToEat = "";
	
    $("#addABurger").on("click", function() {
      event.preventDefault();
      burgerToEat = $("#submitABurger").val().trim();
	  

      database.ref().push({
        burgersEaten: burgersEaten,
      });
    });
    database.ref().on("child_added", function(snapshot) {
//      console.log(now.diff(theTime));
//      console.log(snapshot.val().dest);
//      console.log(snapshot.val().flightNo);
//      console.log(snapshot.val().origin);
//      console.log(snapshot.val().gate);
//	  console.log(snapshot.val().theTime);
//  $("tbody").after("<tr>");
//  $("tbody").after("<td>" + nowDiff(theTime) + "</td>");
//  $("tbody").after("<td>" + snapshot.val().theTime + "</td>");
//  $("tbody").after("<td>" + snapshot.val().gate + "</td>");
//  $("tbody").after("<td>" + snapshot.val().origin + "</td>");
//  $("tbody").after("<td>" + snapshot.val().flightNo + "</td>");
//  $("tbody").after("<td>" + snapshot.val().dest + "</td>");
//  $("tbody").after("<tr>");
		$("#toeataburger").push(snapshot.val().burgersEaten);




    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
