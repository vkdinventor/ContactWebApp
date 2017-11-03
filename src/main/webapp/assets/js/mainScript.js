function loadContact(){
    var myvar = "";
    var contactRef = firebase.database().ref('users');
    var dataSet = new Array();
    contactRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          dataSet.push(childData);
          console.log('contact details : '+childData.name+' '+childData.phone+' '+childData.email);
          
 myvar = myvar+ '<tr>'+
'                <td class="middle">'+
'                  <div class="media">'+
'                    <div class="media-left">'+
'                      <a href="#">'+
'                        <img class="media-object" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqeVOZbJuUSqe7WlfgL7v6miEZfRuWh5ZwsFKEdeim4w3VSLJ" alt="...">'+
'                      </a>'+
'                    </div>'+
'                    <div class="media-body">'+
'                      <h4 class="media-heading">'+childData.name+'</h4>'+
'                      <address>'+
'                        <strong>'+childData.phone+'</strong><br>'+
                        childData.email+
'                      </address>'+
'                    </div>'+
'                  </div>'+
'                </td>'+
'                <td width="100" class="middle">'+
'                  <div>'+
'                    <a href="#" class="btn btn-circle btn-default btn-xs" title="Edit">'+
'                      <i class="glyphicon glyphicon-edit"></i>'+
'                    </a>'+
'                    <a href="#" class="btn btn-circle btn-danger btn-xs" title="Edit">'+
'                      <i class="glyphicon glyphicon-remove"></i>'+
'                    </a>'+
'                  </div>'+
'                </td>'+
'              </tr>';
        });
        document.getElementById('progressImage').style.display = 'none';
        document.getElementById('contactTable').innerHTML = myvar;        
    });
    console.log('All contact details : '+dataSet);
}

loadContact();

