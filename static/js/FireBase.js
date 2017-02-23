
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
	age.push(snap.val().Age);
	name.push(snap.val().Name);
	score.push(snap.val().Score);
	subject.push(snap.val().Subject);
	gender.push(snap.val().gender);
	region.push(snap.val().Region);

	$("#tables").append("<tr><td>"+snap.val().Name+"</td><td>"+snap.val().Age+"</td><td>"+snap.val().gender+"</td><td>"+snap.val().Region+"</td><td>"+snap.val().Score+"</td></tr>");
});
});
 