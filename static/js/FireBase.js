
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

defaultDatabase.on('child_added',function(snap) {
	$("#tables").append("<tr><td>"+snap.val().Name+"</td><td>"+snap.val().Age+"</td><td>"+snap.val().Gender+"</td><td>"+snap.val().Subject+"</td><td>"+snap.val().Score+"</td></tr>");
});
});
 