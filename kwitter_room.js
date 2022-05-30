var firebaseConfig = {
      apiKey: "AIzaSyCBLBiwbK5VWtHPv_efg0X06p5MT_TkVbE",
      authDomain: "kwitter-4a2b8.firebaseapp.com",
      databaseURL: "https://kwitter-4a2b8-default-rtdb.firebaseio.com",
      projectId: "kwitter-4a2b8",
      storageBucket: "kwitter-4a2b8.appspot.com",
      messagingSenderId: "945283106275",
      appId: "1:945283106275:web:ab1ccce219ba1726ad8cd6",
      measurementId: "G-641KM06K1P"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
