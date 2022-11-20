const firebaseConfig = {
      apiKey: "AIzaSyA0E2kRsROAtUutXQDyU1fC2L-hfJQK1TY",
      authDomain: "kwitter-9dc45.firebaseapp.com",
      projectId: "kwitter-9dc45",
      storageBucket: "kwitter-9dc45.appspot.com",
      messagingSenderId: "1085685165801",
      appId: "1:1085685165801:web:528006925a89854d728a78",
      measurementId: "G-JW9BEXXB6E"
    };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+ Room_names);
      row = "<div class='room_name'id="+room_names+" onclick='redirectToroomname(this.id)' >#"+ room_names + "</div><hr";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addroom()
{
      Room_names = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.removeItem("room_name");
}