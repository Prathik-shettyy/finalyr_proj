const firebaseConfig = {
    apiKey: "AIzaSyABAuTflFAB2Cezg0FzBSg-pWMlN6_OWCc",
    authDomain: "mapp-3d24b.firebaseapp.com",
    databaseURL: "https://mapp-3d24b-default-rtdb.firebaseio.com",
    projectId: "mapp-3d24b",
    storageBucket: "mapp-3d24b.appspot.com",
    messagingSenderId: "831630036892",
    appId: "1:831630036892:web:5db4b9fbc4eb9856fb8259",
    measurementId: "G-R5151D76BT"
  };
  firebaseConfig.initializeApp(firebaseConfig);

  var contactFormDB = firebaseConfig.databaseURL().ref('book')
  document.getElementById('book').addEventListener('Find Shop', FindShop)
  function FindShop(e){
    e.preventDefault();
    var
  }
  const getElementByVal =  (id)=>{
    return document.getElementById(id).Value;
  }