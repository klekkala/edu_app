
 $(document).ready(function(){
 	
 	var config = {
    apiKey: "AIzaSyDkrThcZue7o9NIsNkV8XVHt3qZEPfkJNU",
    authDomain: "quizdata-b6c64.firebaseapp.com",
    databaseURL: "https://quizdata-b6c64.firebaseio.com",
    storageBucket: "quizdata-b6c64.appspot.com",
    messagingSenderId: "662788470433"
  };
  

var defaultApp = firebase.initializeApp(config);
defaultDatabase = firebase.database().ref();
var age=[]
var name=[]
var score=[]
var region=[]
var gender=[]
var subject=[]
defaultDatabase.on('child_added',function(snap) {
	
	age.push(snap.val().age);
	name.push(snap.val().first_name);
	score.push(snap.val().score);
	subject.push(snap.val().subject);
	gender.push(snap.val().gender);
	region.push(snap.val().region);

	$("#tables").append("<tr><td>"+snap.val().first_name+"</td><td>"+snap.val().subject+"</td><td>"+snap.val().gender+"</td><td>"+snap.val().region+"</td><td>"+snap.val().score+"</td></tr>");
});


firebase.database().ref('users/').set({
    username: "SSS"	,
    email: "email",
    profile_picture : "imageUrl"
  });
});
 