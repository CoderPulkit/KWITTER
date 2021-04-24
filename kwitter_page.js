//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCN1a8RQK3JokUb1uOETsolwcwi2hiUDjY",
      authDomain: "social-media-8406d.firebaseapp.com",
      databaseURL: "https://social-media-8406d-default-rtdb.firebaseio.com",
      projectId: "social-media-8406d",
      storageBucket: "social-media-8406d.appspot.com",
      messagingSenderId: "464218930450",
      appId: "1:464218930450:web:d53d8ac2da5e71804407cb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    function send() {
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
 name:user_name,
 message:msg,
 like:0
  });
  document.getElementById("msg").value="";
    }

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
     
//End code
      } });  }); }
getData();
