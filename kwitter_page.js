//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name = message_data('name');
message = message_data('message');
like= message_data('like');
name_width_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
message_width_tag = "<h4 class='message_h4'"+ message + "</h4>";
like_button = "<button class='btn btn-warning' id="+ firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>";
span_with_tag = "span class='glyphicon glyphicon-thumbs-up'>like:"+ like+"</span></button><hr>";

row= name_width_tag + message_width_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

function updatelike(message_id)
{
      console.log("clicked on like button -"+ message_id);
      button_id= message_id;
      likes= document.getElementById(button_id).value;
      update_likes = number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

function logout(){
      localStorage.removeitem("user_name");
      localStorage.removeitem("room_name");
      window.location.replace("kwitter.html");
}

function send()
{
      msg = documen.getElementById("msg").value;
      firebase.database().ref(room_nsme).push({
            name:user_name,
            message:msg,
            like:0
      })
      documen.getElementById(msg).value= "";
}
//End code
      } });  }); }
getData();
