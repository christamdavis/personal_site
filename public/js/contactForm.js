// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyAqy0LMOV6yZcRW2Ni9F9txB-Mjsss2rDc",
  authDomain: "personalsite-b71bf.firebaseapp.com",
  databaseURL: "https://personalsite-b71bf-default-rtdb.firebaseio.com",
  projectId: "personalsite-b71bf",
  storageBucket: "personalsite-b71bf.appspot.com",
  messagingSenderId: "357313985953",
  appId: "1:357313985953:web:ba6e7d60ebb11b1f2d5fe0",
  measurementId: "G-LTR49KYYK3"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
