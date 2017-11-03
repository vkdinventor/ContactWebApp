function clickToSave() {
    console.log('save button submitted');
    var name = document.getElementById('name').value;
    var company = document.getElementById('company').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var group = document.getElementById('group').value;
    console.log("contact details "+name+" "+company+" "+email+" "+address+" "+group);
    var result = confirm( "Do you want to save?" );
    
    if ( result ) {
        // the user clicked ok
        writeUserData(name, company, email, phone, address, group);
        location = location;
    } else {
        // the user clicked cancel or closed the confirm dialog.
    }
}

function loadContact(){
    var contactRef = firebase.database().ref('users');
    contactRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          console.log('contact details : '+childData.name);
        });
    });
}

function writeUserData(name, company, email, phone,address,group) {
    firebase.database().ref('users').push({
        name: name,
        company:company,
        email: email,
        phone:phone,
        address:address,
        group : group
      });
  }

console.log('starting the script for button handling');