const firebaseConfig = {
    apiKey: "AIzaSyBhHIJ2UqV2U9OjBpQ1ZSeY0kzV7ujRCx4",
    authDomain: "contactform-cy.firebaseapp.com",
    databaseURL: "https://contactform-cy-default-rtdb.firebaseio.com",
    projectId: "contactform-cy",
    storageBucket: "contactform-cy.appspot.com",
    messagingSenderId: "1065113236215",
    appId: "1:1065113236215:web:a8443e7ec3f97c95f1d9f2"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference the database
  var contactFormDB = firebase.database().ref('contactform');

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    var firstName = getElementVal('firstName');
    var lastName = getElementVal('lastName');
    var phone = getElementVal('phone');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var message = getElementVal('message');

    saveMessages(firstName, lastName, phone, email, subject, message);

    document.querySelector(".alert").style.display = "block";

    //remove alert after some time
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //reset the form
    //document.getElementById("contactForm").reset()
  }

  const saveMessages = (firstName, lastName, phone, email, subject, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      firstName : firstName,
      lastName : lastName,
      phone : phone,
      email : email,
      subject : subject,
      message : message,
    });
  };


  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }