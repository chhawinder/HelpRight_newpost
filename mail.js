const firebaseConfig = {
    apiKey: "AIzaSyDqL9a_NOVueYz_Vzh6UXMChwv9lIx7-8g",
    authDomain: "helpright-9d98c.firebaseapp.com",
    databaseURL: "https://helpright-9d98c-default-rtdb.firebaseio.com",
    projectId: "helpright-9d98c",
    storageBucket: "helpright-9d98c.appspot.com",
    messagingSenderId: "26552912513",
    appId: "1:26552912513:web:c3fda805a9fa65fb605b80",
    measurementId: "G-8BLZ9R8843"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    console.log("this is running");
    var picture = getElementVal("picture");
    var options = getElementVal("options");
    var caption = getElementVal("caption");
    var location = getElementVal("location");
    var amount = getElementVal("amount");
    var bank_details = getElementVal("bank_details");

    saveMessages(picture, options, caption, location, amount, bank_details);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (picture, options, caption, location, amount, bank_details) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        picture: picture,
        options: options,
        caption: caption,
        location: location,
        amount: amount,
        bank_details: bank_details,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

